import { BackIcon } from "@/components/icons/Others";
import styles from "../Blogs.module.css";
import Image from "next/image";
import { NumberedText, TopText } from "../Helpers";
const CryptoCurrency = () => {
  return (
    <div className="p-[4rem]">
      <div className="flex text-grey4C items-center gap-2">
        <BackIcon />
        <p>Go Back</p>
      </div>
      <h1 className={`${styles.TopHeader} font-raleway text-dark38`}>
        Cryptocurrency: Where do the Regulations Tilt?
      </h1>
      <div className="w-full  relative h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/crypto-1.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <div>
        <TopText text="INTRODUCTION" />
        <p className={`${styles.Text}`}>
          On July 14th, 2023, data analysis indicated that the price of Bitcoin,
          the pioneering cryptocurrency, was steadily approaching $130,000 and
          possibly even higher. This surge in value was attributed to an
          increasing demand for Bitcoin. Additionally, other cryptocurrencies
          like Ethereum and Dai were also experiencing a gradual appreciation in
          their worth. As a result of the growing popularity and adoption of
          cryptocurrencies, regulatory bodies worldwide have recognized the need
          to closely scrutinize the cryptocurrency industry. The inherent risks
          associated with cryptocurrencies, such as money laundering, financing
          of terrorism, cybercrimes, scams, frauds, and hacking attacks, have
          necessitated the implementation of regulations to safeguard investors
          and the public. Despite these risks, many governments and regulatory
          bodies acknowledge the potential benefits that cryptocurrency
          innovation holds for national economies and the global financial
          landscape. This recognition has motivated them to explore ways to
          facilitate the mass adoption of cryptocurrencies while ensuring
          appropriate measures are in place to mitigate potential harms. The
          soaring price of Bitcoin and the increasing value of other
          cryptocurrencies highlight the importance of regulatory oversight in
          the industry. Striking a balance between fostering innovation and
          protecting consumers and investors remains a key objective for
          regulatory bodies as they navigate the complexities of the
          cryptocurrency landscape.
        </p>
      </div>
      <div>
        <TopText text="CRYPTOCURRENCY" />
        <p className={`${styles.Text}`}>
          {`
            The Financial Task Force (FATF) offers a comprehensive definition of
            cryptocurrency, describing it as a math-based, decentralized
            convertible virtual currency that relies on cryptographic principles
            to function as a secure and distributed information economy. In
            simpler terms, cryptocurrency can be understood as decentralized
            digital money that operates without the need for a central
            intermediary and is secured through cryptography, making it
            extremely difficult to counterfeit or engage in double-spending.
            Cryptocurrency transactions involve the use of public and private
            keys. These keys enable the transfer of value from one individual or
            entity to another, with each transaction cryptographically signed to
            ensure its security. The safety, integrity, and balance of
            cryptocurrency ledgers are maintained by a network of miners. These
            miners protect the network and, in return, have the opportunity to
            receive a "block reward" and sometimes transaction fees, which serve
            as an incentive for them to include users' transactions in the next
            block. The pioneer of cryptocurrencies was Bitcoin, which was
            launched in 2009. Since then, numerous cryptocurrencies have been
            introduced, each with its unique features and characteristics. As
            cryptocurrencies continue to gain popularity and attract attention
            from various sectors, regulatory bodies such as the FATF play an
            essential role in understanding and developing frameworks to address
            the risks and opportunities associated with this evolving digital
            asset class.`}
        </p>
      </div>
      <div>
        <TopText text="TYPES OF CRYPTOCURRENCY" />
        <p>
          The prominent types of Cryptocurrency include; Security tokens, NFTs,
          Stable Coins, Utility coins, Asset-backed tokens, Decentralized
          finance tokens, and Privacy tokens.
        </p>
        <NumberedText text="1. Security Tokens" />
        <p>
          A security token is a digital representation of traditional
          securities, such as stocks, shares, bonds, and futures, that operates
          on a blockchain system. This tokenization process involves converting
          the underlying asset&apos;s details into cryptographic form and then
          recording it on the blockchain. Three main types of traditional
          securities can be tokenized:{" "}
        </p>
        <ol>
          <li>
            Equities: These represent ownership in a company and entitle the
            holders to a share of the company&apos;s profits and assets.
          </li>
          <li>
            Debt: Debt securities, such as bonds, represent loans made by
            investors to a company or government entity. The issuer promises to
            repay the principal amount along with periodic interest payments.
          </li>
          <li>
            Hybrid: Some securities can have characteristics of both equities
            and debt, creating hybrid securities that offer a mix of ownership
            and fixed income features
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CryptoCurrency;
