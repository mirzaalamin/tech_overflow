/* eslint-disable react/react-in-jsx-scope */
const QuestionDetailsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Author + Vote/Save Row */}
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-start">
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <div className="size-[22px] rounded-full bg-gray-300 dark:bg-dark-400" />
          <div className="h-4 w-28 rounded-md bg-gray-300 dark:bg-dark-400" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-8 w-12 bg-gray-300 dark:bg-dark-400 rounded-md" />
          <div className="h-8 w-12 bg-gray-300 dark:bg-dark-400 rounded-md" />
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 h-6 w-3/4 bg-gray-300 dark:bg-dark-400 rounded-md" />

      {/* Metrics */}
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-dark-400 rounded-full" />
            <div className="h-4 w-28 bg-gray-300 dark:bg-dark-400 rounded-md" />
          </div>
        ))}
      </div>

      {/* Preview content */}
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-gray-300 dark:bg-dark-400 rounded-md"
          />
        ))}
        <div className="h-4 w-3/5 bg-gray-300 dark:bg-dark-400 rounded-md" />
      </div>

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-20 bg-gray-300 dark:bg-dark-400 rounded-full"
          />
        ))}
      </div>

      {/* AllAnswers */}
      <section className="my-8 space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="h-[100px] w-full bg-gray-300 dark:bg-dark-400 rounded-md"
          />
        ))}
      </section>

      {/* AnswerForm */}
      <section className="my-5">
        <div className="h-32 w-full bg-gray-300 dark:bg-dark-400 rounded-md" />
        <div className="mt-4 h-10 w-32 bg-gray-300 dark:bg-dark-400 rounded-md" />
      </section>
    </div>
  );
};

export default QuestionDetailsSkeleton;
