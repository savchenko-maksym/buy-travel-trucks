import axios from "axios";

export const axiosAPI = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const fetchTracks = async () => {
  const response = await axiosAPI.get();
  return response.data.items;
};

export const fetchTrackById = async (id) => {
  const response = await axiosAPI.get(`/${id}`);
  return response.data;
};
