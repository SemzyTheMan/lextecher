import { SVGProps } from "react";
import { motion, SVGMotionProps } from "framer-motion";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ResearchIcon = (props: any) => {
  return (
    <motion.svg
      animate={{ x: [2, -2] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.5],
        repeat: Infinity,
        repeatDelay: 0,
      }}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 15V50"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.9514 8.21361C23.3044 9.80401 28.2828 13.1308 30 15.0407C31.7173 13.1308 36.6955 9.80401 45.0485 8.21361C49.2803 7.40788 51.396 7.00503 53.198 8.54911C55 10.0932 55 12.6006 55 17.6153V35.6375C55 40.2228 55 42.5153 53.8435 43.9468C52.687 45.378 50.141 45.8628 45.0485 46.8325C40.5093 47.6968 36.9665 49.0738 34.402 50.4578C31.879 51.8193 30.6175 52.5 30 52.5C29.3825 52.5 28.121 51.8193 25.598 50.4578C23.0336 49.0738 19.4908 47.6968 14.9514 46.8325C9.85913 45.8628 7.313 45.378 6.1565 43.9468C5 42.5153 5 40.2228 5 35.6375V17.6153C5 12.6006 5 10.0932 6.80195 8.54911C8.60393 7.00503 10.7198 7.40788 14.9514 8.21361Z"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.g
        animate={{
          y: [0, -10, -2],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <path
          d="M48 40.8L51 43.8"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M50.9203 46.2302C50.2271 45.537 50.2271 44.4131 50.9203 43.72C51.6134 43.0267 52.7374 43.0267 53.4306 43.72L57.0804 47.3698C57.7736 48.063 57.7736 49.1869 57.0804 49.88C56.3873 50.5733 55.2634 50.5733 54.5701 49.88L50.9203 46.2302Z"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M50.4001 34.8C50.4001 30.1608 46.6393 26.4 42.0001 26.4C37.3609 26.4 33.6001 30.1608 33.6001 34.8C33.6001 39.4392 37.3609 43.2 42.0001 43.2C46.6393 43.2 50.4001 39.4392 50.4001 34.8Z"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
export const CyberSecurityIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        animate={{ scale: [1, 1.1] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.5],
          repeat: Infinity,
          repeatDelay: 0,
        }}
        d="M26.1526 16.2524V21.2M17.5 25.0035H22.5918M37.4083 25.0035H42.5001M37.4083 32.4365H42.5001M17.5 32.4365H22.5918M26.1526 36.3005V41.248M33.6601 36.3005V41.248M33.6333 16.2524V21.2M25.073 36.1712H34.9268C36.2973 36.1712 37.4083 35.052 37.4083 33.6712V23.7C37.4083 22.3193 36.2973 21.2 34.9268 21.2H25.073C23.7027 21.2 22.5918 22.3193 22.5918 23.7V33.6712C22.5918 35.052 23.7027 36.1712 25.073 36.1712Z"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M52.5 27.9583V20.7007C52.5 16.6007 52.5001 14.5507 51.4898 13.2132C50.4796 11.8757 48.1953 11.2264 43.6268 9.92775C40.5053 9.0405 37.754 7.97158 35.5558 6.99573C32.5585 5.66525 31.0598 5 30.0001 5C28.9401 5 27.4416 5.66525 24.4443 6.99573C22.246 7.97158 19.4946 9.04048 16.3733 9.92775C11.8048 11.2264 9.52057 11.8757 8.5103 13.2132C7.5 14.5507 7.5 16.6007 7.5 20.7007V27.9583C7.5 42.0213 20.1569 50.4588 26.4848 53.7985C28.0025 54.5995 28.7616 55 30.0001 55C31.2386 55 31.9973 54.5995 33.5151 53.7985C39.8431 50.4588 52.5 42.0213 52.5 27.9583Z"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const IntellectualIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="61"
      height="62"
      viewBox="0 0 61 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.2037 56.987V48.1128C10.2037 44.9343 9.39911 43.282 7.81752 40.5195C5.9216 37.2082 4.83337 33.3437 4.83337 29.2165C4.83337 16.9466 14.451 7 26.3149 7C38.1788 7 47.7964 16.9466 47.7964 29.2165C47.7964 30.6657 47.7964 31.3905 47.8549 31.7968C47.9946 32.768 48.4327 33.6035 48.8636 34.4682L53.1667 43.1018L49.7848 44.8505C48.8046 45.3572 48.3148 45.6107 47.9733 46.0785C47.6318 46.546 47.5359 47.074 47.3435 48.1298L47.3247 48.2327C46.8843 50.6515 46.3984 53.3215 45.0296 55.006C44.5462 55.6008 43.9479 56.084 43.2726 56.4247C42.1581 56.987 40.7878 56.987 38.0473 56.987C36.7793 56.987 35.5076 57.0172 34.2399 56.9855C31.2347 56.9097 29 54.296 29 51.261"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.771 28.3287C33.7408 28.3287 32.8012 27.9255 32.0895 27.262M34.771 28.3287C34.771 31.1935 33.1666 33.9145 30.0781 33.9145C26.9896 33.9145 25.3854 36.6352 25.3854 39.5M34.771 28.3287C39.9652 28.3287 39.9652 19.9504 34.771 19.9504C34.2991 19.9504 33.8462 20.0351 33.4254 20.1906C33.6792 13.9455 24.976 12.25 23.0048 18.1004M23.0048 18.1004C24.4405 19.1027 25.3854 20.8081 25.3854 22.7432M23.0048 18.1004C18.5296 14.9758 12.5639 20.5827 15.402 25.5819C10.6388 26.3207 11.1481 33.9145 15.9996 33.9145C17.36 33.9145 18.5627 33.211 19.2907 32.1345"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.0745 13.4993C45.7592 12.7905 45.5834 12.0019 45.5834 11.1709C45.5834 8.08461 48.0085 5.58267 51 5.58267C53.9916 5.58267 56.4167 8.08461 56.4167 11.1709C56.4167 12.0019 56.2409 12.7905 55.9255 13.4993"
        stroke="#FDB600"
        strokeLinecap="round"
      />

      <motion.path
        animate={{ opacity: [0, 0, 1, 0, 1], y: [0, 0, 10, 5, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        d="M51 0.666016V3.49602"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        d="M60.5 10.9993H58.5"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        d="M43.6666 10.9993H41.6666"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        d="M58.8927 3.1066L56.3027 5.6966"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        d="M45.698 5.69742L43.108 3.10742"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <motion.path
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.1,
        }}
        d="M53.0975 17.088C53.9395 16.8157 54.2772 16.045 54.3722 15.2698C54.4005 15.0382 54.21 14.8462 53.9767 14.8462L48.0641 14.8463C47.8228 14.8463 47.6289 15.0512 47.6578 15.2907C47.7508 16.0644 47.9856 16.6296 48.8779 17.088M53.0975 17.088C53.0975 17.088 49.0248 17.088 48.8779 17.088M53.0975 17.088C52.9963 18.7088 52.5282 19.3507 51.0057 19.3327C49.3772 19.3628 49.0026 18.5694 48.8779 17.088"
        stroke="#FDB600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const DataPrivacyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.0083 52.5H30.0068C18.2185 52.5 12.3243 52.5 8.66218 48.8387C5 45.1777 5 39.285 5 27.5V19.8607C5 15.3195 5 13.0489 5.95105 11.3452C6.629 10.1307 7.63138 9.12855 8.8462 8.4508C10.5504 7.5 12.8216 7.5 17.3641 7.5C20.2742 7.5 21.7293 7.5 23.0031 7.97752C25.9113 9.0678 27.1105 11.7089 28.4228 14.3328L30.0068 17.5M20.0041 17.5H41.885C47.1533 17.5 49.7873 17.5 51.6795 18.764C52.4988 19.3112 53.202 20.0143 53.7493 20.8332C54.7343 22.3071 54.952 24.2311 55 27.5"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M53.75 37.4791V33.8504C53.75 31.8004 53.75 30.7754 53.2449 30.1066C52.7398 29.4379 51.5976 29.1132 49.3134 28.4639C47.7528 28.0203 46.377 27.4858 45.2779 26.9979C43.7793 26.3326 43.03 26 42.5 26C41.97 26 41.2208 26.3326 39.7221 26.9979C38.623 27.4858 37.2473 28.0202 35.6867 28.4639C33.4024 29.1132 32.2603 29.4379 31.7551 30.1066C31.25 30.7754 31.25 31.8004 31.25 33.8504V37.4791C31.25 44.5106 37.5785 48.7294 40.7425 50.3993C41.5014 50.7998 41.8808 51 42.5 51C43.1193 51 43.4986 50.7998 44.2575 50.3993C47.4215 48.7294 53.75 44.5106 53.75 37.4791Z"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.g
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      >
        <path
          d="M39.9966 36.725C38.6466 36.725 37.9716 37.7 37.8216 38.3C37.6716 38.9 37.6716 41.075 37.7616 41.975C38.0616 43.1 38.8116 43.565 39.5466 43.715C40.2216 43.775 43.0716 43.7525 43.8966 43.7525C45.0966 43.775 45.9966 43.325 46.3716 41.975C46.4466 41.525 46.5216 39.05 46.3341 38.3C45.9366 37.1 44.9466 36.725 44.1966 36.725H39.9966Z"
          stroke="#FDB600"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M39.8877 36.1982C39.8877 36.1232 39.8979 35.6914 39.8997 35.1482C39.9013 34.6518 39.8577 34.1732 40.0947 33.7352C40.9827 31.9682 43.5327 32.1482 44.1627 33.9482C44.2718 34.2445 44.2784 34.7143 44.2752 35.1482C44.2711 35.7025 44.2827 36.1982 44.2827 36.1982"
          stroke="#FDB600"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
};
export const ContractIcon = (props: SVGMotionProps<SVGSVGElement>) => {
  return (
    <motion.svg
      animate={{ x: [1, 0] }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 0.3,
      }}
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45 15.5C44.8827 11.6164 44.4492 9.29995 42.8442 7.6967C40.6452 5.5 37.1058 5.5 30.027 5.5H20.0163C12.9375 5.5 9.39815 5.5 7.19908 7.6967C5 9.8934 5 13.4289 5 20.5V40.5C5 47.571 5 51.1065 7.19908 53.3032C9.39815 55.5 12.9375 55.5 20.0163 55.5H30.027C37.1058 55.5 40.6452 55.5 42.8442 53.3032C44.4492 51.7 44.8827 49.3837 45 45.5"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <motion.path
        animate={{ x: [5, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0.1,
        }}
        d="M45.6047 31.8548L48.5475 28.912C49.2235 28.236 49.5615 27.898 49.7423 27.5335C50.086 26.8396 50.086 26.0251 49.7423 25.3313C49.5615 24.9666 49.2235 24.6286 48.5475 23.9526C47.8713 23.2766 47.5333 22.9385 47.1688 22.7578C46.475 22.414 45.6605 22.414 44.9665 22.7578C44.602 22.9385 44.264 23.2766 43.588 23.9526L40.6453 26.8952M45.6047 31.8548L32.4393 45.0202L25 47.5L27.4798 40.0607L40.6453 26.8952M45.6047 31.8548L40.6453 26.8952"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 48H15L18.125 41.75L21.25 48H23.75"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15.5H35"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 25.5H30"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};
export const PartnershipIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ rotate: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          d="M55 16.8751H48.0278C46.525 16.8751 45.7735 16.8751 45.065 16.6605C44.3565 16.446 43.7313 16.0292 42.4808 15.1956C40.6053 13.9451 38.4655 12.5187 37.4025 12.1969C36.3398 11.8751 35.2125 11.8751 32.9583 11.8751C29.8928 11.8751 27.9168 11.8751 26.5385 12.446C25.1603 13.0169 24.0764 14.1007 21.9087 16.2685L20.001 18.1762C19.5125 18.6647 19.2682 18.909 19.1174 19.1501C18.5584 20.0441 18.6203 21.1927 19.2722 22.0213C19.4481 22.2449 19.7172 22.4615 20.2555 22.8946C22.2449 24.4957 25.113 24.3359 26.9145 22.5236L30 19.4197H32.5L47.5 34.509C48.8808 35.898 48.8808 38.1497 47.5 39.5387C46.1193 40.9277 43.8808 40.9277 42.5 39.5387L41.25 38.2812M41.25 38.2812L33.75 30.7367M41.25 38.2812C42.6308 39.6702 42.6308 41.9222 41.25 43.311C39.8693 44.7 37.6308 44.7 36.25 43.311L33.75 40.7962M33.75 40.7962C35.1308 42.185 35.1308 44.437 33.75 45.826C32.3693 47.2147 30.1308 47.2147 28.75 45.826L25 42.0535M33.75 40.7962L28.75 35.7962M25 42.0535L23.75 40.7962M25 42.0535C26.3808 43.4425 26.3808 45.6945 25 47.0835C23.6193 48.4722 21.3807 48.4722 20 47.0835L12.9409 39.8772C11.4904 38.3965 10.7651 37.6562 9.83588 37.2655C8.90665 36.875 7.8702 36.875 5.79735 36.875H5"
          stroke="#006C5C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.g
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <path
            d="M55 36.875H48.75"
            stroke="#FDB600"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M21.25 16.8751H5"
            stroke="#FDB600"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </svg>
  );
};
export const TechAdvisoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 55L25 40H5L10 55H30ZM30 55H40"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.g
        animate={{
          x: [5, 0, 5],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <path
          d="M26 35.5V34.25C26 29.536 26 27.1789 24.5355 25.7145C23.071 24.25 20.714 24.25 16 24.25C11.286 24.25 8.92893 24.25 7.46448 25.7145C6 27.1789 6 29.536 6 34.25V35.5"
          stroke="#006C5C"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z"
          stroke="#006C5C"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
      </motion.g>

      <motion.g
        animate={{
          x: [5, 0, 5],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <path
          d="M44.5 35.5C44.5 38.2615 42.2615 40.5 39.5 40.5C36.7385 40.5 34.5 38.2615 34.5 35.5C34.5 32.7385 36.7385 30.5 39.5 30.5C42.2615 30.5 44.5 32.7385 44.5 35.5Z"
          stroke="#006C5C"
          strokeWidth="1.5"
        />
        <path
          d="M31 43.75H46C48.7615 43.75 51 45.9885 51 48.75V50C51 52.7615 48.7615 55 46 55H43.5"
          stroke="#006C5C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>

      <motion.g
        animate={{
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <path
          d="M21.875 45L18.75 46.875M16.25 48.125L13.125 50M17.5 51.875V48.75M17.5 46.25V43.125M21.875 50L18.75 48.125M16.25 46.875L13.125 45"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M12.1875 49.375L12.1875 45.9375M16.5625 42.1875L13.125 44.0625M22.1875 44.0625L18.4375 42.1875M22.8125 45.625V49.375M22.1875 50.9375L18.4375 52.8125M12.8125 50.9375L16.5625 52.8125"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 51.875C16.9822 51.875 16.5625 52.2947 16.5625 52.8125C16.5625 53.3303 16.9822 53.75 17.5 53.75C18.0178 53.75 18.4375 53.3303 18.4375 52.8125C18.4375 52.2947 18.0178 51.875 17.5 51.875Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 41.25C16.9822 41.25 16.5625 41.6697 16.5625 42.1875C16.5625 42.7053 16.9822 43.125 17.5 43.125C18.0178 43.125 18.4375 42.7053 18.4375 42.1875C18.4375 41.6697 18.0178 41.25 17.5 41.25Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M22.8125 49.375C22.2947 49.375 21.875 49.7947 21.875 50.3125C21.875 50.8303 22.2947 51.25 22.8125 51.25C23.3303 51.25 23.75 50.8303 23.75 50.3125C23.75 49.7947 23.3303 49.375 22.8125 49.375Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M12.1875 49.375C11.6697 49.375 11.25 49.7947 11.25 50.3125C11.25 50.8303 11.6697 51.25 12.1875 51.25C12.7053 51.25 13.125 50.8303 13.125 50.3125C13.125 49.7947 12.7053 49.375 12.1875 49.375Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M12.1875 43.75C11.6697 43.75 11.25 44.1697 11.25 44.6875C11.25 45.2053 11.6697 45.625 12.1875 45.625C12.7053 45.625 13.125 45.2053 13.125 44.6875C13.125 44.1697 12.7053 43.75 12.1875 43.75Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M22.8125 43.75C22.2947 43.75 21.875 44.1697 21.875 44.6875C21.875 45.2053 22.2947 45.625 22.8125 45.625C23.3303 45.625 23.75 45.2053 23.75 44.6875C23.75 44.1697 23.3303 43.75 22.8125 43.75Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 48.9062L16.25 48.2031V46.7969L17.5 46.0938L18.75 46.7969V48.2031L17.5 48.9062Z"
          stroke="#FDB600"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
};
export const LegalAdvisoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="65"
      viewBox="0 0 60 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50 32.5V19.7268C50 15.4409 50 13.298 49.33 11.5865C48.2533 8.83497 45.9755 6.66463 43.088 5.63838C41.292 5 39.0433 5 34.5455 5C26.6745 5 22.7391 5 19.5959 6.11715C14.5428 7.91307 10.557 11.7112 8.67235 16.5263C7.5 19.5215 7.5 23.2716 7.5 30.772V37.2147C7.5 44.984 7.5 48.8685 9.61925 51.5662C10.2265 52.339 10.9466 53.0252 11.7577 53.604C12.6754 54.2585 13.724 54.701 15 55"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 30C7.5 25.3975 11.2309 21.6667 15.8333 21.6667C17.4978 21.6667 19.4601 21.9583 21.0784 21.5247C22.5163 21.1394 23.6394 20.0163 24.0247 18.5784C24.4583 16.9601 24.1667 14.9978 24.1667 13.3333C24.1667 8.73095 27.8977 5 32.5 5"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.g
        animate={{ rotate: [0, 45] }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <path
          d="M32.6768 33.1595L37.1048 58.2721M37.1048 58.2721L32.6731 59.0535M37.1048 58.2721L41.5364 57.4907"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.0556 42.633L43.0602 35.8981L40.6695 43.9353"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.852 46.0191L23.8566 39.2842L21.4659 47.3214"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.6408 39.6749L23.1892 39.4019C25.0556 39.0728 26.7286 37.9721 27.9331 36.2807C30.414 32.797 34.6796 32.0448 38.2024 34.47C39.9128 35.6473 41.8613 36.1095 43.7278 35.7804L45.2762 35.5074"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.4045 49.193C47.4057 48.8401 48.9312 47.3013 49.5158 45.3226C49.8312 44.2546 49.989 43.7206 49.4209 43.1066C48.8528 42.4924 48.1147 42.6225 46.6386 42.8828L42.0867 43.6855C40.6105 43.9457 39.8725 44.0759 39.5487 44.8473C39.2248 45.6186 39.5557 46.0664 40.2174 46.9622C41.4435 48.6216 43.4033 49.5459 45.4045 49.193Z"
          stroke="#FDB600"
          strokeWidth="1.5"
        />
        <path
          d="M26.2004 52.5791C28.2016 52.2262 29.7271 50.6874 30.3117 48.7087C30.6271 47.6407 30.7849 47.1067 30.2168 46.4927C29.6487 45.8785 28.9106 46.0087 27.4345 46.2689L22.8825 47.0716C21.4064 47.3319 20.6684 47.462 20.3446 48.2334C20.0208 49.0047 20.3516 49.4525 21.0133 50.3483C22.2394 52.0077 24.1992 52.932 26.2004 52.5791Z"
          stroke="#FDB600"
          strokeWidth="1.5"
        />
        <path
          d="M34.502 30.553C34.7178 31.7768 33.9006 32.9437 32.6769 33.1595C31.4532 33.3753 30.2862 32.5582 30.0704 31.3344C29.8546 30.1106 30.6718 28.9437 31.8955 28.7279C33.1192 28.5121 34.2862 29.3292 34.502 30.553Z"
          stroke="#FDB600"
          strokeWidth="1.5"
        />
      </motion.g>
    </svg>
  );
};
export const ContactDate = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 2.6665V5.33317M8 2.6665V5.33317"
        stroke="#00FFD9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 22.6668L13.3333 17.7964C13.3333 17.5408 13.151 17.3335 12.9261 17.3335H12M18.1729 22.6668L19.9789 17.7991C20.0633 17.5715 19.8837 17.3335 19.6276 17.3335H17.3333"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.3335 16.3243C3.3335 10.5146 3.3335 7.60971 5.00299 5.80485C6.67248 4 9.35948 4 14.7335 4H17.2668C22.6408 4 25.3279 4 26.9974 5.80485C28.6668 7.60971 28.6668 10.5146 28.6668 16.3243V17.0091C28.6668 22.8188 28.6668 25.7236 26.9974 27.5285C25.3279 29.3333 22.6408 29.3333 17.2668 29.3333H14.7335C9.35948 29.3333 6.67248 29.3333 5.00299 27.5285C3.3335 25.7236 3.3335 22.8188 3.3335 17.0091V16.3243Z"
        stroke="#00FFD9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.6665H24"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RegulatoryIcon = (props: SVGMotionProps<SVGSVGElement>) => {
  return (
    
    <motion.svg
      animate={{ x: [1, 0] }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 0.3,
      }}
      width="63"
      height="65"
      viewBox="0 0 63 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49.3754 27.5V25C49.3754 15.5719 49.3754 10.8579 46.4464 7.92892C43.5174 5 38.8034 5 29.3754 5H26.8756C17.4476 5 12.7335 5 9.80461 7.9289C6.87569 10.8578 6.87564 15.5718 6.87556 24.9998L6.87549 35C6.87539 44.428 6.87536 49.142 9.80419 52.071C12.7331 54.9997 17.4473 55 26.8754 55"
        stroke="#006C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1255 17.5H38.1254M18.1255 30H38.1254"
        stroke="#00914B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />{" "}
      <path
        d="M59.4729 48.3203C60.0024 44.8743 60.2672 43.1514 59.6157 41.6241C58.9643 40.0967 57.519 39.0516 54.6283 36.9616L52.4685 35.4C48.8726 32.8 47.0747 31.5 45 31.5C42.9253 31.5 41.1274 32.8 37.5315 35.4L35.3717 36.9616C32.481 39.0516 31.0358 40.0967 30.3843 41.6241C29.7329 43.1514 29.9976 44.8743 30.5271 48.3203L30.9786 51.2586C31.7293 56.1434 32.1046 58.5858 33.8565 60.0429C35.6083 61.5 38.1695 61.5 43.2918 61.5H46.7082C51.8305 61.5 54.3916 61.5 56.1435 60.0429C57.8954 58.5858 58.2707 56.1434 59.0214 51.2586L59.4729 48.3203Z"
        stroke="#FDB600"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <motion.g
        animate={{ rotate: [0, -45] }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {" "}
        <path
          d="M46.125 48.375C44.3448 50.1552 42 51.9644 42 51.9644L38.7856 48.75C38.7856 48.75 40.5948 46.4052 42.375 44.625C44.1552 42.8448 46.5 41.0357 46.5 41.0357L49.7143 44.25C49.7143 44.25 47.9052 46.5948 46.125 48.375ZM46.125 48.375L51.75 54M38.25 48.2144L42.5356 52.5M45.9644 40.5L50.25 44.7856"
          stroke="#FDB600"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
