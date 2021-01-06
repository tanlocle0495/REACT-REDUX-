import { CollectionEntry } from "../../entry/CollectionEntry";
import { TopicEntry } from "../../entry/TopicEntry";

export interface CollectionState {
  collection:CollectionEntry [];
}
export const FETCH_COLLECTION_REQUEST = 'FETCH_COLLECTION_REQUEST';
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS';
export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE';

interface FetchCollectionRequestAction {
  type: typeof FETCH_COLLECTION_REQUEST;
}
interface FetchCollectionSuccessAction {
  type: typeof FETCH_COLLECTION_SUCCESS;
  payload: CollectionEntry[];
}
interface FetchCollectionFailureAction {
  type: typeof FETCH_COLLECTION_FAILURE;
  error: string;
}

export type CollectionActionTypes =
  | FetchCollectionRequestAction
  | FetchCollectionSuccessAction
  | FetchCollectionFailureAction;
