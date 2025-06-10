/* eslint-disable react/react-in-jsx-scope */
const TagsPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      {/* Search + Filter */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <div className="h-14 flex-1 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-14 w-[170px] bg-gray-300 dark:bg-dark-400 rounded-md" />
      </div>

      {/* User Card Skeletons */}
      <div className="mt-12 flex flex-wrap gap-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.833rem)] h-44 bg-gray-300 dark:bg-dark-400 rounded-lg"
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-4">
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="h-10 w-10 bg-gray-300 dark:bg-dark-400 rounded-md" />
      </div>
    </div>
  );
};

export default TagsPageSkeleton;
