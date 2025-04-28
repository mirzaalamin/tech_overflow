"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

/* eslint-disable react/react-in-jsx-scope */

const filters = [
  { name: "Popular", value: "popular" },
  { name: "Newest", value: "newest" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterParams = searchParams.keys("filter");

  const [active, setActive] = useState(filterParams || "");

  let newUrl = "";

  const handleFilterClick = (filter: string) => {
    if (filter) {
      if (active === filter) {
        setActive("");

        newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["filter"],
        });
      } else {
        setActive(filter);
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "filter",
          value: filter,
        });
      }
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map(({ name, value }) => (
        <Button
          key={name}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === value
              ? "bg-primary-100 text-dark-100 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handleFilterClick(value)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
