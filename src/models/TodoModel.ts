import { Todo } from "../types/Todo";

export default class TodoModel {
  static createInstance = () => new TodoModel();

  public todos: Todo[] = [];

  constructor() {}

  public getTodos = () => {};
  public getTodosCount = () => {};

  public create = () => {};
  public update = () => {};
  public delete = () => {};
}
