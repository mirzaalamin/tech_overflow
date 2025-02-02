"use client";

import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLinks from "./navbar/NavLinks";

/* eslint-disable react/react-in-jsx-scope */
const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 right-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="Account"
              height={20}
              width={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="SignUp"
              height={20}
              width={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
    // <div className="h-screen flex flex-between flex-col w-[300px] background-light900_dark200 gap-5 px-1 py-6 shadow-light-100 dark:shadow-none sm:px-12">
    //   <div className="pt-[80px]">
    //     <NavLinks />
    //   </div>
    //   <div className="w-full flex flex-col gap-3">
    //     <div>
    //       <Link href={ROUTES.SIGN_IN}>
    //         <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
    //           <span className="primary-text-gradient">Log In</span>
    //         </Button>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href={ROUTES.SIGN_UP}>
    //         <Button className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
    //           Sign Up
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LeftSidebar;
