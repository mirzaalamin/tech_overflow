/* eslint-disable react/react-in-jsx-scope */
const QuestionCardSkeleton = () => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 animate-pulse">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div className="w-full">
          <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700 sm:hidden mb-2"></div>
          <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>

      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-700"
          ></div>
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex flex-col">
            <div className="h-3 w-32 rounded bg-gray-300 dark:bg-gray-700 max-sm:hidden"></div>
          </div>
        </div>

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-3 w-10 rounded bg-gray-300 dark:bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCardSkeleton;
