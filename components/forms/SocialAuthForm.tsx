"use client";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

/* eslint-disable react/react-in-jsx-scope */
const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Login failed!",
        description:
          error instanceof Error ? error.message : "An unknown error occured",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="github logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with GitHub</span>
      </Button>
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="github logo"
          height={20}
          width={20}
          className="mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
