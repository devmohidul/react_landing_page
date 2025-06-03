// components/StatsGrid.jsx

export default function StatsGrid({ stats }) {
  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {stats.map((stat, index) => (
        <div key={index}>
          <stat.icon />
          <h3 className="mb-2 text-2xl font-bold dark:text-white">
            {stat.title}
          </h3>
          <p className="font-light text-gray-500 dark:text-gray-400">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
