import { makeObservable, observable, action } from "mobx";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoStore {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeObservable(this, {
      todos: observable,
      newTodo: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodoCompletion: action,
      setNewTodoText: action,
    });
  }

addTodo() {
    if (this.newTodo !== '') {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  setNewTodoText(text: string) {
    this.newTodo = text;
  }
}

const todoStore = new TodoStore();
export default todoStore;
