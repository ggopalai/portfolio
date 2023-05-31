import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';

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
                        {/* <figcaption>Me, last day of Cisco</figcaption> */}
                    </figure>
                    
                    {/* intro text */}
                    <intro-text id={styles.introtext}>
                        <p>Welcome to my website! I'm a passionate graduate student at UCSD, currently pursuing a Masters in Computer Science and Engineering with a specialization in Computer Systems. My primary areas of interest lie in Cloud Computing, Distributed Systems, and Networking, where I strive to explore innovative solutions and advancements.</p>
                        <p>Before joining UCSD, I gained valuable experience as a Software Engineer at Cisco, where I worked for approximately 3 years. This role allowed me to contribute to various projects and expand my skills in software development, problem-solving, and collaboration within a tech-driven environment.</p>
                        <p>I hold a bachelor's degree from R.V College of Engineering in Bangalore, which provided me with a strong foundation in computer science and equipped me with the necessary skills to tackle complex technical challenges.</p>
                        <p>I am excited to showcase my portfolio and share my projects, achievements, and expertise with you. Feel free to explore and get in touch with me for any further inquiries or opportunities. Thank you for visiting!</p>
                    </intro-text>

                </section>

                {/* section for academic interests */}
                {/* <section id={styles.interests}>
                    <h2>Focus Areas</h2>
                    <p></p>
                </section> */}

                {/* section for industry experience */}
                <section id={styles.industry}>
                    <h2> Industry Experience</h2>
                    
                    <p> Before joining UCSD, I had the opportunity to work as a Software Engineer at Cisco Systems, where I gained valuable industry experience. During my 3-year tenure at Cisco, I was primarily involved in the development of the Cisco CX Cloud, a Software-as-a-Service (SaaS) offering catering to a diverse range of Cisco customers.
                    In the initial phase of my role, I dedicated 8 months to the Optimal Software Version Recommendation team, where I was responsible for developing microservices using Java. This experience allowed me to strengthen my Java programming skills and deepen my understanding of building scalable and efficient software solutions. 
                    </p>
                    
                    <p> Following that, I transitioned to the Business Critical Services team for a brief period, where I gained exposure to critical business operations and had the opportunity to work on projects with high impact. This experience honed my ability to tackle complex challenges and effectively collaborate with cross-functional teams.
                    The major portion of my time at Cisco was dedicated to building an Authentication framework for the CX Cloud. This project required me to work closely with the security team and utilize industry best practices to design and implement a robust and secure authentication system. Through this endeavor, I enhanced my knowledge of authentication protocols, security frameworks, and user management systems. 
                    </p>
                    
                    <p> My experience at Cisco Systems has equipped me with a strong foundation in software engineering principles, agile development methodologies, and collaborative teamwork. It has also provided me with exposure to working in a large-scale enterprise environment and handling the complexities associated with delivering high-quality software solutions.
                    I am excited to bring the skills and expertise gained from my previous experiences to contribute to new and challenging projects, leveraging my technical acumen and problem-solving abilities to drive innovation and deliver impactful solutions.
                    </p>
                </section>
                
                {/* section for research experience */}
                <section id={styles.research}> 
                    <h2>Research Experience</h2>
                    <p>I have the privilege of working in the Carbonless Cloud Computing lab on an exciting project called GreenGrader. Our team is dedicated to developing a platform that facilitates carbon-aware scheduling of autograder containers on various cloud computing platforms.
                       The primary focus of our work is to address the environmental impact associated with cloud computing. By integrating carbon-aware scheduling techniques into our platform, we aim to optimize the allocation of computing resources while minimizing carbon emissions. This involves considering factors such as renewable energy availability, server utilization, and energy efficiency when scheduling autograder containers.
                       Our goal is to provide a sustainable solution for the autograding process, enabling educational institutions and organizations to efficiently utilize cloud resources while reducing their carbon footprint. By leveraging the power of cloud computing in an environmentally conscious manner, we aim to contribute to a more sustainable future.
                    </p>
                </section>
                
                {/* section for teaching experience */}
                <section id={styles.teaching}>
                    <h2>Teaching</h2>
                    <ul>
                        <li>CSE 110 Software Engineering - Fall 2022 and Spring 2023</li>
                        <li>CSE 134B Web Client Languages - Winter 2023</li>
                    </ul>
                </section>

                {/* Section for projects */}
                <section id={styles.projects}>
                    
                </section>
                
                <Footer />
            </main>
        </div>
    )
}