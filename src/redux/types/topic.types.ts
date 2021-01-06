import { TopicEntry } from "../../entry/TopicEntry";
export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST';
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
export const FETCH_TOPIC_FAILURE = 'FETCH_TOPIC_FAILURE';

export interface TopicState {
  topic:TopicEntry [];
}

interface FetchTopicRequestAction {
  type: typeof FETCH_TOPIC_REQUEST;
}
interface FetchTopicSuccessAction {
  type: typeof FETCH_TOPIC_SUCCESS;
  payload: TopicEntry[];
}
interface FetchTopicFailureAction {
  type: typeof FETCH_TOPIC_FAILURE;
  error: string;
}

export type TopicActionTypes =
  | FetchTopicRequestAction
  | FetchTopicSuccessAction
  | FetchTopicFailureAction;
