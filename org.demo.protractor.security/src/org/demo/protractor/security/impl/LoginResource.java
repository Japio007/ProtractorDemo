package org.demo.protractor.security.impl;

import java.net.URI;
import java.net.URISyntaxException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.CookieParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.ServiceDependency;
import org.demo.protractor.security.api.LoginService;
import org.demo.protractor.security.api.User;

@Component(provides=Object.class)
@Path("/login")
public class LoginResource {
	
	@Context
    private HttpServletRequest request;
	
	@ServiceDependency
	private volatile LoginService loginService;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(User user) {
		String token = loginService.login(user.username, user.password);
		User loggedInUser = loginService.getLoggedInUser(token);
		return Response.ok(loggedInUser).cookie(new NewCookie(LoginService.COOKIE_NAME, token)).build();
	}

	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout() {
		return Response.ok().cookie(new NewCookie(LoginService.COOKIE_NAME, null)).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public User getLoggedInUser(@CookieParam(LoginService.COOKIE_NAME) String token) {
		return loginService.getLoggedInUser(token);
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public void register(User user) {
		loginService.createUser(user);
	}

	@GET
	@Path("/activate")
	@Produces(MediaType.APPLICATION_JSON)
	public Response activate(@QueryParam("username") String username, @QueryParam("activationtoken") String activationToken) throws URISyntaxException {
		String token = loginService.activate(username, activationToken);
		return Response.seeOther(new URI("http://127.0.0.1:3000/")).cookie(new NewCookie(LoginService.COOKIE_NAME, token)).build();
	}
}
