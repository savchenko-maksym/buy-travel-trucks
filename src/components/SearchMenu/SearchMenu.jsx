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
import Van from "../../assets/images/icons/Van.svg?react";
import FullInt from "../../assets/images/icons/FullInt.svg?react";
import Alcove from "../../assets/images/icons/Alcove.svg?react";
import Loation from "../../assets/images/icons/Location.svg?react";
import { useState } from "react";

const EQUIPMENT_MAP = {
  AC: { icon: <AcIcon />, label: "AC" },
  bathroom: { icon: <BathroomIcon />, label: "Bathroom" },
  kitchen: { icon: <KitchenIcon />, label: "Kitchen" },
  TV: { icon: <TvIcon />, label: "TV" },
  radio: { icon: <RadioIcon />, label: "Radio" },
  refrigerator: { icon: <RefrigeratorIcon />, label: "Refrigerator" },
  microwave: { icon: <MicrowaveIcon />, label: "Microwave" },
  gas: { icon: <GasIcon />, label: "Gas" },
  water: { icon: <WaterIcon />, label: "Water" },
};

const VEHICLE_TYPES = {
  fullyIntegrated: { icon: <FullInt />, label: "Fully Integrated" },
  alcove: { icon: <Alcove />, label: "Alcove" },
  panelTruck: { icon: <Van />, label: "Van" },
};

const SearchMenu = ({ onSearch }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);

  const toggleEquipment = (equip) => {
    setSelectedEquipment((prev) =>
      prev.includes(equip) ? prev.filter((e) => e !== equip) : [...prev, equip]
    );
    console.log(selectedEquipment);
  };

  const toggleVehicleType = (type) => {
    setSelectedVehicleTypes((prev) =>
      prev.includes(type) ? prev.filter((e) => e !== type) : [...prev, type]
    );
  };

  const resetFilters = (resetForm) => {
    resetForm(),
      setSelectedEquipment([]),
      setSelectedVehicleTypes([]),
      onSearch({ location: "", equipment: [], vehicleTypes: [] });
  };

  const initialValues = {
    location: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onSearch({
      ...values,
      equipment: selectedEquipment,
      vehicleTypes: selectedVehicleTypes,
    });
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Location</label>
            <Field name="location" placeholder="City" />
          </div>
          <div>
            <p>Vehicle equipment</p>
            <div>
              {Object.entries(EQUIPMENT_MAP).map(([key, { icon, label }]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleEquipment(key)}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <p>Vehicle type</p>
            <div>
              {Object.entries(VEHICLE_TYPES).map(([key, { icon, label }]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => toggleVehicleType(key)}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchMenu;
