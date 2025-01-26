/* eslint-disable react/react-in-jsx-scope */

import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h2 className="text-3xl font-inter font-bold py-[100px]">
        Welcome to the NEXT js world
      </h2>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
};

export default Home;
