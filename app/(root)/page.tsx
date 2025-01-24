/* eslint-disable react/react-in-jsx-scope */

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h2 className="text-3xl font-inter font-bold">
        Welcome to the NEXT js world
      </h2>
    </>
  );
};

export default Home;
