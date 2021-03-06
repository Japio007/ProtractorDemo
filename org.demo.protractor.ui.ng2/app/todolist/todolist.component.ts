import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoList} from './todoList.model';

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: [CORE_DIRECTIVES]
})
export class TodolistComponent {
    public todos: TodoList[] = [];

    constructor() {
        this.addNewList();
    }

    public addNewList() {
        this.todos.push(new TodoList());
    }

    public removeList(index: number) {
        this.todos.splice(index, 1);
    }
}
