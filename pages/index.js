import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Card from '../components/card';

export default function HomePage() {
    
    return (
        <div className={styles.container}> 
            <Head>Home</Head>
            <Header />
            <main id={styles.content}>

                {/* section for intro */}
                <section id={styles.intro}> 
                    
                    {/* image */}
                    <figure id={styles.dp}>
                        <img src="/dp.jpg" alt="Picture of me, last day of Cisco" />
                    </figure>
                    
                    {/* intro text */}
                    <intro-text id={styles.introtext}>
                        <p>Welcome to my website! I'm a graduate student at UC San Diego, currently pursuing a Masters in Computer Science with a specialization in Computer Systems. 
                           My primary areas of interest lie in Cloud Computing, Distributed Systems, and Computer Networks.</p>
                        <p>I am currently working with LitePoint Corp. as a SWE Cloud Intern. </p>
                        <p>Prior to joining UC San Diego, I gained valuable experience as a Software Engineer at Cisco, where I worked for 3 years. This role allowed me to contribute to various projects and expand my skills in software development, problem-solving, and collaboration within a tech-driven environment.</p>
                        <p>I hold a bachelor's degree from R.V. College of Engineering in Bangalore, which provided me with a strong foundation in computer science.</p>
                        <p>I am excited to showcase my portfolio and share my experiences with you. Feel free to explore and get in touch with me for any further inquiries or opportunities. Thank you for visiting!</p>
                    </intro-text>

                </section>

                {/* section for industry experience */}
                <section id={styles.industry}>

                    <h2> Industry Experience</h2>

                    <Card 
                        name="LitePoint"
                        position="Software Engineer Cloud Intern"
                        exp={["Currently working on a project to remotely demo LitePoint's testers to potential customers.", 
                              "Developing a full-stack application on Azure using Node.js and Express.js backend with a Next.js GUI, while managing deployments using Docker and Kubernetes.", 
                              "Tech Stack - Microsoft Azure, Node.js, Express.js, React, HTML, CSS, JavaScript, Docker, Kubernetes, CosmosDB"]}
                        image="/logos/litepoint.svg"
                        start="June 2023"
                        end="Present"
                    />

                    <Card 
                        name="Cisco Systems"
                        position="Software Engineer (Full Time)"
                        exp={[
                                "Designed and implemented an Authentication/Authorization framework for the CX Cloud.",
                                "Developed microservices using Java for the Optimal Software Version Recommendation team.",
                                "Worked on projects with high impact in the Business Critical Services team.",
                                "Collaborated with the security team to ensure compliance with industry best practices.",
                                "Gained exposure to working in a large-scale enterprise environment and handling the complexities associated with delivering high-quality software solutions.",
                                "Tech Stack - Golang, Python, Java, Docker, Kubernetes, AWS, OAuth2.0, OPA, Okta"
                            ]}
                        image="/logos/cisco.png"
                        start="July 2019"
                        end="July 2022"
                    />
                </section>
                
                {/* section for research experience */}
                <section id={styles.research}> 
                    <h2>Research Experience</h2>

                    <Card 
                        name="Systems and Networking Group"
                        position="Graduate Research Assistant"
                        exp={["I'm part of the Carbonless Cloud Computing lab, contributing to the GreenGrader project..", 
                              "Our platform optimizes autograder container scheduling across cloud platforms with a focus on reducing carbon emissions.", 
                              "Our goal is to provide a sustainable solution for the autograding process, enabling educational institutions and organizations to efficiently utilize cloud resources while reducing their carbon footprint.",
                              "Tech Stack - Python, Bash Scripting, Docker, Kubernetes, PostgreSQL, AWS"
                            ]}
                        image="/logos/ucsd.png"
                        start="April 2023"
                        end="Present"
                    />

                </section>
                
                {/* section for teaching experience */}
                <section id={styles.teaching}>
                    <h2>Teaching Experience</h2>
                    <Card 
                        name="CSE 110 Software Engineering"
                        position="Graduate Teaching Assistant"
                        exp={["Served as a Teaching Assistant for CSE 110 Software Engineering, a course that focuses on the software development lifecycle and the various tools and techniques used in the process. As a TA, I was responsible for conducting weekly lab sessions, grading assignments, and assisting students with any questions or concerns they may have.",
                                "This role has allowed me to gain valuable experience in teaching and mentoring students, as well as develop my communication and leadership skills."
                            ]}
                        image="/logos/ucsd.png"
                        start="Fall 2022"
                        end="Spring 2023"
                    />

                    <Card 
                        name="CSE 134 Web Client Languages"
                        position="Graduate Teaching Assistant"
                        exp={["This is a front-end technical course that aims to teach the students HTML, CSS and JavaScript.",
                               "As a TA, I was responsible for conducting weekly office hours, grading assignments, and assisting students with any questions or concerns they may have."
                            ]}
                        image="/logos/ucsd.png"
                        start="January 2023"
                        end="March 2023"
                    />  
                </section>

                {/* Section for projects */}
                <section id={styles.projects}>
                    
                </section>
                
                <Footer />
            </main>
        </div>
    )
}