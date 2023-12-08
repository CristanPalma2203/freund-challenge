import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import ProductCreate from './pages/Products/ProductCreate';
import ProductEdit from './pages/Products/ProductEdit';
import ComprasList from './pages/Compras/ComprasList';
import ComprasForm from './pages/Compras/ComprasForm';

const { store } = configureStore;
const persitor = configureStore.persistor;

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persitor}>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/create/product' element={<ProductCreate />} />
              <Route path='/edit/product/:id' element={<ProductEdit />} />
              <Route path='/compras' element={<ComprasList />} />
              <Route path='/compras/:id' element={<ComprasForm />} />
            </Routes>
            <Sidebar />
            <Footer />
          </Router>
        </PersistGate>
      </Provider>


    </div>
  );
};

export default App;
