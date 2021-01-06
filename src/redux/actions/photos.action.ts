import { appService } from "../../services";
import { AppDispatch } from "../store";
import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS, PhotosActionTypes,
} from "../types";
import { PhotoEntry } from "../../entry/PhotoEntry";
export function getPhotosRequest(): PhotosActionTypes {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
}

export function getPhotosSuccess(photo: PhotoEntry[]): PhotosActionTypes {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: photo,
  };
}

export function getPhotosFailure(error: string): PhotosActionTypes {
  return {
    type: FETCH_PHOTOS_FAILURE,
    error: error,
  };
}

export function getPhotos() {
  return (dispatch: AppDispatch) => {
    dispatch(getPhotosRequest());
    return appService.getHomePhotos().then(
      (response) => {
        dispatch(getPhotosSuccess(response));
      },
      (error) => {
        dispatch(getPhotosFailure(error));
      },
    );
  };
}
