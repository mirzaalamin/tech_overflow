/* eslint-disable react/react-in-jsx-scope */

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { api } from "@/lib/api";
import handleError from "@/lib/handlers/error";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next js" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 23,
    answers: 72,
    views: 980,
    createdAt: new Date("2025-2-5"),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "angular" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2024-09-01"),
  },
  {
    _id: "3",
    title: "How to learn Redux in simple steps?",
    description: "I want to learn Redux toolkit, can anyone help me?",
    tags: [
      { _id: "1", name: "Redux" },
      { _id: "2", name: "Toolkit" },
    ],
    author: {
      _id: "1",
      name: "Mirza",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 110,
    answers: 90,
    views: 1100,
    createdAt: new Date("2024-03-01"),
  },
];

const test = async () => {
  try {
    return await api.users.getAll();
  } catch (error) {
    return handleError(error) as ActionResponse;
  }
};

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const users = await test();
  console.log(users);
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const mathesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;

    return matchesQuery && mathesFilter;
  });
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
      <section className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </section>
    </>
  );
};

export default Home;
