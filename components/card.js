import styles from '../styles/Card.module.css'

export default function Card({name, position, exp, image, start, end}) {
    return (
        <section className={styles.card}>
                <div className={styles.header}>
                    <div>
                        <div className={styles.companytitle}>{`${name} - ${position}`}</div>
                        <div className={styles.time}>{`${start} - ${end}`}</div>
                    </div>
                    <img className={styles.companylogo} src={image}></img>
                </div>
                <div className={styles.content}>
                    <ul className={styles.ul}>
                        {exp.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
        </section>
    )
}