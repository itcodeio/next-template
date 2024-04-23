import { action, makeAutoObservable, observable } from 'mobx';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
class QueryStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
    // this.fetchTodos();
  }

  setTodos = (todos: Todo[]) => {
    this.todos = todos;
  };
}

export default new QueryStore();
