"use client";

import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

/* eslint-disable react/react-in-jsx-scope */
const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver({ AskQuestionSchema }),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  return (
    <Form {...form}>
      <form className="flex flex-col w-full gap-10"></form>
    </Form>
  );
};

export default QuestionForm;
