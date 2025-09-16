import { useEffect, useState } from "react";
import { fetchTracks } from "../../redux/trucks/operations.js";
import TrackList from "../TrackList/TrackList.jsx";
import Container from "../Container/Container.jsx";
import s from "./Catalog.module.css";
import SearchMenu from "../SearchMenu/SearchMenu.jsx";

const Catalog = () => {
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTracks();
        setTracks(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setFilteredTracks(tracks);
  }, [tracks]);

  const handleSearch = async ({ location, form, equipment }) => {
    try {
      const filtered = await fetchTracks({ location, form, equipment });
      setFilteredTracks(filtered);
      console.log(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <div className={s.mainWrap}>
          <div className={s.menuWrap}>
            <SearchMenu onSearch={handleSearch} />
          </div>
          <div className={s.trackList}>
            <TrackList tracks={filteredTracks} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
