import { BackIcon } from "@/components/icons/Others";
import Image from "next/image";
import { TopText } from "../Helpers";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons/FooterIcons";
import styles from "../Blogs.module.css";

const OnlineHarrassment = () => {
  return (
    <div className="p-[4rem]">
      <div className="flex text-grey4C items-center gap-2">
        <BackIcon />
        <p>Go Back</p>
      </div>
      <h1 className={`${styles.TopHeader} font-raleway text-dark38`}>
        Online Harassment and Social Media: Understanding the Legal Implications
        & Reporting Mechanism in Nigeria
      </h1>
      <div className="w-full  relative h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/online-1.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <div>
        <TopText text="INTRODUCTION" />
        <p className={`${styles.Text}`}>
          Online harassment is a global menace that is constantly pervading the
          internet. It is a ravaging practice commonly reported amongst school
          children, teens and women. Due to the prevalence of online harassment,
          in the third quarter of 2023, Facebook had to take action on 8.3
          million pieces of bullying and harassment related content. Online
          harassment, also known as cyber bullying is largely caused by lack of
          empathy for others, online anonymity, desire for retaliation and lack
          of awareness of legal implications of cyberbullying amongst others.
          <br />
          <br />
          Many victims of cyberbullying suffer the consequences of cyberbullying
          emotionally, psychologically or physically. Online harassment in
          Nigeria has serious legal implications. Thus, it is a cybercrime that
          is punishable with fine or imprisonment. For an online harassment
          case, a victim is required to report to the appropriate quarters.
          <br />
          <br />
          Although, there are general harassment reporting mechanisms, social
          media platforms are responsible to put proper measures in place for
          effective reporting. To this end, virtually all the social networking
          applications have specific harassment policy and reporting mechanisms.
        </p>
      </div>

      <div>
        <TopText text="Describing Social Media and Online Harassment" />
        <p className={`${styles.Text}`}>
          Social media is a platform that gives room for communication and
          interactions among people for the purpose of creating, sharing and
          exchanging information and ideas. It involves the use of tools such as
          websites, blogs and applications to facilitate communication and
          social networking.
          <br />
          <br />
          Online harassment also known as cyberbullying or cyberstalking
          involves the use of social media tools by an individual or group of
          persons with the intent to hurt or cause harm to someone, who may lack
          the capacity to defend him/herself. It is usually done through
          threats, intimidation or embarrassment in an online setting.
        </p>
      </div>
      <div>
        <TopText text="Instances of Online Harassment" />
        <ul className={`${styles.ListContainer}`}>
          <li>
            Posting or sending rude/ violent messages or comments about a person
          </li>
          <li>
            Revealing personal details or identifying documents of a person
            without their consent.
          </li>
          <li>
            Discriminatory acts fueled by a victim’s race, religion, sexual
            orientation or philosophies.
          </li>
          <li>
            Disclosure of sensitive, private or embarrassing information e.g.
            posting sexual related content about a person without their consent
            especially with a view to blackmail or extort money from the victim.
          </li>
          <li>
            Hacking a person’s account to impersonate them especially for
            immoral or illegal activities.
          </li>
        </ul>
      </div>
      <div>
        <TopText text="Causes of Online Harassment" />
        <ul className={`${styles.ListContainer}`}>
          <li>
            <span>Insecurity of cyberbullies:</span> Many bullies are affected
            or driven by insecurity or low self-esteem. In most cases, they
            engage in these harmful activities to cause harm to another person
            while they are trying to distract others and themselves from things
            they privately feel insecure about.
          </li>
          <li>
            <span>Lack of empathy for others:</span>
            Most of these cyberbullies lack compassion and do not care about the
            implications of their actions on the victims either because of hate
            or revenge for wrong done to them.
          </li>
          <li>
            <span>Online anonymity:</span>
            Due to the anonymity and permanence of the internet, many
            cyberbullies are able to escape liability for their actions. This
            they do by hiding behind anonymous usernames.
          </li>
          <li>
            <span> Constant exposure to negative online content:</span>
            Excessive time on social media increases exposure to negative
            content, which cyberbullies try to mimic.
          </li>
          <li>
            <span> Retaliation:</span>
            Online harassment may occur as a form of retaliation for wrongdoings
            often arising from real-life conflicts or disagreements.
          </li>
          <li>
            <span>
              Lack of awareness of the legal implications of cyberbullying:
            </span>
            Most cyberbullies don’t know the legal liability they will incur for
            their actions and where they do, they bother less.
          </li>
        </ul>
      </div>
      <div className="w-full mt-[3rem] relative h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/online-2.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <div>
        <TopText text="Instances of Online Harassment" />
        <ul className={`${styles.ListContainer}`}>
          <li>
            <span>Emotional Distress: </span>
            This can take the form of anxiety and/or panic attacks, depression
            or feeling of powerlessness.
          </li>
          <li>
            <span>Psychological Effect: </span>
            Online harassment can lead to increased susceptibility to mental
            health disorders and conditions like post-traumatic stress disorder
            (PTSD).
          </li>
          <li>
            <span>Self-esteem Issues: </span>
            It can lower a person&apos;s self esteem, thereby leading to a
            negative self image and diminished confidence.
          </li>
          <li>
            <span>Social Isolation: </span>A victim may begin to withdraw from
            social interactions to avoid further harassment.
          </li>
          <li>
            <span>Physical Health Implications: </span>
            This can contribute to physical health problems such as headaches,
            sleep disturbances, and other stress-related issues.
          </li>
          <li>
            <span>Reduced Academic or Work Performance: </span>A victim&apos;s
            academic or work performance can be grossly affected due to online
            harassment.
          </li>
        </ul>
      </div>
      <div>
        <TopText text="LEGAL IMPLICATIONS OF ONLINE HARASSMENT IN NIGERIA" />
        <p className={`${styles.Text}`}>
          Under the Cybercrimes (Prohibition, Prevention Etc.) Act, 2015, online
          harassment or cyberbullying is an offence that is punishable with fine
          or imprisonment or both. Section 24 of the Act treated online
          harassment as cyberstalking. Thus, as section 24(1) provides, where a
          person through the social media, knowingly or intentionally sends a
          message that is grossly offensive, pornographic, obscene or of a
          menacing character or sends a message that he knows to be false to
          another for the purpose of causing annoyance, inconvenience danger,
          transmit obstruction, insult, injury, criminal intimidation, enmity,
          hatred, ill will or needless anxiety, he shall be liable on conviction
          to a fine of not more than N7,000,000.00 or imprisonment for a term of
          not more than 3 years or to both such fine and imprisonment.
          <br />
          <br />
          Section 24(2) (a) and Section 24 (2) (c) respectively states that
          where the message sent is to bully, threaten or harass or to put
          another person in fear of death, violence or bodily harm or where the
          message contains any threat to harm the property or reputation of the
          addressee or of another, the sender commits an offence under the Act
          and is liable on conviction in the former, to imprisonment for a term
          of 10 years and/or a minimum fine of N25,000,000.00; and in the case
          of the latter, to imprisonment for a term of 5 years and/or a minimum
          fine of N15,000,000.00. <br />
          <br /> The Violence Against Persons (Prohibition) Act,2015 also has a
          corresponding provision on online harassment. While section 17 of the
          Act criminalizes stalking, section 18 prohibits intimidation. <br />
          <br />
          Furthermore, a case of defamation in criminal law or tort can be made
          against a cyberbully where he publishes an untrue statement about a
          person which is intended to cause injury to the latter’s reputation.
        </p>
      </div>
      <div>
        <TopText text="ONLINE HARASSMENT REPORTING MECHANISMS" />
        <ul className={`${styles.ListContainer}`}>
          <li>
            <span>Direct Reporting Channels:</span>
            Social networking sites have a number of ways for users to report
            harassment. Most of these platforms enable users to report specific
            content or accounts. To report a case of harassment, click the
            &quot;report&quot; button and choose the relevant category (such as
            abuse, hate speech, or harassment).
          </li>
          <li>
            <span>Channels for Third-party Reporting:</span>
            Platforms may also provide hotlines or email addresses that are
            specifically designated for reporting harassment. In cases where
            direct reporting is risky or difficult, these methods can be useful.
          </li>
          <li>
            <span>Law Enforcement Reporting:</span>
            In cases of severe harassment or threats of violence, users can
            always report directly to law enforcement agents. However, it&apos;s
            important to note that laws and enforcement practices vary across
            jurisdictions.
          </li>
        </ul>
      </div>
      <div className="w-full mt-[3rem] relative h-[34.75rem] rounded-[1.25rem]">
        <Image
          src="/images/online-3.jpeg"
          className="rounded-[1.25rem]"
          alt="online-header"
          fill
        />
      </div>
      <div>
        <TopText
          text="LEGAL RESOURCES AVAILABLE TO VICTIMS OF
 ONLINE HARASSMENT."
        />
        <ul className={`${styles.ListContainer}`}>
          <li>
            <span> Lawsuit:</span>
            If someone intentionally causes emotional distress, defamation, or
            cyberbullying, the victim may institute a legal action against the
            offender under the relevant laws.
          </li>
          <li>
            <span> Grant of a restraining order: </span>
            In order to prevent the offender from further contacting or
            harassing them, victims may apply for restraining orders. Section 24
            (6) of the Cybercrime Act, 2015 gives credence to this by providing
            that the court may give an interim order for the protection of
            victim(s) from further exposure to the alleged offences.
          </li>
        </ul>
      </div>
      <div>
        <TopText
          text="SOCIAL MEDIA PLATFORMS' RESPONSIBILITIES IN COMBATING
 ONLINE HARASSMENT"
        />
        <p className={`${styles.Text} mb-[2rem]`}>
          Social media companies play a big role in eroding cyberbullying. Among
          the crucial facets of these obligation are:
        </p>
        <ul className={`${styles.ListContainer}`}>
          <li>
            Platforms should have thorough policies that clearly define
            harassment and list forbidden behavior.
          </li>
          <li>
            Efficient reporting systems should include responsiveness,
            accessibility, and ease of use.
          </li>
          <li>
            Platforms must look into complaints right away and take proper legal
            action against offenders.
          </li>
          <li>
            Platforms are responsible for content moderation in order to get rid
            of offensive or dangerous content. However, this needs to be
            balanced with openness and freedom of speech.
          </li>
          <li>
            Websites should give users access to resources that explain online
            safety and how to file complaints against harassment.
          </li>
        </ul>
      </div>
      <div>
        <TopText
          text="SOCIAL MEDIA PLATFORM-SPECIFIC POLICIES AND REPORTING
 MECHANISMS"
        />
        <div>
          <div className={`${styles.SocialContainer}`}>
            <FacebookIcon />
            <p>FACEBOOK</p>
          </div>

          <ul className={`${styles.ListContainer}`}>
            <li>
              <span> Policy:</span>
              {`
              Facebook's Community Standards address "personal attacks,"
              "bullying and harassment," and "hate speech." They define
              harassment as unwanted contact that is abusive, malicious, or
              intended to frighten someone.`}
            </li>
            <li>
              <span> Reporting Mechanisms: </span>
              {` Users can report content directly through the platform by clicking
              on the three dots and selecting "Report." Additionally, Facebook
              offers dedicated reporting tools for hate speech and
              cyberbullying.`}
            </li>
          </ul>
        </div>
        <div>
          <div className={`${styles.SocialContainer}`}>
            <InstagramIcon />
            <p>INSTAGRAM</p>
          </div>
          <div>
            <ul className={`${styles.ListContainer}`}>
              <li>
                <span> Policy:</span>
                {`
             Instagram's Community Guidelines address "bullying and harassment," "hate
             speech," and "threats." They define harassment as unwanted contact 
             that is intimidating, offensive, or abusive.
                `}
              </li>
              <li>
                <span> Reporting Mechanisms: </span>
                {`Users can report content directly through the application by clicking on
               the three dots and selecting "Report." Instagram also offers dedicated reporting
                options for specific issues like bullying and child exploitation.`}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={`${styles.SocialContainer}`}>
            <TwitterIcon />
            <p>TWITTER</p>
          </div>
          <div>
            <ul className={`${styles.ListContainer}`}>
              <li>
                <span> Policy:</span>
                {`
             Twitter's Safety Policy covers "abusive behaviour," "hateful conduct," and "threats of violence." They define harassment as repeated
              unwanted contact that is intended to annoy, alarm, or intimidate someone.
                `}
              </li>
              <li>
                <span> Reporting Mechanisms: </span>
                {`Users can report tweets, accounts, and direct messages directly through the platform. 
                Twitter also offers dedicated reporting forms for specific issues like impersonation and self-harm.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <TopText text="CONCLUSION" />
        <p className={`${styles.Text}`}>
          Online harassment has taken a huge toll on many people in the world. A
          typical case of online harassment does not leave the victims the same
          way it met them. Major causes of online harassment reveal that
          cyberbullies face one challenge or the other which forms the basis of
          their action. In Nigeria, we have laws criminalizing online
          harassment, and different reporting mechanisms available on specific
          social media platforms. As technology continues to evolve, collective
          effort must be taken by individuals, platforms and policymakers to
          address this issue. By ensuring the enforcement of extant laws on
          online harassment and promoting awareness of reporting avenues, a
          safer and a healthy digital environment will be fostered.
        </p>
      </div>
    </div>
  );
};

export default OnlineHarrassment;
