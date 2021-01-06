import {TvPage} from '../types/Tv';
import {get} from './helpers.services';
import { GET_COLLECTIONS, GET_PHOTO, GET_TOPICS } from "../config/config";
import { CollectionEntry } from "../entry/CollectionEntry";
import { TopicEntry } from "../entry/TopicEntry";

export const topicService  = {
  getTopic
};

async function getTopic(): Promise<TopicEntry[]> {
  return await get(
    GET_TOPICS
  );
}


