
import './App.css';
import Layout from './components/layout/layout';
import Shopping from './containers/shopping';
import Account from './containers/Account/Account';
import CheckOut from './components/UI-element/CheckOut/CheckOut'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Shopping />} />
          <Route path='/account' element={<Account />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
