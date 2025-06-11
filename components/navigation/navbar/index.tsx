import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";
import GlobalSearch from "@/components/search/GlobalSearch";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./mobileNavigation";

/* eslint-disable react/react-in-jsx-scope */
const Navbar = async () => {
  const session = await auth();
  const userId = session?.user?.id;
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
          Tech<span className="text-primary-100">Overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        {userId && (
          <UserAvatar
            id={session?.user?.id}
            name={session?.user?.name}
            imageUrl={session?.user?.image}
          />
        )}
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
