import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTrackById } from "../../redux/trucks/operations.js";
import s from "./OptionsOneTrack.module.css";
import { ReactComponent as TransmissionIcon } from "../../assets/images/icons/automatic.svg";
import { ReactComponent as EngineIcon } from "../../assets/images/icons/petrol.svg";
import { ReactComponent as AcIcon } from "../../assets/images/icons/ac.svg";
import { ReactComponent as BathroomIcon } from "../../assets/images/icons/bathroom.svg";
import { ReactComponent as KitchenIcon } from "../../assets/images/icons/kitchen.svg";
import { ReactComponent as TvIcon } from "../../assets/images/icons/tv.svg";
import { ReactComponent as RadioIcon } from "../../assets/images/icons/radio.svg";
import { ReactComponent as RefrigeratorIcon } from "../../assets/images/icons/refrigeration.svg";
import { ReactComponent as MicrowaveIcon } from "../../assets/images/icons/microwave.svg";
import { ReactComponent as GasIcon } from "../../assets/images/icons/gas.svg";
import { ReactComponent as WaterIcon } from "../../assets/images/icons/water.svg";

const OptionsOneTrack = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

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
  }, [id]);

  const FEATURES_MAP = {
    transmission: { icon: <TransmissionIcon />, label: (val) => val },
    engine: { icon: <EngineIcon />, label: (val) => val },
    AC: { icon: <AcIcon />, label: () => "AC" },
    bathroom: { icon: <BathroomIcon />, label: () => "Bathroom" },
    kitchen: { icon: <KitchenIcon />, label: () => "Kitchen" },
    TV: { icon: <TvIcon />, label: () => "TV" },
    radio: { icon: <RadioIcon />, label: () => "Radio" },
    refrigerator: { icon: <RefrigeratorIcon />, label: () => "Refrigerator" },
    microwave: { icon: <MicrowaveIcon />, label: () => "Microwave" },
    gas: { icon: <GasIcon />, label: () => "Gas" },
    water: { icon: <WaterIcon />, label: () => "Water" },
  };

  if (!track) {
    return <p>Loading...</p>; // або просто null
  }

  return (
    <div className={s.features}>
      {Object.entries(FEATURES_MAP).map(([key, { icon, label }]) => {
        const value = track[key]; // беремо значення з пропів data
        if (!value) return null; // якщо false → не рендеримо

        return (
          <div key={key} className={s.featureItem}>
            {icon}
            <span>{typeof label === "function" ? label(value) : label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsOneTrack;
