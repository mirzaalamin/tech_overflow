import ROUTES from "@/constants/routes";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTags } from "@/lib/actions/tag.action";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";
import DataRenderer from "../DataRenderer";

/* eslint-disable react/react-in-jsx-scope */
const RightSidebar = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 5,
    query: "",
    filter: "",
  });

  const {
    success: questionSuccess,
    data: hotQuestions,
    error: questionError,
  } = await getHotQuestions();

  const { tags } = data || {};

  // const popularTags = [
  //   { _id: 1, name: "react", questions: 1720 },
  //   { _id: 2, name: "javascript", questions: 1362 },
  //   { _id: 3, name: "typescript", questions: 1580 },
  //   { _id: 4, name: "redux", questions: 746 },
  //   { _id: 5, name: "tailwind css", questions: 1127 },
  // ];

  return (
    <section className="pt-36 custom-scrollbar flex flex-col background-light900_dark200 light-border border-l sticky right-0 top-0 p-6 h-screen w-[350px] gap-6 overflow-y-auto shadow-light300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <DataRenderer
          success={questionSuccess}
          error={questionError}
          data={hotQuestions}
          empty={{
            title: "No question found",
            message: "No questions have been asked yet.",
          }}
          render={(hotQuestions) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {hotQuestions.map(({ _id, title }) => (
                <Link
                  href={ROUTES.QUESTION(_id)}
                  key={_id}
                  className="flex cursor-pointer items-center justify-between gap-7"
                >
                  <p className="body-medium text-dark500_light700 line-clamp-2">
                    {title}
                  </p>
                  <Image
                    src="/icons/chevron-right.svg"
                    alt="Chevron"
                    height={20}
                    width={20}
                    className="invert-colors"
                  />
                </Link>
              ))}
            </div>
          )}
        />
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
