import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import CategoryApi from './apis/Categories';
import InfoApi from './apis/Info';
import ProductApi from './apis/Product';
import itemDetails from './reducers/reducers';

const store = configureStore({
  reducer: {
    details: itemDetails,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [InfoApi.reducerPath]: InfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CategoryApi.middleware,
      ProductApi.middleware,
      InfoApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
