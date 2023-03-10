import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StoreProvider from './models/RootModel';

import AllListPage from './components/pages/todo/AllListPage';
import FinishedListPage from './components/pages/todo/FinishedListPage';

function App() {
  const router = createBrowserRouter([{ path: '/', element: <AllListPage /> }]);

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );

  // 위를 참고하여 라우터 설정해주세요
  // https://reactrouter.com/en/main/routers/create-browser-router
  return <div></div>;
}

export default App;
