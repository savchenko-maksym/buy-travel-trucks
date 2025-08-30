import { NavLink, Outlet } from "react-router-dom";

const TrackPage = () => {
  return (
    <div>
      <h1>TrackPage</h1>
      <NavLink to="features">Features</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TrackPage;
