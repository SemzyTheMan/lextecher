"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const routes = [
    { page: "Home", route: "/" },
    { page: "About", route: "/about" },
    { page: "Our services", route: "/our-services" },
    { page: "Our Team", route: "/our-team" },
    { page: "Blog", route: "/blogs" },
  ];
  const pathName = usePathname();
  return (
    <nav className="w-full fixed top-0 z-[999] left-0 flex h-[5.25rem] px-[4rem] items-center bg-primary">
      <Image
        src={"/images/logo.png"}
        className="mr-auto"
        width={200}
        height={71.19}
        alt="logo"
      />
      <div className="flex mr-[5rem] items-center gap-5">
        {routes.map((data, i) => (
          <Link
            className={`text-sm ${
              pathName == data?.route ? "text-secondary" : "text-white"
            } font-semibold `}
            href={data?.route}
            key={data?.page + i}
          >
            {data?.page}
          </Link>
        ))}
      </div>
      <button className="w-[7.75rem] hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold">
        Contact us
      </button>
    </nav>
  );
};

export default TopNav;
