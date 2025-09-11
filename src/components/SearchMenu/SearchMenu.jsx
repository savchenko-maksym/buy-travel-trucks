import { Form, Field, Formik } from "formik";
import AcIcon from "../../assets/images/icons/ac.svg?react";
import BathroomIcon from "../../assets/images/icons/bathroom.svg?react";
import KitchenIcon from "../../assets/images/icons/kitchen.svg?react";
import TvIcon from "../../assets/images/icons/tv.svg?react";
import RadioIcon from "../../assets/images/icons/radio.svg?react";
import RefrigeratorIcon from "../../assets/images/icons/refrigeration.svg?react";
import MicrowaveIcon from "../../assets/images/icons/microwave.svg?react";
import GasIcon from "../../assets/images/icons/gas.svg?react";
import WaterIcon from "../../assets/images/icons/water.svg?react";

const EQUIPMENT_MAP = {
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

const VEHICLE_TYPES = {
  fullyIntegrated: {},
  alcove: {},
  panelTruck: {},
};

const SearchMenu = () => {
  return (
    <div>
      <Formik>
        <Form>
          <Field name="location" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchMenu;
