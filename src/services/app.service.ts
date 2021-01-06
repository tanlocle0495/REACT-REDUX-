import {TvPage} from '../types/Tv';
import {get} from './helpers.services';
import { GET_COLLECTIONS, GET_PHOTO, GET_TOPICS } from "../config/config";
import { CollectionEntry } from "../entry/CollectionEntry";
import { TopicEntry } from "../entry/TopicEntry";
import { PhotoEntry } from "../entry/PhotoEntry";

export const appService = {
  getCollection,
   getTopic,
  getHomePhotos
};

async function getCollection(): Promise<CollectionEntry[]> {
  return await get(
    GET_COLLECTIONS
  );
}

async function getTopic(): Promise<TopicEntry[]> {
  return await get(
    GET_TOPICS
  );
}

async function getHomePhotos(): Promise<PhotoEntry[]> {
  return await get(
    GET_PHOTO
  );
}
