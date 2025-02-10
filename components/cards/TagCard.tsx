/* eslint-disable react/react-in-jsx-scope */

import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const iconClass = getDeviconClassName(name);

  const Content = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2">
        <div className="flex-center space-x-2">
          {!compact ? <i className={`${iconClass} text-sm`}></i> : null}

          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            height={12}
            width={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (remove) {
    if (isButton) {
      return (
        <div className="flex justify-between gap-2 mr-2 mb-2">{Content}</div>
      );
    }
  } else {
    return (
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {Content}
      </Link>
    );
  }
};

export default TagCard;
