import { SVGProps } from "react";

export const InputIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.0638 4.57055C25.1598 1.44313 3.31547 9.10424 3.33351 11.9013C3.35396 15.0732 11.8643 16.0489 14.2231 16.7108C15.6416 17.1086 16.0215 17.5166 16.3486 19.0041C17.8299 25.7406 18.5736 29.0913 20.2687 29.1661C22.9706 29.2856 30.8979 7.62264 28.0638 4.57055Z"
        stroke="#006B61"
        strokeWidth="1.8"
      />
      <path
        d="M15.3335 17.1667L20.0002 12.5"
        stroke="#FFD361"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
