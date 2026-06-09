import { configureStore } from '@reduxjs/toolkit';

import hdReducer from '../features/hd/slice';
import appReducer from './appSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        hd: hdReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;