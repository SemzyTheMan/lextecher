"use client";

import { useScroll } from "@/context/ScrollContext";
import Image from "next/image";
import styles from "./TopNav.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const TopNav = () => {
  const routes = [
    { page: "Home", route: "/" },
    { page: "About", route: "/#" },
    { page: "Our services", route: "/#" },
    { page: "Our Team", route: "/our-team" },
    { page: "Blog", route: "/blogs" },
  ];
  const pathName = usePathname();
  const router = useRouter();
  const { scrollToSection } = useScroll();
  const checkRef = useRef<HTMLInputElement>(null);

  const handleScroll = (data: { page: string; route?: string; }) => {
    if (data.page == "About") {
      scrollToSection("about");
    } else if (data.page == "Our services") {
      scrollToSection("services");
    }
    handleClick();
  };
  const handleClick = () => {
    if (checkRef.current) {
      checkRef.current.checked = false;
    }
  };

  return (
    <nav className="w-full max-w-[1400px]  left-[50%] transform  sticky top-0 !z-[9999]  flex h-[5.25rem] px-4 md:px-[4rem] items-center bg-primary">
      <Image
        src={"/images/logo.png"}
        className="mr-auto cursor-pointer"
        onClick={() => router.push("/")}
        width={200}
        height={71.19}
        alt="logo"
      />
      <div className="hidden md:flex mr-[5rem] items-center gap-5">
        {routes.map((data, i) => (
          <button
            onClick={() => {
              if (data.page == "About" || data.page == "Our services") {
                handleScroll(data);
                router.push(data.route);
              } else {
                router.push(data.route);
              }
            }}
            className={`text-sm ${
              pathName == data?.route ? "text-secondary" : "text-white"
            } font-semibold `}
            key={data?.page + i}
          >
            {data?.page}
          </button>
        ))}
      </div>

      <div className={`${styles.NavContainer} md:hidden`}>
        <input
          ref={checkRef}
          type="checkbox"
          className={`${styles.NavigationCheckBox}`}
        />

        <label className={`${styles.NavigationButton}`}>
          <span className={`${styles.NavigationIcon}`}></span>
        </label>
        <div className={`${styles.NavigationBackground} `}>&nbsp;</div>
        <nav className={`${styles.Navnav} `}>
          <div className={`${styles.NavList}`}>
            <ul>
              {routes.map((data, i) => (
                <li
                  onClick={() => {
                    handleScroll(data);
                  }}
                  key={i}
                  className={`${styles.NavListItem} py-4`}
                >
                  <a href={data.route} className={`${styles.NavLink}`}>
                    {data?.page}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                router.push("/");
                scrollToSection("contact");
                handleClick();
              }}
              className="w-[7.75rem]   hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold"
            >
              Contact us
            </button>
          </div>
        </nav>
      </div>
      <button
        onClick={() => {
          router.push("/");
          scrollToSection("contact");
        }}
        className="w-[7.75rem] hidden md:block  hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold"
      >
        Contact us
      </button>
    </nav>
  );
};

export default TopNav;
