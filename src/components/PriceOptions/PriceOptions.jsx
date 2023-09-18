import PriceOption from "../PriceOption/PriceOption";

const priceOptions = [
  {
    name: "Basic Membership",
    id: "GM001",
    price: 30,
    features: [
      "Access to gym equipment during regular hours.",
      "Locker room access.",
      "Basic fitness assessment.",
      "Limited group fitness classes.",
    ],
  },
  {
    name: "Premium Membership",
    id: "GM002",
    price: 50,
    features: [
      "24/7 gym access.",
      "Access to all gym equipment and facilities.",
      "Personalized fitness assessment and workout plan.",
      "Unlimited group fitness classes.",
      "Access to sauna and steam room.",
    ],
  },
  {
    name: "Family Membership",
    id: "GM003",
    price: 90,
    features: [
      "24/7 gym access for the entire family.",
      "Access to all gym equipment and facilities.",
      "Personalized fitness assessments and workout plans for each family member.",
      "Unlimited group fitness classes for the family.",
      "Access to sauna and steam room.",
      "Childcare services during specified hours.",
    ],
  },
];

const PriceOptions = () => {
  return (
    <div>
      <h3 className="text-4xl text-center font-bold">Best Gym In The Town</h3>
      <div className="grid grid-cols-3 gap-2">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
