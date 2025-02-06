/* eslint-disable react/react-in-jsx-scope */

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "q1",
    title: "How does JavaScript handle asynchronous operations?",
    author: {
      _id: "a1",
      name: "John Doe",
    },
    tags: ["JavaScript", "Async", "Promises"],
    upvote: 25,
    views: 150,
    answere: 48,
  },
  {
    _id: "q2",
    title: "What are the benefits of using React for front-end development?",
    author: {
      _id: "a2",
      name: "Alice Smith",
    },
    tags: ["React", "Front-End", "JavaScript"],
    upvote: 40,
    views: 230,
    answere: 43,
  },
  {
    _id: "q3",
    title: "How can I optimize database queries in MongoDB?",
    author: {
      _id: "a3",
      name: "David Johnson",
    },
    tags: ["MongoDB", "Database", "Optimization"],
    upvote: 18,
    views: 90,
    answere: 34,
  },
  {
    _id: "q4",
    title: "What is the difference between HTTP and HTTPS?",
    author: {
      _id: "a4",
      name: "Emma Brown",
    },
    tags: ["Networking", "Security", "Web"],
    upvote: 35,
    views: 180,
    answere: 197,
  },
  {
    _id: "q5",
    title: "How does machine learning improve search engine results?",
    author: {
      _id: "a5",
      name: "Michael Lee",
    },
    tags: ["Machine Learning", "AI", "Search Engine"],
    upvote: 50,
    views: 300,
    answere: 55,
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query.toLowerCase())
  );
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
      Filter
      <section className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map(({ _id, title }) => (
          <p key={_id} className="text-2xl">
            {title}
          </p>
        ))}
      </section>
    </>
  );
};

export default Home;
