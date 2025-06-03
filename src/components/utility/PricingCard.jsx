import SimpleTickIcon from "../icons/SimpleTickIcon";
import PricingButton from "../utility/PricingButton";

export default function PricingCard({ pricingPlans }) {
  return (
    <>
      {pricingPlans.map((priceCard, index) => (
        <div
          className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          key={index}
        >
          <h3 className="mb-4 text-2xl font-semibold">{priceCard.title}</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            {priceCard.description}
          </p>
          <div className="flex items-baseline justify-center my-8">
            <span className="mr-2 text-5xl font-extrabold">
              ${priceCard.price}
            </span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            {priceCard.features.map((feature, index) => (
              <li className="flex items-center space-x-3" key={index}>
                <SimpleTickIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <PricingButton label="Get Started" />
        </div>
      ))}
    </>
  );
}
