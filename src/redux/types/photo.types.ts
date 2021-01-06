import { PhotoEntry } from "../../entry/PhotoEntry";

export interface PhotosState {
  photos:PhotoEntry [];
}
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

//photo
interface FetchPhotoRequestAction {
  type: typeof FETCH_PHOTOS_REQUEST;
}
interface FetchPhotoSuccessAction {
  type: typeof FETCH_PHOTOS_SUCCESS;
  payload: PhotoEntry[];
}
interface FetchPhotoFailureAction {
  type: typeof FETCH_PHOTOS_FAILURE;
  error: string;
}


export type PhotosActionTypes =
  | FetchPhotoRequestAction
  | FetchPhotoSuccessAction
  | FetchPhotoFailureAction
