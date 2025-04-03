/* eslint-disable react/react-in-jsx-scope */

import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import Metric from "../Metric";
import TagCard from "./TagCard";

interface Props {
  question: Question;
}
const QuestionCard = ({
  question: { _id, title, tags, author, createdAt, upvotes, answers, views },
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11" key={_id}>
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark:400_light700 text-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="ms:h3-semibold base-semibold text-dark200_light900 text-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.image}
          alt={author.name}
          title={` • Asked ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          value={author.name}
          textStyle="small-medium text-dark400_light700"
          isAuthor
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="Like"
            title="Votes"
            value={upvotes}
            textStyle="small-medium text-dark400_light800"
          />

          <Metric
            imgUrl="/icons/message.svg"
            alt="Answers"
            title="Answers"
            value={answers}
            textStyle="small-medium text-dark400_light800"
          />

          <Metric
            imgUrl="/icons/eye.svg"
            alt="Views"
            title="Views"
            value={views}
            textStyle="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
