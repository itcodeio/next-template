import { makeAutoObservable } from 'mobx';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class QueryStore {
  todos: Todo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTodos() {
    this.isLoading = true;
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      if (!response.ok) {
        throw new Error('Error');
      }
      const data = await response.json();
      this.todos = data;
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new QueryStore();
