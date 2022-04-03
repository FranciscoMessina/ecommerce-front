import { ModalsProvider } from '@mantine/modals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { NotFound } from './pages/404';
import { Catalog } from './pages/Catalog';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />} />

            <Route path='products' element={<Catalog />} />
            <Route path='products/:id' element={<Detail />} />

            <Route
              path='*'
              element={
                <NotFound
                  title='You have found a secret place.'
                  text='Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
                been moved to another URL.'
                />
              }
            />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
