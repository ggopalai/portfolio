import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Card from '../components/card';
import Socials from '../components/socials';

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
                            Welcome to my website! I'm a graduate student at UC
                            San Diego, currently pursuing a Master's degree in
                            Computer Science with a specialization in Computer
                            Systems. My primary areas of interest are Cloud
                            Computing, Distributed Systems, and Computer
                            Networks.
                        </p>
                        <p>
                            I recently completed a summer internship with
                            LitePoint Corp. as a Software Engineer Cloud Intern.
                        </p>
                        <p>
                            Prior to joining UC San Diego, I gained valuable
                            experience as a Software Engineer at Cisco, where I
                            worked for 3 years. This role allowed me to
                            contribute to various projects and expand my skills
                            in software development, problem-solving, and
                            collaboration within a tech-driven environment.
                        </p>
                        <p>
                            I hold a bachelor's degree from R.V. College of
                            Engineering in Bangalore, which provided me with a
                            solid foundation in computer science.
                        </p>
                        <p>
                            Feel free to explore and get in touch with me for
                            any further inquiries or job opportunities. (I am
                            actively looking for full-time roles with start
                            dates after March 2024). Thank you for visiting!
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
                            "Spearheaded the development of a web-application to remotely demo LitePoint's testers to potential customers.",
                            "The project directly contributed to the company's revenue by enabling the sales team to conduct demos with customers across the globe, thereby reducing the need for travel and in-person meetings.",
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
                            'My most significant contribution was developing an Authentication/Authorization framework for the Cisco Customer Experience Cloud.',
                            'Developed microservices in Python and Java for multiple customer-facing teams (SW Version Recommendation and Business Critical Services teams)',
                            'Collaborated with the security team to ensure compliance with industry best practices.',
                            'Tech Stack - Golang, Python, Java, Docker, Kubernetes, AWS, OAuth2.0, OPA, Okta',
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
                            "I'm part of the Carbonless Cloud Computing lab, contributing to the Greengrader project.",
                            'Our platform optimizes autograder container scheduling across cloud platforms with a focus on reducing carbon emissions.',
                            'Our goal is to provide a sustainable solution for the autograding process, enabling educational institutions and organizations to efficiently utilize cloud resources while reducing their carbon footprint.',
                            'Tech Stack - Python, Bash Scripting, Docker, Kubernetes, PostgreSQL, AWS, National Research Platform (NRP)',
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
                    <Card
                        name="CSE 210 Principles of Software Engineering"
                        position="Graduate Teaching Assistant"
                        exp={[
                            'CSE 210 Principles of Software Engineering is a more focused and motivated version of CSE 110.',
                        ]}
                        image="/logos/ucsd.svg"
                        alt="Logo of UC San Diego in svg format"
                        start="Sept 2023"
                        end="Dec 2023"
                    />
                    <Card
                        name="CSE 110 Software Engineering"
                        position="Graduate Teaching Assistant"
                        exp={[
                            'CSE 110 Software Engineering is a course that focuses on the software development lifecycle and the various tools and techniques used in the process. As a TA, I was responsible for mentoring a total of 11 teams (110 students in total) in their course projects.',
                            'This role has allowed me to gain valuable experience in Engineering Management while teaching and mentoring students, as well as develop my communication and leadership skills.',
                        ]}
                        image="/logos/ucsd.svg"
                        alt="Logo of UC San Diego in svg format"
                        start="Fall 2022"
                        end="Spring 2023"
                    />

                    <Card
                        name="CSE 134 Web Client Languages"
                        position="Graduate Teaching Assistant"
                        exp={[
                            'This is a front-end technical course that aims to teach the students HTML, CSS and JavaScript.',
                            'As a TA, I was responsible for conducting weekly office hours, grading assignments, and assisting students with any questions or concerns they may have.',
                        ]}
                        image="/logos/ucsd.svg"
                        alt="Logo of UC San Diego in svg format"
                        start="January 2023"
                        end="March 2023"
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
