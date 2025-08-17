import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Socials from '../components/socials';
import Timeline from '../components/timeline';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>gagan gopalaiah</title>
                <meta
                    name="description"
                    content="gagan gopalaiah's personal website"
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
                            hey there! i'm a software engineer at amazon web services working on dynamodb, a nosql database. 
                            i enjoy tackling distributed systems problems and the occasional late-night debugging session where everything mysteriously works after a restart 🤔
                        </p>
                        <p>
                            my path led me from rvce, bangalore to cisco (where i learned that enterprise software has many... interesting quirks), 
                            then to ucsd for a master's degree, and now to the fast-paced world of amazon web services - one sev2 at a time. 
                            along the way, i've discovered that the best solutions often come from the simplest ideas.
                        </p>
                        <p>
                            when i'm not staring at logs or writing code, you might find me climbing mountains or playing fifa. always happy to chat about tech, mountains, or football (go liverpool)
                        </p>
                        <div id={styles.socialsContainer}>
                            <Socials />
                        </div>
                    </intro-text>
                </section>

                {/* Timeline section replacing all experience sections */}
                <Timeline />

                {/* Section for projects */}
                {/* <section id={styles.projects}>
                </section> */}

                <Footer />
            </main>
        </div>
    );
}
