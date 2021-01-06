import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { collectionReducer } from "./collection.reducer";
import { topicReducer } from "./topic.reducer";
import { photoReducer } from "./photo.reducer";

export const rootReducer = combineReducers({
  collection: collectionReducer,
  topic: topicReducer,
  photos: photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
