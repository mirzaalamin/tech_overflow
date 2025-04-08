/* eslint-disable react/react-in-jsx-scope */

import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

import "../../database/index";

// const questions = [
//   {
//     _id: "1",
//     title: "How to learn React?",
//     description: "I want to learn React, can anyone help me?",
//     tags: [
//       { _id: "1", name: "React" },
//       { _id: "2", name: "Next js" },
//     ],
//     author: {
//       _id: "1",
//       name: "John Doe",
//       image:
//         "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
//     },
//     upvotes: 23,
//     answers: 72,
//     views: 980,
//     createdAt: new Date("2025-2-5"),
//   },
//   {
//     _id: "2",
//     title: "How to learn JavaScript?",
//     description: "I want to learn JavaScript, can anyone help me?",
//     tags: [
//       { _id: "1", name: "JavaScript" },
//       { _id: "2", name: "angular" },
//     ],
//     author: {
//       _id: "1",
//       name: "John Doe",
//       image:
//         "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
//     },
//     upvotes: 10,
//     answers: 5,
//     views: 100,
//     createdAt: new Date("2024-09-01"),
//   },
//   {
//     _id: "3",
//     title: "How to learn Redux in simple steps?",
//     description: "I want to learn Redux toolkit, can anyone help me?",
//     tags: [
//       { _id: "1", name: "Redux" },
//       { _id: "2", name: "Toolkit" },
//     ],
//     author: {
//       _id: "1",
//       name: "Mirza",
//       image:
//         "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
//     },
//     upvotes: 110,
//     answers: 90,
//     views: 1100,
//     createdAt: new Date("2024-03-01"),
//   },
// ];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  // const session = await auth();

  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  const { questions } = data || {};

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for a Question here..."
          otherClasses=""
        />
      </section>
      <HomeFilter />
      <DataRenderer
        success={success}
        error={error}
        data={questions}
        empty={EMPTY_QUESTION}
        render={(questions) => (
          <section className="mt-10 flex w-full flex-col gap-6">
            {questions.map((question) => (
              <QuestionCard key={question._id} question={question} />
            ))}
          </section>
        )}
      />
    </>
  );
};

export default Home;
