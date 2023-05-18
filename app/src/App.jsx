import './App.css'

import { useSelector } from "react-redux";
import Login from './pages/Login';
import store from './store/reduxStore.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import MainRoutes from './routes';

function App() {
  

  return (

    <div>
      <Provider store={store}>
        {/* <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainRoutes />} />
          </Routes>
        </BrowserRouter> */}
        <Login />
      </Provider>,
    </div>
  )
}

export default App
