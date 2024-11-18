import { BackIcon } from "../icons/Others";

export const TopText = ({ text }: { text: string }) => {
  return (
    <p className="text-xl py-[3rem] font-semibold font-raleway text-secondary">
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
      className={`text-lg py-[3rem] font-bold font-raleway text-primary ${className}`}
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
      className={` italic py-[3rem] font-medium pl-[1rem] font-raleway text-primary ${className}`}
    >
      . {text}
    </p>
  );
};
export const GoBack = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="flex text-grey4C items-center gap-2">
    <BackIcon />
    <p>Go Back</p>
  </div>
);
