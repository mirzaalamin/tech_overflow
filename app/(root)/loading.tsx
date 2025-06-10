/* eslint-disable react/react-in-jsx-scope */
const HomePageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <div className="h-[46px] w-[140px] bg-gray-300 dark:bg-dark-400 rounded-md" />
      </section>

      {/* Search & Filter */}
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <div className="h-14 w-full flex-1 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-14 w-[170px] bg-gray-300 dark:bg-dark-400 rounded-md hidden max-md:flex" />
      </section>

      {/* Home Filters */}
      <div className="mt-6 flex flex-wrap gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-24 bg-gray-300 dark:bg-dark-400 rounded-full"
          />
        ))}
      </div>

      {/* Question Cards Skeleton */}
      <section className="mt-10 flex w-full flex-col gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[160px] w-full bg-gray-300 dark:bg-dark-400 rounded-md"
          />
        ))}
      </section>

      {/* Pagination Skeleton */}
      <div className="mt-10 flex justify-center gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
