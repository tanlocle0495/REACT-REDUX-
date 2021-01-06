import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  PhotosActionTypes,
  PhotosState,
} from "../types";

const initialState: PhotosState = {
  photos: [],
};

export function photoReducer(
  state: PhotosState = initialState,
  action: PhotosActionTypes,
): PhotosState {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    case FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
