import { useRouter } from "next/navigation";
import { BackIcon } from "../icons/Others";

export const TopText = ({ text }: { text: string }) => {
  return (
    <p className="text-lg md:text-xl py-[2rem] md:py-[3rem] font-semibold font-raleway text-secondary">
      {text}
    </p>
  );
};
export const NumberedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={`md:text-lg py-[3rem] font-bold font-raleway text-primary ${className}`}
    >
      {text}
    </p>
  );
};

export const ItalicText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={` italic py-[1rem] font-medium pl-[1rem] font-raleway text-primary ${className}`}
    >
      . {text}
    </p>
  );
};
export const GoBack = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="flex cursor-pointer hover:opacity-50 text-grey4C items-center gap-2"
    >
      <BackIcon />
      <p>Go Back</p>
    </div>
  );
};
