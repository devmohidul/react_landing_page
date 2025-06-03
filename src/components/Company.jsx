import Airbnb from "../components/logos/Airbnb.jsx";
import Google from "./logos/Google.jsx";
import Mailchimp from "./logos/Mailchimp.jsx";
import Mashable from "./logos/Mashable.jsx";
import Microsoft from "./logos/Microsoft.jsx";
import Spotify from "./logos/Spotify.jsx";
export default function Company() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex items-center lg:justify-center">
            <Airbnb />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <Google />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <Microsoft />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <Spotify />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <Mailchimp />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <Mashable />
          </a>
        </div>
      </div>
    </section>
  );
}
