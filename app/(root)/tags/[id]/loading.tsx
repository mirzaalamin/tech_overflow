/* eslint-disable react/react-in-jsx-scope */
const TagDetailPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header Section */}
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <div className="h-8 w-40 bg-gray-300 dark:bg-dark-400 rounded-md" />
      </section>

      {/* Search & Filter */}
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* LocalSearch Skeleton */}
        <div className="h-14 w-full flex-1 bg-gray-300 dark:bg-dark-400 rounded-md" />

        {/* Filter Skeleton */}
        <div className="h-14 w-[170px] bg-gray-300 dark:bg-dark-400 rounded-md hidden max-md:flex" />
      </section>

      {/* Home Filter Placeholder */}
      <div className="mt-6 flex flex-wrap gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="h-10 w-24 bg-gray-300 dark:bg-dark-400 rounded-full"
          />
        ))}
      </div>

      {/* Question Card Skeletons */}
      <section className="mt-10 flex w-full flex-col gap-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="h-[120px] w-full bg-gray-300 dark:bg-dark-400 rounded-md"
          />
        ))}
      </section>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-4">
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
      </div>
    </div>
  );
};

export default TagDetailPageSkeleton;
