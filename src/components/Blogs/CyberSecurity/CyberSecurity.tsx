"use client";
import { GoBack, TopText } from "../Helpers";
import styles from "../Blogs.module.css";
import Image from "next/image";
const CyberSecurity = () => {
  return (
    <section className="p-5 md:p-[4rem]">
      <GoBack />
      <h1 className={`${styles.TopHeader} font-raleway text-dark38`}>
        How does Cyber Security relate to Data Privacy
      </h1>
      <div className="w-full  relative h-[11.3rem] md:h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/cyber-1.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <TopText text="THE CONNECTION" />
      <ul className={`${styles.UnorderedListContainer} ${styles.NoPadding}`}>
        <li>
          The strong connection between cybersecurity and data privacy is
          evident, with cybersecurity protecting against unauthorized access and
          data privacy ensuring control over personal information.
        </li>
        <li>
          Integrating data protection and cybersecurity is vital for a
          comprehensive strategy for safeguarding data. This synergy enhances
          cybersecurity effectiveness, preventing unauthorized access—a common
          entry point for major breaches.{" "}
        </li>
        <li>
          The intrinsic link between privacy and security is emphasized by
          privacy regulations mandating businesses to secure personal
          information. Failure to protect privacy results in severe penalties,
          damages consumer confidence, and harms a brand&apos;s reputation. The
          evolving threat landscape underscores the importance of a robust
          relationship between privacy and security within enterprises.
        </li>
      </ul>
      <TopText text="THE ESSENCE OF THE CONNECTION" />
      <p className={`${styles.Text}`}>
        Data is considered a commodity online and offline by both legal and
        illegal actors. For this reason, data is a primary target of
        cybercriminals. Data also plays an integral role in the commission of
        many cybercrimes, primarily because it is not adequately protected and
        can be illicitly accessed and obtained.
        <br />
        Data breaches have resulted from lost or stolen encrypted flash drives
        and other storage devices (mainly laptop and smartphones), poor system
        and data security, unauthorized access to the database or the exceeding
        of authorized access to a database, and accidental disclosure, release
        or publication of data.
        <br />
        <br />
        Cybercrime violates individuals&apos; privacy and the security of their
        data, particularly hacking, malware, identity theft, financial fraud,
        medical fraud, and certain offenses against persons that involve the
        revealing of personal information, messages, images, video and audio
        recordings without individuals&apos; consent or permission (e.g.
        cyberstalking, cyberharassment, and cyberbullying
      </p>
      <TopText text="WHAT IS DATA PROTECTION?" />
      <p className={`${styles.Text}`}>
        Data protection encompasses three main aspects: customary data
        protection (including backup and restore functions), data security, and
        data privacy. The methods and technologies constituting data protection
        mechanisms aim to secure data while considering the relationship with
        technology, public opinion, and legal circumstances.
      </p>
      <TopText
        text={"How to Secure Data through the Tool of Cybersecurity?".toUpperCase()}
      />
      <ol className={`${styles.OrderedListContainer} ${styles.NoPadding}`}>
        <li>
          Cybersecurity tools, such as a VPN (virtual private network), can
          enhance privacy and security. For instance, a VPN acts as a secure
          tunnel for data, encrypting online activities to protect user privacy
          and providing a defense against potential security threats.
        </li>
        <li>
          Encryption and secure access controls are crucial for preserving data
          confidentiality, integrity, and availability in the digital era.
        </li>
        <li>
          Also, individuals have a burden to secure their data and minimize
          their digital footprint.
        </li>
      </ol>
      <div className="w-full mt-[3rem]  relative h-[11.3rem] md:h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/cyber-2.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <TopText text="The Extant Regulations" />
      <p className={`${styles.Text} italic`}>Laws regulating Cyber Security.</p>
      <p className={`${styles.Text}`}>
        The Budapest Convention on Cybercrime and the African Union Convention
        on Cyber Security and Personal Data Protection), In Nigeria, there is
        the Cybercrime Act 2015
      </p>
      <p className={`${styles.Text} italic mt-[2rem]`}>
        Laws regulating Data privacy and protection
      </p>
      <p className={`${styles.Text} mb-[2rem]`}>
        Article 12 of the Universal Declaration of Human Rights and Article 17
        of the International Covenant on Civil and Political Rights Which
        provide that no one shall be subjected to arbitrary or unlawful
        interference with his or her privacy, family, home or correspondence,
        nor to unlawful attacks on his or her honor and reputation.
        <br />
        <br />
        Other laws include the:
      </p>
      <ol className={`${styles.OrderedListContainer} ${styles.NoPadding}`}>
        <li>
          Data Protection Convention 108 (1980): It is mentioned as having
          significant influence, with African countries acceding to it and
          contributing to its global status.
        </li>
        <li>
          EU Data Protection Directive (DPD, 1995): It is described as
          aspirational, with Africa instruments perceiving it as a standard to
          emulate.
        </li>
        <li>
          EU General Data Protection Regulation (GDPR, 2016): Noted as another
          European influence, considered a standard for emulation in African
          instruments.
        </li>
        <li>
          Convention 108+ (2018): It is part of the third generation of European
          instruments, alongside GDPR.
        </li>
        <li>
          African Union&apos;s Data Protection and Cybercrime Convention (2014):
          It has limited influence since it is not in force.
        </li>
        <li>
          ECOWAS Supplementary Act (2010): It has considerable practical
          influence in West Africa.
        </li>
        <li>
          SADC Model Law (2013): Part of the HIPPSA &apos;Model Acts&apos; with
          higher standards, noted as having potential influence in sub-Saharan
          Africa.
        </li>
      </ol>
      <p className={`${styles.Text} mt-[2rem]`}>
        In Nigeria the laws regulating Data privacy and cyber security include:
        the 1999 Constitution of the Federal Republic of Nigeria and the
        Nigerian Data Privacy Act 2023.
      </p>
    </section>
  );
};

export default CyberSecurity;
