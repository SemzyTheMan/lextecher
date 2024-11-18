import Image from "next/image";
import { NumberedText, TopText } from "../Helpers";
import styles from "../Blogs.module.css";
const CrypytoCurrency2 = () => {
  return (
    <div>
      <div>
        <div className="w-full  relative h-[34.75rem] rounded-[1.25rem]">
          <Image
            src="/images/crypto-7.jpeg"
            className="rounded-[1.25rem]"
            alt="online-header"
            fill
          />
        </div>
        <TopText
          text="THE FATF RECOMMENDATIONS ON  VIRTUAL ASSET SERVICE PROVIDERS (VASPs) 
"
        />
        <p className={`${styles.Text}`}>
          As stated in the FATF Glossary, a “virtual asset service provider” is
          any natural or legal person who is not covered elsewhere under the
          recommendations and as a business conducts one or more of the
          following activities or operations for or on behalf of another natural
          or legal person:
          <br />
          <br /> i. Exchange between virtual assets and fiat currencies; <br />{" "}
          ii. Exchange between one or more forms of virtual assets;
          <br /> iii. Transfer of virtual assets;
          <br /> iv. Safekeeping and/or administration of virtual assets or
          instruments enabling control over virtual assets; and <br />
          v. Participation in and provision of financial services related to an
          issuer’s offer and/or sale of a virtual asset. <br />
          <br />
          The obligations in the FATF Standards are based on the underlying
          financial services offered without regard to an entity’s operational
          model, technological tools, ledger design, or any other operating
          feature. However, the definition above is to be applied based on an
          assessment of whether the entity in question provides a qualifying
          service, not on the terms themselves. Thus, jurisdictions have to
          apply the definition that is the most appropriate, based on an
          understanding of the conceptual foundations of each definition. FATF
          also pointed out that DeFi applications (i.e. the software program)
          are not a VASP under the FATF standards, as the Standards do not apply
          to underlying software or technology. The FATF definition of VASP is
          intended to cover activities related to Initial coins offerings
          (ICOs), ICOs are generally a means to raise funds for new projects
          from early backers. Number five of the VASPs list above particularly
          covers persons that participate in, or provide related financial
          services to, issuers’ offer and/or sale of VAs through activities such
          as ICOs.{" "}
        </p>
        <p className="text-green64 font-bold pt-[3rem]">
          Elements relating to VASPs
        </p>
        <ol className={`${styles.OrderedListContainer}`}>
          <li>
            <span>Number and Types of VASPs:</span> By evaluating the number and
            types of VASPs based in a jurisdiction and the services they offer,
            as well as the number and amount of transactions related to each
            service.
          </li>
          <li>
            <span>Sophistication of AML/CFT Program:</span> Assessing the
            effectiveness of the VASP&apos;s AML/CFT program, including
            oversight tools to monitor virtual asset and VASP activities and the
            expertise of individuals responsible for compliance.
          </li>
          <li>
            <span>Size and Type of User Base:</span> Understanding the size and
            type of the VASP&apos;s user base, including access to data on
            users&apos; activity and potential aggregation across platforms.
          </li>
          <li>
            <span>Nature and Scope of VASP Services:</span> Analyzing the nature
            and scope of the VA account, product, or service offered by the
            VASP, including any potential parameters or measures to lower
            exposure to risk.
          </li>
          <li>
            <span>Online vs. In-Person Operations:</span> Distinguishing between
            VASPs that operate entirely online (platform-based exchanges) and
            those that operate in person (facilitating transactions between
            individual users or kiosk-based exchanges).
          </li>
          <li>
            <span>Connections and Links to Jurisdictions:</span> Evaluating the
            ML/TF and sanctions risks associated with the VASP&apos;s
            connections and links to different jurisdictions.
          </li>
          <li>
            <span>Implementation of Travel Rule:</span> Assessing whether the
            VASP implements the &quot;travel rule&quot; effectively and
            mitigates the &quot;sunrise issue&quot; related to funds transfers.
          </li>
          <li>
            <span>Transactions with Non-Obliged Entities:</span> Considering
            transactions with non obliged entities, such as unhosted wallets
            with no obligated entity or VASPs in jurisdictions without
            regulation and supervision.
          </li>
          <li>
            <span>Types of Virtual Assets Offered:</span> Examining the specific
            types of virtual assets offered by the VASP and any unique features,
            such as anonymity-enhancing features or other high-risk
            characteristics.
          </li>
          <li>
            <span>VASPs&apos; Interaction with Smart Contracts:</span>{" "}
            Considering how VASPs interact with or manage smart contracts used
            for conducting transactions.
          </li>
        </ol>
        <p className={`mt-4 ${styles.Text}`}>
          FATF emphasizes that countries should understand the money laundering
          and terrorist financing risks associated with virtual assets when
          deciding whether to prohibit or limit VA activities of VASPs.
          Additionally, countries should ensure they have the technical capacity
          and resources to enforce such prohibitions or limitations effectively.
          By taking these elements into account, jurisdictions can better assess
          the risks posed by VASPs and implement appropriate AML/CFT measures to
          safeguard the integrity of the financial system and protect against
          illicit activities related to virtual assets.
        </p>
        <TopText text="FATF RECOMMENDATION ON STABLE  COINS" />
        <p className={`${styles.Text}`}>
          Stablecoins, which aim to maintain a stable value relative to
          reference assets, share similar ML/TF risks with other virtual assets
          (VAs) due to factors like potential anonymity, global reach, and their
          use in layering illicit funds. Additionally, certain stablecoin
          projects might have greater potential for mass adoption, which can
          heighten ML/TF risks. Stablecoins pose ML/TF risks due to factors such
          as potential anonymity, their global reach, and the potential for
          illicit funds to be layered through their use. Mass adoption of a
          stablecoin can increase its potential as a means of exchange, making
          it more attractive to criminals. If a stablecoin achieves widespread
          global adoption and is used as a medium of exchange and store of value
          without the involvement of Virtual Asset Service Providers (VASPs) or
          other obliged entities, it may lack or have insufficient AML/CFT
          controls.
          <br />
          <br /> Countries, VASPs, and other obliged entities have a general
          obligation under the FATF Standards to assess ML/TF risks associated
          with stablecoins. This assessment should occur before and after the
          stablecoin&apos;s launch, and it should be an ongoing and
          forward-looking process. It is crucial for stakeholders to take
          appropriate measures to manage and mitigate the ML/TF risks associated
          with stablecoins. This includes implementing effective AML/CFT
          controls and compliance measures. Given the potential risks posed by
          stablecoins, regulatory authorities and entities involved in the
          virtual asset ecosystem should be proactive in understanding and
          addressing these risks. By conducting thorough risk assessments and
          implementing robust compliance measures, they can contribute to a
          safer and more secure environment for the use of stablecoins and other
          virtual assets.
        </p>
        <TopText text="FATF RECOMMENDATION ON PEER-TO PEER (P2P) TRANSACTIONS" />
        <p className={`${styles.Text}`}>
          The FATF defines peer-to-peer (P2P) transactions in the context of
          virtual assets (VAs) and the specific ML/TF risks associated with
          them. P2P transactions involve VA transfers conducted directly between
          two wallets without the involvement of Virtual Asset Service Providers
          (VASPs) or other obliged entities. While P2P transactions are not
          explicitly subject to AML/CFT controls under the FATF Standards, they
          can pose certain risks, especially concerning the potential to evade
          AML/CFT regulations. P2P transactions do not fall under the direct
          obligations of AML/CFT controls as the FATF Standards primarily focus
          on intermediaries and obliged entities. However, the FATF acknowledges
          that P2P transactions can pose specific ML/TF risks due to their
          potential to circumvent AML/CFT regulations. FATF recommends that
          ML/TF risks related to P2P transactions should be monitored on an
          ongoing and forward-looking basis. Understanding the risk profiles of
          different types of P2P transactions and their drivers can help
          authorities and entities better assess and mitigate these risks.
          <br />
          <br />
          Several factors can influence the extent to which users engage in P2P
          transactions with VAs. These factors may include the VA&apos;s
          accessibility, privacy protocols, transparency, security features, and
          associated transaction fees. For instance, if a VA provides strong
          anonymity-enhancing technologies, it could increase the risk of P2P
          transactions being used for illicit purposes. P2P transactions
          conducted on public ledgers can provide valuable information for
          financial analysis and law enforcement investigations. However, the
          effectiveness of such visibility might be affected if
          anonymity-enhancing protocols and technologies are associated with the
          VA. Overall, while P2P transactions are not subject to direct AML/CFT
          controls, it is essential for countries and VASPs to be aware of the
          potential risks they pose. By monitoring these risks and understanding
          the drivers behind P2P transactions, regulatory authorities can
          develop targeted measures to address and mitigate the potential misuse
          of VAs for illicit activities through P2P channels.
        </p>
        <TopText text="THE FATF CRYPTO TRAVEL RULES" />
        <p className={`${styles.Text}`}>
          The ‘Travel Rule’ aims to bring the emerging crypto sector into
          compliance with anti money laundering (AML) and counter-terrorism
          financing (CFT) regulations, similar to traditional financial
          institutions. The Travel Rule requires Virtual Asset Service Providers
          (VASPs) to exchange transactional data related to digital fund
          transfers, including customer ID numbers, transaction dates, and the
          location of the asset creator and beneficiaries. This information
          exchange is crucial for establishing effective AML and CFT policies.
          VASPs are required to obtain, hold, and exchange information about the
          originators and beneficiaries of virtual asset transfers. This data
          sharing enables financial institutions and beneficiaries to conduct
          sanctions screening and detect suspicious transactions. The FATF
          recognizes the importance of data protection and privacy issues in
          Travel Rule implementation. VASPs should consider the robustness of
          counter-party data security controls when exchanging data. The data to
          be transmitted back and forth by VASPs typically includes the names,
          addresses, and account numbers of both the sender and the recipient.
          <br />
          <br />
          The major challenge of the FATF Crypto Travel Rule is the non-uniform
          implementation across various jurisdictions, known as the
          &quot;Sunrise Problem.&quot; Different countries may have varying
          requirements and timelines for adopting and enforcing the Travel Rule,
          which can create compliance challenges for VASPs operating in multiple
          jurisdictions. To ensure effective implementation of the Travel Rule
          and to address the challenges of non-uniformity, international
          cooperation and coordination among regulatory authorities and VASPs
          are essential. Efforts to harmonize regulations and establish common
          standards for data exchange will help create a more consistent and
          compliant environment within the cryptocurrency industry.
        </p>
      </div>
      <div className="w-full relative h-[34.75rem] mt-[3rem] rounded-[1.25rem]">
        <Image
          src="/images/crypto-8.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <TopText text="THE FATF UPDATED GUIDANCE FOR A RISK-BASED APPROACH TO VIRTUAL ASSETS AND VIRTUAL ASSET SERVICE PROVIDERS" />
      <ol className={`${styles.OrderedListContainer}`}>
        <li>
          <span>Activities-Based AML/CFT Requirements:</span> The FATF
          Guidelines require all jurisdictions to impose specific
          activities-based anti-money laundering and counter terrorism financing
          (AML/CFT) requirements on financial institutions (FIs), designated
          non-financial businesses and professions (DNFBPs), and VASPs. It is
          essential to ensure compliance with these obligations.
        </li>
        <li>
          <span>Inclusion of VAs in Funds-Based Terms:</span> The FATF has
          clarified that funds or value based terms in the FATF Recommendations,
          such as &quot;property,&quot; &quot;proceeds,&quot; &quot;funds,&quot;
          and &quot;other assets,&quot; include VAs. As a result, all relevant
          measures under the FATF Recommendations should be applied to VAs.
        </li>
        <li>
          <span>Central Bank-Issued Digital Currencies:</span> The Guidance does
          not cover CBDCs, as they are considered digital representations of
          fiat currencies. However, FATF recommends addressing ML/TF risks
          associated with CBDCs before their launch.
        </li>
        <li>
          <span>Risk-Based Approach (RBA):</span> An effective RBA should
          consider the nature, diversity, and maturity of the VASP sector in a
          country, as well as the risk profile of individual VASPs and the legal
          and regulatory framework. The global reach and cross-border nature of
          most VA activities should also be taken into account.
        </li>
        <li>
          <span>National Context and Risk Assessment:</span> National
          authorities should consider their own supervisory approach, legal
          framework, and the risks present in their jurisdiction when applying
          the general principles outlined in the Guidance.
        </li>
        <li>
          <span>Enhanced Anonymity Activities:</span> Jurisdictions should
          consider the cross-border nature and potentially enhanced anonymity of
          VA activities involving no obliged entity. The quality and
          implementation of regulatory and supervisory frameworks by VASPs also
          influence the overall risks associated with covered VA activities.
        </li>
        <li>
          <span>Residual Risk and Appropriate Solutions:</span> Despite
          implementing measures, there may still be some residual risk
          associated with VAs and VASP activities. Competent authorities and
          VASPs should consider this when devising appropriate solutions.
        </li>
        <li>
          <span>Individual Examination by Jurisdictions:</span> Each
          jurisdiction should individually examine VAs and VASP activities
          within the context of its financial sector, regulatory and supervisory
          systems, and overall risk assessment.
        </li>
      </ol>
      <TopText text="INTERNATIONAL ORGANIZATION OF  SECURITIES COMMISSIONS (IOSCO)" />
      <NumberedText
        className="pt-0"
        text="ISSUES, RISKS AND REGULATORY CONSIDERATIONS  RELATING TO CRYPTO-ASSET TRADING PLATFORMS"
      />
      <p className={`${styles.Text}`}>
        The IOSCO has the core objective of protecting investors and ensuring
        that the markets are fair, efficient and transparent. The IOSCO applies
        when a regulatory authority has determined that a crypto-asset or an
        activity involving a crypto-asset falls within its jurisdiction, IOSCO’s
        Objectives and Principles of Securities Regulation (IOSCO Principles)
        and the Assessment Methodology (the Methodology)  provide useful
        guidance. 
        <br />
        <br />
      </p>
      <div className="mb-[3rem]">
        <h2 className="text-grey54 font-bold">
          IOSCO provides the following principle for issuers: 
        </h2>
         {" "}
        <ol className={`${styles.OrderedListContainer}`}>
          <li className="!py-0">
            Full, timely, and accurate disclosure of financial results and
            material information to investors.
          </li>
          <li className="!py-0">
            Fair and equitable treatment of holders of securities in a company.
          </li>
          <li className="!py-0">
            High and internationally acceptable accounting and auditing
            standards.
          </li>
          <li className="!py-0">
            Setting standards for the eligibility and regulation of collective
            investment scheme operators.
          </li>
          <li className="!py-0">
            Rules governing the legal form, structure, and protection of client
            assets for collective investment schemes.
          </li>
          <li className="!py-0">
            Disclosure necessary to evaluate the suitability of a collective
            investment scheme for an investor and the value of the
            investor&apos;s interest.
          </li>
          <li className="!py-0">
            Proper and disclosed basis for asset valuation, pricing, and
            redemption of units in a collective investment scheme.
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-grey54 font-bold">
          IOSCO also recommends that Market Intermediaries Regulations provide:
        </h2>{" "}
         
        <ol className={`${styles.OrderedListContainer}`}>
          <li className={`!py-0`}>
            Minimum entry standards for market intermediaries.
          </li>
          <li className={`!py-0`}>
            Initial and ongoing capital and prudential requirements reflecting
            the risks intermediaries undertake.
          </li>
          <li className={`!py-0`}>
            Compliance with standards for internal organization and operational
            conduct to protect clients&apos; interests and manage risk.
          </li>
        </ol>
      </div>
      <div className="my-[3rem]">
        <h2 className="text-grey54 font-bold">
          IOSCO recommends that the principles for the Secondary Market include:{" "}
        </h2>
         {" "}
        <ol className={`${styles.OrderedListContainer}`}>
          <li className={`!py-0`}>
            Regulatory authorization and oversight of trading systems, including
            securities exchanges.
          </li>
          <li className={`!py-0`}>
            Ongoing regulatory supervision of exchanges to maintain the
            integrity of trading through fair and equitable rules.
          </li>
          <li className={`!py-0`}>Promotion of transparency in trading.</li>
          <li className={`!py-0`}>
            Detection and deterrence of manipulation and unfair trading
            practices.
          </li>
          <li className={`!py-0`}>
            Proper management of large exposures, default risk, and market
            disruption.
          </li>
          <li className={`!py-0`}>
            Regulatory oversight of systems for clearing and settlement of
            securities transactions to ensure fairness, effectiveness,
            efficiency, and reduced systemic risk.
          </li>
        </ol>
      </div>
      <div>
        <p className={`${styles.Text}`}>
          The IOSCO principles provide valuable guidance to regulatory
          authorities when considering the unique challenges and risks
          associated with the crypto-asset market. They are designed to
          safeguard investors, promote transparency, and ensure the integrity
          and stability of the financial markets.
        </p>
      </div>
      <TopText text="ORGANIZATION FOR ECONOMIC CO OPERATION AND DEVELOPMENT  (OECD)" />
      <p className={`${styles.Text}`}>
        The OECD has identified the Crypto-Asset market as a significant risk to
        global tax transparency due to the lack of tax reporting and assessment
        requirements for users of Crypto-Assets. To address this, the OECD has
        developed the Crypto-Asset Reporting Framework (CARF), which aims to
        ensure the collection and exchange of information on transactions
        involving Relevant Crypto-Assets. OECD also proposed a means of
        implementation, to ensure the consistent domestic and international
        application of the CARF. The implementation means proposed consist of:
      </p>
      <ul className={`${styles.UnorderedListContainer}`}>
        <li>
          A framework of bilateral or multilateral competent authority
          agreements or arrangements for the automatic exchange of information
          collected under the CARF with jurisdiction(s) of residence of the
          Crypto-Asset Users, based on relevant tax treaties, tax information
          exchange agreements, or the Convention on Mutual Administrative
          Assistance in Tax Matters;
        </li>
        <li>
          IT-solutions to support the exchange of information, to ensure
          effective implementation of the CARF by Reporting Crypto-Asset Service
          Providers and participating jurisdictions.
        </li>
      </ul>
      <p className={`${styles.Text}`}>
        The OECD is also undertaking further technical work to elaborate the
        rules regarding Reportable Retail Payment Transactions, in line with the
        fast-evolving nature of crypto assets to ensure adequate tax reporting
        on Relevant Crypto-Assets used for the purchase of goods or services, in
        a manner that such elaborated rules can be applied simultaneously with
        its current rules in the CARF on Reportable Retail Payment Transactions.{" "}
      </p>
      <div>
        <NumberedText text="DEFINITION AND SCOPE OF CRYPTO-ASSETS TO BE  COVERED BY CARF" />
        <p className={`${styles.Text}`}>
          CARF defines Crypto-Asset as a digital representation of value that
          relies on a cryptographically secured distributed ledger or a similar
          technology. CARF also defines Relevant Crypto-Asset refers to any
          Crypto-Asset that is not a Central Bank Digital Currency, Specified
          Electronic Money Product, or any Crypto-Asset that cannot be used for
          payment or investment purposes. The definition of Crypto-Assets
          thereby targets those assets that can be held and transferred in a
          decentralised manner, without the intervention of traditional
          financial intermediaries, including stablecoins, derivatives issued in
          the form of a Crypto-Asset and certain non-fungible tokens (“NFTs”).
          The proposed definition also focuses on the use of cryptographically
          secured distributed ledger technology. The definition also includes a
          reference to “similar technology” to ensure it can include new
          technological developments that can emerge in the future and that
          operate in a functionally similar manner to Crypto Assets and raise
          similar tax risks.{" "}
        </p>
        <NumberedText text="CRYPTO ASSETS EXEMPTED" />
        <p className={`${styles.Text}`}>
          The reporting excludes three categories of Crypto-Assets that pose
          limited tax compliance risks, which include:
        </p>
        <ol className={`${styles.OrderedListContainer}`}>
          <li  className="!py-0">
            The Crypto-Assets which the Reporting Crypto-Asset Service Provider
            has adequately determined cannot be used for payment or investment
            purposes. This exclusion builds on the scope of the virtual asset
            definition of the Financial Action Task Force (“FATF”).
          </li>
          <li className="!py-0">Central Bank Digital Currencies.</li>
          <li className="!py-0">
            Specified Electronic Money Products that represent a single Fiat
            Currency and are redeemable at any time in the same Fiat Currency at
            par value as a regulatory matter, in addition to meeting certain
            other requirements.
          </li>
        </ol>
        <p className={`${styles.Text} mt-[3rem]`}>
          The definition of Relevant Crypto-Assets means that in most cases
          Relevant Crypto Assets covered under the CARF also fall within the
          scope of the FATF Recommendations, ensuring the due diligence
          requirements can, as far as possible, build on existing AML/KYC
          obligations.
          <br />
          It has been proposed that intermediaries and other service providers
          are in a position to collect and review the required documentation of
          their customers, including on the basis of AML/KYC documentation.
        </p>
        <NumberedText text="THE REQUIREMENTS REPORTING CONNECTIONS" />
        <p className={`${styles.Text}`}>
          Reporting Crypto-Asset Service Providers are subject to the CARF rules
          if they have a reporting connection to the jurisdiction implementing
          the CARF, which includes being tax resident, incorporated, organized,
          managed from having a regular place of business, or effectuating
          relevant transactions through a branch in the jurisdiction. The CARF
          also contains rules to avoid duplicative reporting in cases where a
          Reporting Crypto-Asset Service Provider has connection with more than
          one jurisdiction. In order to enhance the usability of the data for
          tax administrations, the reporting on Exchange Transactions is to be
          distinguished between Crypto-Asset-to- Crypto-Asset and
          Crypto-Asset-to-Fiat Currency transactions. Reporting Crypto-Asset
          Service Providers will also categorize Transfers by Transfer type
          (e.g. airdrops, income derived from staking, or a loan) in instances
          where they have such knowledge. Also, to increase visibility on
          Taxpayers’ holdings, CARF requires reporting of the number of units
          and the total value of transfers of Relevant Crypto-Assets effectuated
          by a Reporting Crypto-Asset Service Provider, on behalf of a Crypto-
          Asset User, to wallets not associated with a virtual asset service
          provider or a financial institution. The CARF also applies to certain
          instances where a Reporting Crypto-Asset Service Provider processes
          payment on behalf of a merchant accepting Relevant Crypto Assets in
          payment for goods or services, focusing on high-value transactions
          (i.e. Reportable Retail Payment Transactions).
        </p>
        <NumberedText text="THE REPORTABLE TRANSACTIONS UNDER CARF" />
        <p className={`${styles.Text}`}>
          The CARF identifies three types of reportable transactions:
          <br />
          1. Exchanges between Relevant Crypto-Assets and Fiat Currencies;
          <br />
          2. Exchanges between one or more forms of Relevant Crypto-Assets; and{" "}
          <br />
          3. Transfers (including Reportable Retail Payment Transactions) of
          Relevant Crypto-Assets. <br />
          <br />
          The CARF aims to enhance tax compliance and transparency in the
          Crypto-Asset market by facilitating the collection and exchange of
          information on Relevant Crypto Asset transactions, thus enabling tax
          authorities to effectively address tax evasion and other tax-related
          risks associated with Crypto-Assets.
        </p>
      </div>
    </div>
  );
};

export default CrypytoCurrency2;
