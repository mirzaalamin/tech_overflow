/* eslint-disable react/react-in-jsx-scope */
const ProfileLoadingSkeleton = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-start justify-between sm:flex-row animate-pulse">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <div className="size-[140px] rounded-full bg-light-800 dark:bg-dark-300" />

          <div className="mt-3 space-y-3">
            <div className="h-8 w-60 rounded-md bg-light-800 dark:bg-dark-300" />
            <div className="h-5 w-40 rounded-md bg-light-800 dark:bg-dark-300" />
            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              <div className="h-5 w-36 rounded-md bg-light-800 dark:bg-dark-300" />
              <div className="h-5 w-28 rounded-md bg-light-800 dark:bg-dark-300" />
              <div className="h-5 w-24 rounded-md bg-light-800 dark:bg-dark-300" />
            </div>
            <div className="h-4 w-80 rounded-md bg-light-800 dark:bg-dark-300" />
          </div>
        </div>

        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
          <div className="h-12 w-44 rounded-md bg-light-800 dark:bg-dark-300" />
        </div>
      </section>

      <div className="mt-10 flex gap-10 animate-pulse">
        <div className="flex-[2] space-y-5">
          <div className="h-10 w-32 rounded-md bg-light-800 dark:bg-dark-300" />
          <div className="h-36 w-full rounded-lg bg-light-800 dark:bg-dark-300" />
          <div className="h-36 w-full rounded-lg bg-light-800 dark:bg-dark-300" />
        </div>

        <div className="flex w-full min-w-[250px] flex-1 flex-col max-lg:hidden space-y-5">
          <div className="h-8 w-32 rounded-md bg-light-800 dark:bg-dark-300" />
          <div className="h-24 w-full rounded-lg bg-light-800 dark:bg-dark-300" />
          <div className="h-24 w-full rounded-lg bg-light-800 dark:bg-dark-300" />
        </div>
      </div>
    </>
  );
};

export default ProfileLoadingSkeleton;
