import { Todo } from '../types/Todo';
import { toJS, action, makeAutoObservable, observable } from 'mobx';

export default class TodoModel {
  static createInstance = () => new TodoModel();

  public todos: Todo[] = [];

  // 이부분은 신경쓰지 않아도 됩니다. 전역상태 라이브러리 mobx때문에 작성해둔 곳입니다.
  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      create: action,
      update: action,
      delete: action,
    });
  }

  // 아래 메서드들만 구현하면됩니다.
  public getTodos = () => toJS(this.todos);
  public getTodosCount = () => {};

  public create = () => {};
  public update = () => {};
  public delete = () => {};
}
