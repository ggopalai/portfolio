import Header from '../components/header'
import styles from '../styles/Contact.module.css'
import Head from 'next/head'

export default function Contact() {
    return (
        <div id={styles.container}>
            <Head>Contact</Head>
            <Header />
            <main id={styles.main}>
                <section id={styles.mycontact}>
                    <h3>Feel free to shoot me an email at <strong>gagandeepgopalaiah@gmail.com</strong> or connect via my socials. </h3>
                    {/* create block scoped bar for socials */}
                    <socials id={styles.socials}></socials>
                </section>
                <section id={styles.form}>
                    <h3>Or, you can fill out this form and I'll get back to you as soon as possible!</h3>
                    <form action="#" method="POST">
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Contact Information</legend>
                            <div>
                                <label htmlFor="name" className={styles.label}>Name*</label>
                                <input type="text" id="name" name="name" required className={styles.inputField}/>
                            </div>
                            <div>
                                <label htmlFor="email" className={styles.label}>Email*</label>
                                <input type="email" id="email" name="email" required className={styles.inputField}/>
                            </div>
                            <div>
                                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                <input type="tel" id="phone" name="phone" className={styles.inputField}/>
                            </div>
                            </fieldset>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Your Message</legend>
                            <div>
                                <label htmlFor="suggestions">Suggestions</label>
                                <textarea id="suggestions" name="suggestions" className={styles.textareaField}></textarea>
                            </div>
                        </fieldset>
                        <button type="submit" id={styles.submitButton}>Submit</button>
                    </form>
                </section>
            </main>
        </div>
    )
}