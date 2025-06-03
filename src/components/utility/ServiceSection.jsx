// components/ServiceSection.jsx
import TickIcon from "../icons/TickIcon";

export default function ServiceSection({
  reverse = false,
  image,
  title,
  description,
  points = [],
  extraText = "",
}) {
  return (
    <div
      className={`items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {!reverse && (
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-8 font-light lg:text-xl">{description}</p>
          {points?.length > 0 && (
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {points.map((point, index) => (
                <li key={index} className="flex space-x-3">
                  <TickIcon />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {extraText && <p className="font-light lg:text-xl">{extraText}</p>}
        </div>
      )}
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={image}
        alt="feature"
      />
      {reverse && (
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-8 font-light lg:text-xl">{description}</p>
          {points?.length > 0 && (
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {points.map((point, index) => (
                <li key={index} className="flex space-x-3">
                  <TickIcon />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {extraText && <p className="font-light lg:text-xl">{extraText}</p>}
        </div>
      )}
    </div>
  );
}
