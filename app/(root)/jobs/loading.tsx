/* eslint-disable react/react-in-jsx-scope */
const JobPageLoading = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      {/* Search and Filter */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* Search bar */}
        <div className="h-14 w-full flex-1 bg-gray-300 dark:bg-dark-400 rounded-md" />

        {/* Filter */}
        <div className="h-14 w-[170px] bg-gray-300 dark:bg-dark-400 rounded-md" />
      </div>

      {/* Job List Skeleton */}
      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex flex-col gap-4 animate-pulse">
            {/* Job Title */}
            <div className="h-6 w-2/3 rounded bg-light-800 dark:bg-dark-300" />

            {/* Company Info */}
            <div className="flex gap-4">
              <div className="h-4 w-32 rounded bg-light-800 dark:bg-dark-300" />
              <div className="h-4 w-24 rounded bg-light-800 dark:bg-dark-300" />
            </div>

            {/* Job Description Preview */}
            <div className="h-20 w-full rounded bg-light-800 dark:bg-dark-300" />
          </div>
        ))}
      </section>

      {/* Pagination Skeleton */}
      <div className="flex justify-center animate-pulse">
        <div className="h-10 w-32 rounded bg-light-800 dark:bg-dark-300" />
      </div>
    </>
  );
};

export default JobPageLoading;
