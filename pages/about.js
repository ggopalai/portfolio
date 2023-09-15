import Head from 'next/head'
import styles from '../styles/About.module.css'
import sideStyles from '../styles/Sidebar.module.css'
import mainStyles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <div id={mainStyles.container}>
            <Head>
                <title>About</title>
            </Head>
            <Header />
            <main id={mainStyles.main}>
                <section id={mainStyles.section}>
                    <h3 className={mainStyles.heading}>On a personal note, let me share a bit about myself beyond work and academia.</h3>
                    <p>Hello there! I'm Gagan, a contemplative soul who takes pleasure in life's little treasures. 🤝 I'm a devoted Stoic, exploring deeper questions in a fast-paced world. While I can't sing or dance to save my life, I more than make up for it with my love for cooking. Living solo in the USA has transformed me into a culinary enthusiast! 😄 I'm all about savoring good food, but I also balance it with my love for lifting weights – currently deadlifting up to 165 kgs. And let's not forget my deep affection for dogs - these furry companions are, without a doubt, a gift from the heavens. 🐶 Welcome to my world! </p>
                    <h4 className={styles.section}>Love for outdoors</h4>
                    <p>Exploring the great outdoors through hiking is one of my greatest passions. I've had the incredible opportunity to embark on two Himalayan expeditions, immersing myself in the breathtaking beauty of the mountains. Mount Everest is a dream I hope to conquer someday, driven by the desire to challenge my limits and experience the pinnacle of adventure. Here are a couple of images from the summit of the Kedarkantha Peak.</p>
                    <div className={styles.kkContainer}> 
                        <img src="/himalayas/fullview.jpg" alt="Kedarkantha" className={styles.kk} />
                        <img src="/himalayas/sunset.jpg" alt="Kedarkantha" className={styles.kk} />
                    </div>
                    <h4 className={styles.section}>Football</h4>
                    <p>Football holds a special place in my heart, and I have been a devoted supporter of Liverpool FC since 2008. The thrill of the game, the camaraderie among fans, and the rollercoaster of emotions that come with each match make it an exhilarating experience. You'll often find me cheering on the team with unwavering enthusiasm, living by the motto "Red or dead!"</p>
                    <h4 className={styles.section}>Photography</h4>
                    <p>I'm a hobbyist photographer. Since 2015, I have been capturing moments and stories through my DSLR. Whether it's the vast landscapes, the vibrant streets, or the essence of individuals in portraits, I strive to encapsulate the beauty and emotions within each frame. I invite you to explore my photography page, where I showcase my visual journey and invite you to share in the captivating moments I've captured.</p>
                    <h4 className={styles.section}> Toby &#9829; </h4>
                    <p>I left my pet dog Toby back home in Bangalore, whom I absolutely love and adore! He's a 2-year-old Indie. His playful spirit and unconditional love have brought immense happiness to my life, reminding me of the importance of companionship and cherished connections. Here are some of his pictures.</p>
                    <div className={styles.tobyContainer}>
                        <img src="/toby/toby1.jpg" alt="Toby" />
                        <img src="/toby/toby2.jpg" alt="Toby" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}