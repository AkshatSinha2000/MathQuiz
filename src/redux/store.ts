import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quiz  from './slices/handledata';


const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
  whitelist: ['quiz'], 
};

const rootReducer = combineReducers({
  quiz: quiz,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], 
        ignoredActionPaths: ['quiz'],
        ignoredPaths: ['quiz'], 
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;