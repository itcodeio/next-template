import axios, { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

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
  }

  setTodos = (todos: Todo[]) => {
    this.todos = todos;
  };

  getTodos = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }: AxiosResponse<Todo[]>) => {
        this.setTodos(data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
}

export default new QueryStore();
