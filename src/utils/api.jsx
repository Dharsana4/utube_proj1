import videosData from "../assets/mock-data/videos.json";
import commentsData from "../assets/mock-data/comments.json";

export const fetchVideos = async () => {
  return videosData;
};

export const fetchComments = async () => {
  return commentsData;
};

export const fetchChannels = async () => {
  return channelsData;
};
