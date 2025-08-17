import styles from '../styles/Timeline.module.css';

const timelineEvents = [
    {
        date: 'jul 2025',
        title: 'climbed mount st. helens',
        description: 'explored the pacific northwest\'s active volcano',
        category: 'personal',
        type: 'personal'
    },
    {
        date: 'jun 2024',
        title: 'started at aws dynamodb',
        description: 'began working on distributed systems at scale',
        category: 'industry',
        type: 'industry'
    },
    {
        date: 'june 2024',
        title: 'graduated ucsd',
        description: 'completed master\'s degree in computer science',
        category: 'academic',
        type: 'education'
    },
    {
        date: 'winter 2024',
        title: 'ta for cse 210',
        description: 'mentored graduate students in software engineering',
        category: 'teaching',
        type: 'teaching'
    },
    {
        date: 'fall 2023',
        title: 'ta for cse 210',
        description: 'facilitated discussions and guided project teams',
        category: 'teaching',
        type: 'teaching'
    },
    {
        date: 'apr-dec 2023',
        title: 'research assistant at ucsd',
        description: 'contributed to greengrader carbon optimization project',
        category: 'research',
        type: 'research'
    },
    {
        date: 'june-sept 2023',
        title: 'software engineer intern at litepoint',
        description: 'built a web application for remote product demos',
        category: 'industry',
        type: 'industry'
    },
    {
        date: 'spring 2023',
        title: 'ta for cse 110',
        description: 'mentored undergraduate software engineering teams',
        category: 'teaching',
        type: 'teaching'
    },
    {
        date: 'winter 2023',
        title: 'ta for cse 134',
        description: 'taught html, css, and javascript fundamentals',
        category: 'teaching',
        type: 'teaching'
    },
    {
        date: 'fall 2022',
        title: 'ta for cse 110',
        description: 'guided students through software development lifecycle',
        category: 'teaching',
        type: 'teaching'
    },
    {
        date: 'sept 2022',
        title: 'started at ucsd',
        description: 'began master\'s program in computer science',
        category: 'academic',
        type: 'education'
    },
    {
        date: 'jul 2022',
        title: 'left cisco systems',
        description: 'concluded 3 years in enterprise software development',
        category: 'industry',
        type: 'industry'
    },
    {
        date: 'nov 2021',
        title: 'climbed kumar parvatha',
        description: 'karnataka\'s toughest',
        category: 'personal',
        type: 'personal'
    },
    {
        date: 'oct 2021',
        title: 'climbed kudremukha',
        description: 'a very green climb',
        category: 'personal',
        type: 'personal'
    },
    {
        date: 'jul 2019',
        title: 'started at cisco systems',
        description: 'developed authorization and authentication microservices for cx cloud',
        category: 'industry',
        type: 'industry'
    },
    {
        date: 'jan 2018',
        title: 'climbed kedarkantha',
        description: 'first himalayan climb',
        category: 'personal',
        type: 'personal'
    },
    {
        date: 'may 2019',
        title: 'graduated r.v. college of engineering',
        description: 'bachelor\'s degree in computer science',
        category: 'academic',
        type: 'education'
    }
];

export default function Timeline() {
    return (
        <section className={styles.timelineSection}>
            <h2>journey so far</h2>
            <div className={styles.timeline}>
                {timelineEvents.map((event, index) => (
                    <div key={index} className={`${styles.timelineItem} ${styles[event.category]}`}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.dot}></div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineDate}>{event.date}</div>
                            <div className={styles.timelineTitle}>{event.title}</div>
                            <div className={styles.timelineDescription}>{event.description}</div>
                            <div className={styles.timelineType}>{event.type}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
