import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { price, features, name } = option;
  console.log(features);
  return (
    <div className="bg-gray-200 my-3 p-3 rounded-lg">
      <h2 className="text-5xl">{name}</h2>
      <h3>
        <span className="font bold text-4xl">Price: {price}$</span>
        <span>/month</span>
      </h3>
      <ol className="">
        {features.map((feature, idx) => (
          <li className="my-2" key={idx}>
            {feature}
          </li>
        ))}
      </ol>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
