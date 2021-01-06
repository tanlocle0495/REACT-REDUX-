import {
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_FAILURE,
  CollectionActionTypes,
  CollectionState,
} from '../types';

const initialState: CollectionState = {
  collection: []
};

export function collectionReducer(
  state: CollectionState = initialState,
  action: CollectionActionTypes,
): CollectionState {
  switch (action.type) {
    case FETCH_COLLECTION_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_COLLECTION_SUCCESS: {
      return {
        ...state,
        collection: action.payload,
      };
    }
    case FETCH_COLLECTION_FAILURE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
