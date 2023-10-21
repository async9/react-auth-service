import { Route, Routes } from 'react-router-dom';

import { ProtectedRoutes } from './routes/ProtectedRoutes';
import Layout from './components/Layout/Layout';
import Auth from './components/View/Auth/Auth';
import Home from './components/View/Home/Home';
import NotFound from './components/View/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<Auth />}></Route>
        <Route path='/signup' element={<Auth />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
