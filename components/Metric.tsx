import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/react-in-jsx-scope */
interface Props {
  imgUrl: string;
  value: string | number;
  alt: string;
  title: string;
  href: string;
  textStyle: string;
  imageStyle: string;
  isAuthor: boolean;
  textStyles?: string;
}

const Metric = ({
  imgUrl,
  value,
  alt,
  title,
  href,
  isAuthor,
  textStyle,
  imageStyle,
  textStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        height={16}
        width={16}
        alt={alt}
        className={`rounded-full object-contain ${imageStyle}`}
      />
      <p className={`${textStyle} flex item-center gap-1`}>
        {value}
        {title ? (
          <span className={cn(`small-regular line-clamp-1`, textStyles)}>
            {title}
          </span>
        ) : null}
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
