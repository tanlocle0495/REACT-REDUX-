import { TopicEntry } from "../../entry/TopicEntry";
import { appService } from "../../services";
import { AppDispatch } from "../store";
import {
  FETCH_TOPIC_FAILURE,
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS, TopicActionTypes,
} from "../types";
export function getTopicRequest(): TopicActionTypes {
  return {
    type: FETCH_TOPIC_REQUEST,
  };
}

export function getTopicSuccess(collectionEntry: TopicEntry[]): TopicActionTypes {
  return {
    type: FETCH_TOPIC_SUCCESS,
    payload: collectionEntry,
  };
}

export function getTopicFailure(error: string): TopicActionTypes {
  return {
    type: FETCH_TOPIC_FAILURE,
    error: error,
  };
}


export function getTopic() {
  return (dispatch: AppDispatch) => {
    dispatch(getTopicRequest());
    return appService.getTopic().then(
      (response) => {
        dispatch(getTopicSuccess(response));
      },
      (error) => {
        dispatch(getTopicFailure(error));
      },
    );
  };
}
