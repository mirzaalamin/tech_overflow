import ROUTES from "@/constants/routes";
import { getTags } from "@/lib/actions/tags.action";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

/* eslint-disable react/react-in-jsx-scope */
const RightSidebar = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 5,
    query: "",
    filter: "",
  });

  const { tags } = data || {};
  const topQuestions = [
    { _id: 1, title: "How to create a custom hook in React" },
    { _id: 2, title: "How to use Reduxt Toolkit" },
    { _id: 3, title: "How to use React Query" },
    { _id: 4, title: "How to Develop backend" },
    { _id: 5, title: "How to use Tailwind css" },
  ];

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
        <div className="mt-7 flex flex-col w-full gap-[30px]">
          {topQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.QUESTION(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
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
