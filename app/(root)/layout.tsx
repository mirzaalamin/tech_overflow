/* eslint-disable react/react-in-jsx-scope */
import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/navbar/LeftSidebar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <LeftSidebar />
      {children}
    </main>
  );
};

export default RootLayout;
