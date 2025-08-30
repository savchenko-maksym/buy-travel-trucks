import s from "./TrackItem.module.css";
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
import StarIcon from "../../assets/images/icons/star.svg?react";

const TrackItem = ({ data }) => {
  const { name, price, rating, location, description, gallery } = data;

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
    <div>
      <div className={s.cardWrap}>
        <div>
          <img src={gallery[0].thumb} alt={name} className={s.img} />
        </div>
        <div className={s.contentWrap}>
          <div className={s.header}>
            <div className={s.nameAndPrice}>
              <h2 className={s.titleName}>{name}</h2>
              <span className={s.price}>€{price}.00</span>
            </div>
            <div className={s.ratingAndLocation}>
              <p>
                <StarIcon />
                {rating}
              </p>
              <p>{location}</p>
            </div>
          </div>

          <p className={s.description}>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>

          <div className={s.features}>
            {Object.entries(FEATURES_MAP).map(([key, { icon, label }]) => {
              const value = data[key]; // беремо значення з пропів data
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
          <button className={s.button}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
