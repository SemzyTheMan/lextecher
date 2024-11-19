"use client";

import Image from "next/image";
import { GoBack, TopText } from "../Helpers";
import styles from "../Blogs.module.css";
const LegalOpinions = () => {
  return (
    <section className="p-5 md:p-[4rem]">
      <GoBack />
      <h1 className={`${styles.TopHeader} font-raleway text-dark38`}>
        Legal Opinion on the use of Humanoid Robotics in Amazon US Warehouses
      </h1>
      <div className="w-full mb-[3rem]  relative h-[11.3rem] md:h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/opinion-1.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <p className={`${styles.Text}`}>
        Robots are increasingly being utilized to perform Human roles worldwide;
        hence, the growing concern for workplace safety particularly by human
        workers in Amazon warehouses.
        <br />
        <br />
        According to U.S Occupational Safety and Health Administration (OSHA),
        industrial robots have the potential to introduce new hazards while
        performing dangerous tasks.
      </p>
      <TopText text="THE TORT OF NEGLIGENCE AND EMPLOYER’S LIABILITY" />
      <p className={`${styles.Text}`}>
        In the case of Donoghue v. Stevenson, Lord Atkin gave an elaborate
        explanation of negligence, using the neighbourhood principle where he
        noted that one must take reasonable care to avoid acts or omissions
        which one can reasonably foresee would be likely to injure one&apos;s
        neighbour.
        <br />
        For a case of negligence to be established, there must be a duty of care
        owed, the duty of care must have been breached and the claimant must
        have suffered damage, and there must be a causal link between the breach
        and the latter&apos;s damage.
        <br />
        Employers owe a duty of care to provide safe systems and conditions of
        work, safety equipment and materials to prevent their employees from
        suffering one harm or the other. Where a breach of this duty causes harm
        to an employee, an employer may be liable for negligence, with the
        result that the latter will be made to pay damages to the former.
        <br />
        <br />
        The Occupational Safety and Health Act of 1970 imposes a primary duty on
        US employers in section 5(1)(a) to provide a workplace that is free from
        recognized hazards likely to cause death or serious physical
        harm.  Therefore, companies are advised to comply with the OSH Act to
        provide a safe system of work by taking precautionary measures such as:
        <br />
        <br />
      </p>
      <ul className={`${styles.UnorderedListContainer} ${styles.NoPadding}`}>
        <li>Conducting risk assessments. </li>
        <li>Providing adequate training, </li>
        <li>
          Implementing safety measures such as barriers and emergency stop
          systems 
        </li>
        <li>
          Ensuring regular maintenance and monitoring of the robotic system. 
        </li>
        <li>Insurance packages  </li>
      </ul>
      <div className="w-full mt-[3rem] relative h-[11.3rem] md:h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/opinion-2.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <TopText
        text="THE LIABILITY OF ROBOTS FOR 
 TORTS COMMITTED IN THE WORKPLACE"
      />
      <p className={`${styles.Text}`}>
        Currently, Robots can not be held liable for tortious actions, because
        they lack legal personality. Legal scholars suggest granting robots
        legal personhood to address liability issues. The European Parliament
        proposes &quot;electronic personhood&quot; for autonomous robots,
        combining natural and legal personhood. Liability for robot actions can
        also be resolved through prior contracts between employers and
        employees.
        <br />
        <br />
        The continuous use of robots poses a great threat to employees&apos; job
        security. With this innovation, some employees&apos; roles will become
        redundant and lead to termination of their employment.  
        <br />
        In the US, there is no specific law on liability for severance pay. It
        is usually inserted in the parties&apos; employment agreement. Where
        this is the case, severance pay or packages should be available. The
        Worker Adjustment and Retraining Notification Act (WARN Act) 1988 only
        imposes a single duty on an employer with hundred or more employees, to
        provide sixty days&apos; notice to employees affected by a qualifying
        termination event.  <br />
        <br />
        It is commendable that Amazon has a track record of providing severance
        packages for laid-off employees. Thus, Amazon is expected to continually
        comply with the severance pay clause in their employment agreements, to
        prevent a case of liability for breach of contract. 
        <br />
        Conclusively, companies are advised to take into cognizance the possible
        legal liabilities that may be incurred with the use of robots. 
      </p>
    </section>
  );
};

export default LegalOpinions;
