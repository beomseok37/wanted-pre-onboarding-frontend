/* eslint-disable no-unused-vars */
import { useReducer } from 'react';

import { TodoActionType, TodoStateType } from 'src/types';

const useAsyncReducer = <S, A>(
  reducer: (state: S, action: A) => S,
  initialState: S
): [S, (fetch: any) => Promise<void>] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const asyncDispatch = async (fetch: any) => {
    if (fetch instanceof Promise) {
      const asyncAction = await fetch;
      dispatch(asyncAction);
    }
  };

  return [state, asyncDispatch];
};

export default useAsyncReducer;
