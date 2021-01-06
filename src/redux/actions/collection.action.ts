import { CollectionEntry } from "../../entry/CollectionEntry";
import { appService } from "../../services";
import { AppDispatch } from "../store";
import {
  CollectionActionTypes,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
} from "../types";

export function getCollectionRequest(): CollectionActionTypes {
  return {
    type: FETCH_COLLECTION_REQUEST,
  };
}

export function getCollectionSuccess(collectionEntry: CollectionEntry[]): CollectionActionTypes {
  return {
    type: FETCH_COLLECTION_SUCCESS,
    payload: collectionEntry,
  };
}

export function getCollectionFailure(error: string): CollectionActionTypes {
  return {
    type: FETCH_COLLECTION_FAILURE,
    error: error,
  };
}

export function getCollection() {
  return (dispatch: AppDispatch) => {
    dispatch(getCollectionRequest());
    return appService.getCollection().then(
      (response) => {
        dispatch(getCollectionSuccess(response));
      },
      (error) => {
        dispatch(getCollectionFailure(error));
      },
    );
  };
}
