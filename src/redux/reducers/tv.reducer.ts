// import {
//   FETCH_POPULAR_TV_FAILURE,
//   FETCH_POPULAR_TV_REQUEST,
//   FETCH_POPULAR_TV_SUCCESS,
//   TvActionTypes,
//   TvState,
// } from '../types';
//
// const initialState: TvState = {
//   tvs: [],
// };
//
// export function tvReducer(
//   state: TvState = initialState,
//   action: TvActionTypes,
// ): TvState {
//   switch (action.type) {
//     case FETCH_POPULAR_TV_REQUEST: {
//       return {
//         ...state,
//       };
//     }
//     case FETCH_POPULAR_TV_SUCCESS: {
//       return {
//         ...state,
//         tvs: action.payload.results,
//       };
//     }
//     case FETCH_POPULAR_TV_FAILURE: {
//       return {
//         ...state,
//       };
//     }
//     default:
//       return state;
//   }
// }
