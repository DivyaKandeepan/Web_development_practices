import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Add a new todo to the todoList
  // Assign a unique todoId to the new todo by finding the maximum id in the existing list and incrementing it
  onAddTodo(todoText: string) {
    if (todoText) {
      const newTodo: Todo = {
        todoId: this.getMaximumId() + 1,
        text: todoText,
        isCompleted: false
      };
      this.todoList.push(newTodo);
    }
  }

  // Clear all todos in the todoList
  onClearTodos() {
    this.todoList = [];
  }

  // Toggle the completion status of a todo
  onCompletingTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  // Delete a specific todo from the todoList
  onDeletingTodo(todoId: number) {
    this.todoList = this.todoList.filter(todo => todo.todoId !== todoId);
  }

  // Get the maximum todoId from the existing todos in the todoList
  private getMaximumId(): number {
    let maxId = 0;
    this.todoList.forEach(todo => {
      if (todo.todoId && todo.todoId > maxId) {
        maxId = todo.todoId;
      }
    });
    return maxId;
  }
}
