import s from "./TrackItem.module.css";
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
import { ReactComponent as StarIcon } from "../../assets/images/icons/star.svg";
import { ReactComponent as BlackHeart } from "../../assets/images/icons/BlackHeart.svg";
import { ReactComponent as RedHeart } from "../../assets/images/icons/RedHeart.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/icons/location.svg";
import { Link } from "react-router-dom";
import { useFavorites } from "../FavoritesContext/FavoritesContext.jsx";

const TrackItem = ({ data }) => {
  const { name, price, rating, location, description, gallery, reviews, id } =
    data;

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === id);

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
        <div className={s.imgWrapper}>
          <img src={gallery[0]?.thumb} alt={name} className={s.img} />
        </div>

        <div className={s.contentWrap}>
          <div className={s.header}>
            <div className={s.nameAndPrice}>
              <h2 className={s.titleName}>{name}</h2>
              <span className={s.price}>
                €{price}.00{" "}
                <button className={s.hart} onClick={() => toggleFavorite(data)}>
                  {isFavorite ? <RedHeart /> : <BlackHeart />}
                </button>
              </span>
            </div>

            <div className={s.ratingAndLocation}>
              <p>
                <StarIcon />
                {rating}({reviews?.length || 0} Reviews)
              </p>
              <a
                className={s.location}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationIcon />
                {location}
              </a>
            </div>
          </div>

          <p className={s.description}>
            {description.length > 70
              ? description.slice(0, 70) + "..."
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
          <Link to={`/catalog/${id.toString()}`} className={s.button}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
