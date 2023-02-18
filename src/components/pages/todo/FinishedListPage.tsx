import { StoreContext } from '../../../models/RootModel';

import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const FinishedListPage = observer(() => {
  const { todoModel } = useContext(StoreContext);
  return <div></div>;
});

export default FinishedListPage;
