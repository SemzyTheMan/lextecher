export const TopText = ({ text }: { text: string }) => {
  return (
    <p className="text-xl py-[3rem] font-semibold font-raleway text-secondary">{text}</p>
  );
};
export const NumberedText = ({ text }: { text: string }) => {
  return (
    <p className="text-lg py-[3rem] font-bold font-raleway text-primary">
      {text}
    </p>
  );
};