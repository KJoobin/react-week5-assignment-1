import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
  loadCategories,
} from './actions';

import RegionsContainer from './RegionsContainer';

function CategoriesContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  });
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
