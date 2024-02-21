import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
