import Feature1 from "../assets/features/feature-1.png";
import Feature2 from "../assets/features/feature-2.png";
import CartIcon from "../components/icons/CartIcon";
import GlobeIcon from "../components/icons/GlobeIcon";
import RightArrowIcon from "../components/icons/RightArroIcon";
import ServerIcon from "../components/icons/ServerIcon";
import UserIcon from "../components/icons/UserIcon";
import ServiceSection from "./utility/ServiceSection";
import StatsGrid from "./utility/StatsGrid";
const statsData = [
  {
    icon: ServerIcon,
    title: "99.99% uptime",
    description: "For Landwind, with zero maintenance downtime",
  },
  {
    icon: UserIcon,
    title: "600M+ Users",
    description: "Trusted by over 600 million users around the world",
  },
  {
    icon: GlobeIcon,
    title: "100+ countries",
    description: "Have used Landwind to create functional websites",
  },
  {
    icon: CartIcon,
    title: "5+ Million",
    description: "Transactions per day",
  },
];

export default function Services() {
  return (
    <div>
      {/* Service 1 */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <ServiceSection
            image={Feature1}
            title="Work with tools you already use"
            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
            points={[
              "Continuous integration and deployment",
              "Development workflow",
              "Knowledge management",
            ]}
            extraText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          />
          <ServiceSection
            image={Feature2}
            reverse
            title="We invest in the world’s potential"
            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
            points={[
              "Dynamic reports and dashboards",
              "Templates for everyone",
              "Development workflow",
              "Limitless business automation",
              "Knowledge management",
            ]}
            extraText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          />
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Explore Legality Guide
                  <RightArrowIcon />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Visit the Trust Center
                  <RightArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <StatsGrid stats={statsData} />
        </div>
      </section>
    </div>
  );
}
