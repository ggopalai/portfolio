import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Card from '../components/card';
import Socials from '../components/socials';
import TeachingCard from '../components/teaching-card';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Gagan Gopalaiah</title>
                <meta
                    name="description"
                    content="Gagan Gopalaiah's personal website"
                ></meta>
                <meta
                    name="google-site-verification"
                    content="9EdkBCN70LSCX6KZEHDCIxnRZb39OUWt4s3p-i2Y-ck"
                />
            </Head>
            <Header />
            <main id={styles.content}>
                {/* section for intro */}
                <section id={styles.intro}>
                    {/* image */}
                    <figure id={styles.dp}>
                        <img
                            src="/dp.webp"
                            alt="Picture of me, last day of Cisco"
                        />
                    </figure>

                    {/* intro text */}
                    <intro-text id={styles.introtext}>
                        <p>
                            Hey, I'm a second-year graduate student at{' '}
                            <span className={styles.emp}>UC San Diego</span>,
                            pursuing a Master's degree in Computer Science. I'm
                            broadly interested in the intersection of{' '}
                            <span className={styles.emp}>cloud computing</span>{' '}
                            and{' '}
                            <span className={styles.emp}>
                                distributed systems
                            </span>
                            . I'm on track to graduate in March 2024, and am
                            actively looking for full-time backend Software
                            Engineering roles with start dates in April 2024 and
                            beyond.
                        </p>
                        <p>
                            Prior to joining UC San Diego, I spent 3 years
                            building enterprise{' '}
                            <span className={styles.emp}>SaaS</span> products at{' '}
                            <span className={styles.emp}>Cisco Systems</span>.
                            More specifically, I was part of the core team that
                            developed the{' '}
                            <span className={styles.emp}>authorization</span>{' '}
                            framework for Cisco's{' '}
                            <a
                                href="https://www.cisco.com/site/us/en/services/cx-cloud/index.html"
                                target="_blank"
                            >
                                {' '}
                                <u> CX Cloud.</u>{' '}
                            </a>
                        </p>
                        <p>
                            I am currently researching the domain of{' '}
                            <span className={styles.emp}>
                                {' '}
                                green cloud computing{' '}
                            </span>{' '}
                            with the Systems and Networking group advised by{' '}
                            <a
                                href="https://cseweb.ucsd.edu/~gmporter/"
                                target="_blank"
                            >
                                {' '}
                                <u>Dr. George Porter.</u>{' '}
                            </a>
                        </p>
                        <p>
                            I hold a bachelor's degree in Computer Science from{' '}
                            <span className={styles.emp}>
                                R.V. College of Engineering
                            </span>
                            , Bangalore.
                        </p>
                        <p>
                            Feel free to explore and get in touch with me for
                            further inquiries or job opportunities.
                        </p>
                        <div id={styles.socialsContainer}>
                            <Socials />
                        </div>
                    </intro-text>
                </section>

                {/* section for industry experience */}
                <section id={styles.industry}>
                    <h2> Industry Experience</h2>

                    <Card
                        name="LitePoint"
                        position="Software Engineer Cloud Intern"
                        exp={[
                            "Designed and developed a web application to remotely demo LitePoint's testers to potential customers.",
                            "The project directly contributed to the company's revenue by enabling the sales team to conduct demos with customers across the globe, \
                            thereby reducing the need for travel and in-person meetings.",
                            'Tech Stack - Microsoft Azure, Node.js, Express.js, React, HTML, CSS, JavaScript, Docker, Kubernetes, CosmosDB.',
                        ]}
                        image="/logos/litepoint.svg"
                        alt="Logo of LitePoint Corp. in svg format"
                        start="June 2023"
                        end="Sept 2023"
                    />

                    <Card
                        name="Cisco Systems"
                        position="Software Engineer (Full Time)"
                        exp={[
                            'My most significant contribution was developing an Authorization and Authentication framework \
                            for the Cisco Customer Experience Cloud.',
                            'We utilized the OAuth protocol to establish a secure access control framework for CX Cloud APIs, \
                            implementing Role-Based-Access-Control (RBAC) mechanisms. This not only ensured robust API security \
                            but also involved designing and managing Identity and Access Management (IAM) policies.',
                            'Prior to that, I developed microservices for multiple customer-facing teams \
                            (SW Version Recommendations and Business Critical Services teams) in Python and Java.',
                            'In each of these teams, I collaborated with the security team to ensure compliance with industry best practices.',
                            'Technical Stack - Golang, Python, Java, Docker, Kubernetes, AWS, OAuth2.0, OPA, Okta',
                        ]}
                        image="/logos/cisco.svg"
                        start="July 2019"
                        end="July 2022"
                        alt="Logo of Cisco in svg format"
                    />
                </section>

                {/* section for research experience */}
                <section id={styles.research}>
                    <h2>Research Experience</h2>

                    <Card
                        name="Systems and Networking Group"
                        position="Graduate Research Assistant"
                        exp={[
                            "I'm part of the Carbonless Cloud Computing lab, contributing to the GreenGrader project.",
                            'Our platform aims to optimize autograder container scheduling across cloud platforms with a focus \
                            on reducing carbon emissions.',
                            'Our goal is to provide a sustainable solution for the autograding process, enabling educational \
                            institutions to efficiently utilize cloud resources while reducing their carbon footprint.',
                            'Technical Stack - Python, Bash Scripting, Docker, Kubernetes, PostgreSQL, AWS, National Research Platform (NRP)',
                        ]}
                        image="/logos/ucsd.svg"
                        alt="Logo of UC San Diego in svg format"
                        start="April 2023"
                        end="Present"
                    />
                </section>

                {/* section for teaching experience */}
                <section id={styles.teaching}>
                    <h2>Teaching Experience</h2>
                    <TeachingCard
                        course="CSE 210 Principles of Software Engineering"
                        quarters="Fall 2023, Winter 2024"
                        exp={[
                            'Graduate-level Software Engineering course, where I am responsible for \
                            facilicating in-class discussions, \
                            grading and mentoring teams on their course project.',
                        ]}
                    />
                    <TeachingCard
                        course="CSE 110 Software Engineering"
                        quarters="Fall 2022, Spring 2023"
                        exp={[
                            'Undergraduate SE course that focuses on the software development lifecycle and the various tools \
                            and techniques used in the process. As a TA, I was responsible for mentoring a total of 11 teams \
                            (110 students in total) in their course projects.',
                            'This role has allowed me to gain valuable experience in Engineering Management while teaching \
                            and mentoring students, as well as develop my communication and leadership skills.',
                        ]}
                    />
                    <TeachingCard
                        course="CSE 134 Web Client Languages"
                        quarters="Winter 2023"
                        exp={[
                            'This is a front-end technical course that aims to teach the students HTML, CSS and JavaScript.',
                            'As a TA, I was responsible for conducting weekly office hours, grading assignments, \
                            and assisting students with any questions or concerns they may have.',
                        ]}
                    />
                </section>

                {/* Section for projects */}
                {/* <section id={styles.projects}>
                </section> */}

                <Footer />
            </main>
        </div>
    );
}
