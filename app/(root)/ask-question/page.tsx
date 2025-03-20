import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { redirect } from "next/navigation";

/* eslint-disable react/react-in-jsx-scope */
const AskAQuestion = async () => {
  const session = await auth();
  if (!session) return redirect(ROUTES.SIGN_IN);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a public Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;
