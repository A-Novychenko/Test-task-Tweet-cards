import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout';
// import { CardList } from './CardList';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));
// const MoviePage = lazy(() => import('pages/MoviePage'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />} />
          {/* <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
      {/* <CardList /> */}
    </>
  );
};
