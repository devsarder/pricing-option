/* eslint-disable react/jsx-key */
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { price, features, name } = option;
  console.log(features);
  return (
    <div className="bg-gray-200 my-3 p-3 rounded-lg">
      <h2 className="text-2xl text-center">{name}</h2>
      <h3 className="text-center">
        <span className="font bold text-3xl ">Price: {price}$</span>
        <span>/month</span>
      </h3>
      <ol className="">
        {features.map((feature, idx) => (
          <div className="flex items-center gap-1">
            <IoShieldCheckmarkSharp className="text-green-600"></IoShieldCheckmarkSharp>
            <li className="my-2 inline" key={idx}>
              {feature}
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
