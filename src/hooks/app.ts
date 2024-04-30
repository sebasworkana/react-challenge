import { useDispatch, useSelector } from 'react-redux';
import {
  appActions,
  fetchPeriodicTable,
  selectAppState,
} from '../store/app.slice.ts';
import { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppState = () => useSelector(selectAppState);

export const useSetNames = () => {
  const dispatch = useDispatch();

  return (value: { firstName: string; lastName: string }) => {
    dispatch(appActions.setNames(value));
  };
};

export const useFetchPeriodicTable = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(fetchPeriodicTable());
  };
};
