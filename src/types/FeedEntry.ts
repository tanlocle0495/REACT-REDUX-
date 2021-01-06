export interface FeedEntry {
  id:                       string;
  created_at:               Date;
  updated_at:               Date;
  promoted_at:              null;
  width:                    number;
  height:                   number;
  color:                    string;
  blur_hash:                string;
  description:              null;
  alt_description:          string;
  urls:                     Urls;
  links:                    FeedEntryLinks;
  categories:               any[];
  likes:                    number;
  liked_by_user:            boolean;
  current_user_collections: any[];
  sponsorship:              Sponsorship;
  user:                     User;
}

export interface FeedEntryLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

export interface Sponsorship {
  impression_urls: string[];
  tagline:         string;
  tagline_url:     string;
  sponsor:         User;
}

export interface User {
  id:                 string;
  updated_at:         Date;
  username:           string;
  name:               string;
  first_name:         string;
  last_name:          null;
  twitter_username:   string;
  portfolio_url:      string;
  bio:                string;
  location:           null;
  links:              UserLinks;
  profile_image:      ProfileImage;
  instagram_username: string;
  total_collections:  number;
  total_likes:        number;
  total_photos:       number;
  accepted_tos:       boolean;
}

export interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

export interface Urls {
  raw:     string;
  full:    string;
  regular: string;
  small:   string;
  thumb:   string;
}
