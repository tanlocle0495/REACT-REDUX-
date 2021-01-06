export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';

interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
  payload: any;
}
export interface CommonState {
  isLoading: boolean;
}

export type FetchActionTypes = FetchRequestAction | FetchFailureAction |CommonState;
