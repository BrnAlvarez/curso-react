import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import {Provider} from 'react-redux'
import { store , persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Information from './pages/Information';
import Clients from './pages/Clients';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },{
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },{
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },{
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },{
    path: "/information",
    element: <Information />,
    errorElement: <NotFound />,
  },{
    path: "/clients",
    element: <Clients />,
    errorElement: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
