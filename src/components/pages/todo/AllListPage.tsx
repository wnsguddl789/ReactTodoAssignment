import { StoreContext } from '../../../models/RootModel';

import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const AllListPage = observer(({}) => {
  const { todoModel } = useContext(StoreContext);
  const todos = todoModel.getTodos();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}></div>
      ))}
    </div>
  );
});

export default AllListPage;
