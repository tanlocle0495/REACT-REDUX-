// import { appService, topicService } from "../../services";
// import { AppDispatch } from "../store";
// import {
//   TopicActionTypes,
//   FETCH_TOPIC_FAILURE,
//   FETCH_TOPIC_REQUEST,
//   FETCH_TOPIC_SUCCESS,
// } from "../types";
// import { TopicEntry } from "../../entry/TopicEntry";
//
//
// export function getTopicRequest(): TopicActionTypes {
//   return {
//     type: FETCH_TOPIC_REQUEST,
//   };
// }
//
// export function getTopicSuccess(topic: TopicEntry[]): TopicActionTypes {
//   return {
//     type: FETCH_TOPIC_SUCCESS,
//     payload: topic,
//   };
// }
//
// export function getTopicFailure(error: string): TopicActionTypes {
//   return {
//     type: FETCH_TOPIC_FAILURE,
//     error: error,
//   };
// }
//
//
// export function getTopic() {
//   return (dispatch: AppDispatch) => {
//     dispatch(getTopicRequest());
//     return topicService.getTopic().then(
//       (response) => {
//         dispatch(getTopicSuccess(response));
//       },
//       (error) => {
//         dispatch(getTopicFailure(error));
//       },
//     );
//   };
// }
//
