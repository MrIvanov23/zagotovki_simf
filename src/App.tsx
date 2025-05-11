import React from 'react';

import "./scss/app.scss"

import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import UtilityLayout from './layouts/UtilityLayout';

import HomePage from './pages/mainPages/HomePage/HomePage';
import ShopPage from './pages/mainPages/ShopPage/ShopPage';
import ShopSinglePage from './pages/mainPages/ShopSinglePage/ShopSinglePage';
import CartPage from './pages/mainPages/CartPage/CartPage';
import OurTeamPage from './pages/mainPages/OurTeamPage/OurTeamPage';

import NotFoundPage from './pages/utilityPages/NotFoundPage/NotFoundPage';
import LicencesPage from './pages/utilityPages/LicencesPage/LicencesPage';
import ChangelogPage from './pages/utilityPages/ChangelogPage/ChangelogPage';
import AboutUsPage from './pages/mainPages/AboutUsPage/AboutUsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='food/:id' element={<ShopSinglePage />} />
          <Route path='cart' element={<CartPage />}/>
          <Route path='team' element={<OurTeamPage />} />
          <Route path='about' element={<AboutUsPage />} />
        </Route>

        <Route path='/' element={<UtilityLayout />}>
          <Route path='changelog' element={<ChangelogPage />} />
          <Route path='licences' element={<LicencesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
