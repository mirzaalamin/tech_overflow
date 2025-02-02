/* eslint-disable react/react-in-jsx-scope */

import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h2>Welcome to the NEXT js world!</h2>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      ></form>
    </>
  );
};

export default Home;
