import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
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
          {["Home", "About", "Our services", "Our Team", "Blog"].map(
            (data, i) => (
              <Link
                className="text-sm text-white font-semibold "
                href={"/"}
                key={data + i}
              >
                {data}
              </Link>
            )
          )}
        </div>
        <button className="w-[7.75rem] hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold">
          Contact us
        </button>
      </nav>
    );
}
 
export default TopNav;