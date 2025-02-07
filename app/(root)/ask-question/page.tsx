import QuestionForm from "@/components/forms/QuestionForm";

/* eslint-disable react/react-in-jsx-scope */
const AskAQuestion = () => {
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
