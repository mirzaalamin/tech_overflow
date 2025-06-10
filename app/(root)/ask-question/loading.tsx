/* eslint-disable react/react-in-jsx-scope */
const AskAQuestionPageSkeleton = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a public Question</h1>

      <div className="mt-9 animate-pulse space-y-6">
        {/* Title input skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-36 rounded bg-light-800 dark:bg-dark-300" />
          <div className="h-12 w-full rounded bg-light-800 dark:bg-dark-300" />
        </div>

        {/* Description textarea skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-36 rounded bg-light-800 dark:bg-dark-300" />
          <div className="h-32 w-full rounded bg-light-800 dark:bg-dark-300" />
        </div>

        {/* Tags input skeleton */}
        <div className="space-y-2">
          <div className="h-5 w-20 rounded bg-light-800 dark:bg-dark-300" />
          <div className="h-350 w-full rounded bg-light-800 dark:bg-dark-300" />
        </div>

        {/* Submit button skeleton */}
        <div className="h-12 w-44 rounded bg-light-800 dark:bg-dark-300" />
      </div>
    </>
  );
};

export default AskAQuestionPageSkeleton;
