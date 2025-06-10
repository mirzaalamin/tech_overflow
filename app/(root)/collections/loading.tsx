/* eslint-disable react/react-in-jsx-scope */
const SavedQuestionsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      {/* Search and Filter */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* Search bar */}
        <div className="h-14 w-full flex-1 bg-gray-300 dark:bg-dark-400 rounded-md" />

        {/* Filter */}
        <div className="h-14 w-[170px] bg-gray-300 dark:bg-dark-400 rounded-md" />
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

export default SavedQuestionsSkeleton;
