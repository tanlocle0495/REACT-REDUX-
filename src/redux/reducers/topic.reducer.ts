import {
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_FAILURE, TopicState, TopicActionTypes,
} from "../types";

const initialState: TopicState = {
  topic: []
};

export function topicReducer(
  state: TopicState = initialState,
  action: TopicActionTypes,
): TopicState {
  switch (action.type) {
    case FETCH_TOPIC_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_TOPIC_SUCCESS: {
      return {
        ...state,
        topic: action.payload,
      };
    }
    case FETCH_TOPIC_FAILURE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
