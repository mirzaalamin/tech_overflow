import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./mobileNavigation";

/* eslint-disable react/react-in-jsx-scope */
const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex item-center gap-1">
        <Image
          src="/images/site-logo.svg"
          height={23}
          width={23}
          alt="Tech Overflow logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Tech<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <p>Global Search bar</p>

      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
