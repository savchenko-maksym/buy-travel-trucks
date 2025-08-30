import { useEffect, useState } from "react";
import { fetchTracks } from "../../redux/trucks/operations.js";
import TrackList from "../TrackList/TrackList.jsx";
import Container from "../Container/Container.jsx";
import s from "./Catalog.module.css";
import SearchMenu from "../SearchMenu/SearchMenu.jsx";

const Catalog = () => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const tracks = await fetchTracks();
        setTracks(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Container>
        <div className={s.mainWrap}>
          <div className={s.menuWrap}>
            <SearchMenu />
          </div>
          <div className={s.trackList}>
            <TrackList tracks={tracks} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
