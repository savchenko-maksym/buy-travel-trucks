import { NavLink, Outlet } from "react-router-dom";
import TrackItem from "../../components/TrackItem/TrackItem.jsx";
import { useEffect, useState } from "react";
import { fetchTrackById } from "../../redux/trucks/operations.js";

const TrackPage = () => {
  const [track, setTrack] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const track = await fetchTrackById(id);
        setTrack(track);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });
  return (
    <div>
      <TrackItem track={track} />
      <NavLink to="features">Features</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TrackPage;
