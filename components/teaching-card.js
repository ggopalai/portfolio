import styles from '../styles/TeachingCard.module.css';

export default function TeachingCard({ course, quarters, exp }) {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.course}>{`${course} - ${quarters}`}</div>
            </div>
            <div className={styles.content}>
                <ul className={styles.ul}>
                    {exp.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
