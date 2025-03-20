import { RouteParams } from "@/types/global";

/* eslint-disable react/react-in-jsx-scope */
const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  return <div>Question page {id}</div>;
};

export default QuestionDetails;
