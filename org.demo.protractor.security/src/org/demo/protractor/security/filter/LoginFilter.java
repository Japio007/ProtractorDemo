package org.demo.protractor.security.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.Property;
import org.apache.felix.dm.annotation.api.ServiceDependency;
import org.demo.protractor.security.api.LoginService;

@Component(properties=@Property(name="pattern", value=".*"))
public class LoginFilter implements Filter {
	
	@ServiceDependency
	private volatile LoginService loginService;

	@Override
	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException,
			ServletException {
		HttpServletRequest request = (HttpServletRequest)req;
		HttpServletResponse response = (HttpServletResponse)res;
		
		if (!request.getRequestURI().contains("login")) {
			// Only check the non login resources
			Cookie[] cookies = request.getCookies();
			for (Cookie c : cookies) {
				if (LoginService.COOKIE_NAME.equals(c.getName())) {
					loginService.verify(c.getValue());
				}
			}
		}
        
        chain.doFilter(request, response);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}