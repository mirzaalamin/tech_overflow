import AllAnswers from "@/components/answers/AllAnswers";
import TagCard from "@/components/cards/TagCard";
import Preview from "@/components/editor/Preview";
import AnswerForm from "@/components/forms/AnswerForm";
import Metric from "@/components/Metric";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";
import { GetAnswers } from "@/lib/actions/answer.action";
import { getQuestion, incrementViews } from "@/lib/actions/question.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { RouteParams } from "@/types/global";
import Link from "next/link";
import { redirect } from "next/navigation";
import { after } from "next/server";

/* eslint-disable react/react-in-jsx-scope */

const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  const { success, data: question } = await getQuestion({ questionId: id });

  after(() => {
    incrementViews({ questionId: id });
  });

  if (!success || !question) return redirect("/404");

  const {
    success: areAnswersLoaded,
    data: answersResult,
    error: answersError,
  } = await GetAnswers({
    questionId: id,
    page: 1,
    pageSize: 10,
    filter: "latest",
  });

  const { author, createdAt, answers, views, tags, title, content } = question;
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between">
          <div className="flex items-center justify-start gap-1">
            <UserAvatar
              id={author._id}
              name={author.name}
              imageUrl={author?.image}
              className="size-[22px]"
              fallbackClassName="text-[10px]"
            />

            <Link href={ROUTES.PROFILE(author._id)}>
              <p className="paragraph-semibold text-dark300_light700">
                {author.name}
              </p>
            </Link>
          </div>
          <div className="flex justify-end">
            <p>Votes</p>
          </div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full">
          {title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="clock icon"
          value={` Asked ${getTimeStamp(new Date(createdAt))}`}
          title=""
          textStyle="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/message.svg"
          alt="message icon"
          value={` ${answers} Answeres`}
          title=""
          textStyle="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/eye.svg"
          alt="eye icon"
          value={` ${formatNumber(views)} Views`}
          title=""
          textStyle="small-regular text-dark400_light700"
        />
      </div>

      <Preview content={content} />
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>

      <section className="my-5">
        <AllAnswers
          data={answersResult?.answers}
          success={areAnswersLoaded}
          error={answersError}
          totalAnswers={answersResult?.totalAnswers}
        />
      </section>

      <section className="my-5">
        <AnswerForm questionId={question._id} />
      </section>
    </>
  );
};

export default QuestionDetails;
