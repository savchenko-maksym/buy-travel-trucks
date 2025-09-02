import { useOutletContext } from "react-router-dom";
import TransmissionIcon from "../../assets/images/icons/automatic.svg?react";
import EngineIcon from "../../assets/images/icons/petrol.svg?react";
import AcIcon from "../../assets/images/icons/ac.svg?react";
import BathroomIcon from "../../assets/images/icons/bathroom.svg?react";
import KitchenIcon from "../../assets/images/icons/kitchen.svg?react";
import TvIcon from "../../assets/images/icons/tv.svg?react";
import RadioIcon from "../../assets/images/icons/radio.svg?react";
import RefrigeratorIcon from "../../assets/images/icons/refrigeration.svg?react";
import MicrowaveIcon from "../../assets/images/icons/microwave.svg?react";
import GasIcon from "../../assets/images/icons/gas.svg?react";
import WaterIcon from "../../assets/images/icons/water.svg?react";
import s from "./Features.module.css";

const Features = () => {
  const { track } = useOutletContext();

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

  return (
    <div className={s.featuresAndFormWrap}>
      <div className={s.wrapDetails}>
        <div className={s.features}>
          {Object.entries(FEATURES_MAP).map(([key, { icon, label }]) => {
            const value = track[key]; // беремо значення з пропів data
            if (!value) return null; // якщо false → не рендеримо

            return (
              <div key={key} className={s.featureItem}>
                {icon}
                <span>
                  {typeof label === "function" ? label(value) : label}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <p className={s.details}>Vehicle Details</p>
          <ul className={s.list}>
            <li className={s.item}>
              <span>Form</span>
              <span>{track.form}</span>
            </li>
            <li className={s.item}>
              <span>Length</span>
              <span>{track.length}</span>
            </li>
            <li className={s.item}>
              <span>Width</span>
              <span>{track.width}</span>
            </li>
            <li className={s.item}>
              <span>Height</span>
              <span>{track.height}</span>
            </li>
            <li className={s.item}>
              <span>Tank</span>
              <span> {track.tank}</span>
            </li>
            <li className={s.item}>
              <span>Consumption</span>
              <span>{track.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.form}>Form</div>
    </div>
  );
};

export default Features;
