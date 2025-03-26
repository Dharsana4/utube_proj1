import videosData from "../assets/mock-data/videos.json";
import commentsData from "../assets/mock-data/comments.json";
import channelsData from "../assets/mock-data/channels.json";

// Fetch videos from imported JSON data
export const fetchVideos = async () => {
  return videosData;
};

// Fetch comments from imported JSON data
export const fetchComments = async () => {
  return commentsData;
};

// Fetch channels from imported JSON data
export const fetchChannels = async () => {
  return channelsData;
};