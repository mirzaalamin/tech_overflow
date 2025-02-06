"use client";

import { formUrlQuery, removeKeysFromQueryUrl } from "@/lib/url";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

/* eslint-disable react/react-in-jsx-scope */
const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get("query");

  const [searchQuery, setSearchQuery] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQueryUrl({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div className="background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 px-4 rounded-[10px]">
      <Image
        src={imgSrc}
        height={24}
        width={24}
        alt="Search icon"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none ${otherClasses}`}
      />
    </div>
  );
};

export default LocalSearch;
