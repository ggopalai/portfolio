import Header from '../components/header'
import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Contact() {
    
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        suggestions: '',
    });

    const [showForm, setShowForm] = useState(true);

    // Event handler for onChange event
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    }

    // Event handler for onSubmit event
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Email sent successfully', data);
                setShowForm(false);
            } else {
                console.log('Error while sending email', data);
                alert('An error occurred, please try again.');
            }
        } catch (error) {
            console.log("Error while submitting form", error);
            alert('An error occurred, please try again.');
        }
        }

    return (
        <div id={styles.container}>
            <Head>
                <title>Contact</title>
            </Head>
            <Header />
            <main id={styles.main}>

                {showForm && <section id={styles.form}>
                    <form id={styles.actualform} onSubmit={handleSubmit}>
                    <p id={styles.intro}>Fill out this form and I'll get back to you as soon as possible, or shoot me an email at gagandeepgopalaiah@gmail.com.</p>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Contact Information</legend>
                            <div>
                                <label htmlFor="name" className={styles.label}>Name*</label>
                                <input type="text" 
                                       id="name" 
                                       name="name" 
                                       required 
                                       className={styles.inputField}
                                       onChange={handleChange}
                                       value={formData.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={styles.label}>Email*</label>
                                <input type="email" 
                                       id="email" 
                                       name="email" 
                                       required 
                                       className={styles.inputField}
                                       onChange={handleChange}
                                       value={formData.email}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                <input type="tel" 
                                       id="phone" 
                                       name="phone" 
                                       className={styles.inputField}
                                       onChange={handleChange}
                                       value={formData.phone}
                                />
                            </div>
                        </fieldset>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Your Message</legend>
                            <div>
                                <label htmlFor="suggestions" className={styles.label}>Suggestions</label>
                                <textarea id="suggestions" 
                                          name="suggestions" 
                                          className={styles.textareaField}
                                          onChange={handleChange}
                                          value={formData.suggestions}
                                />
                            </div>
                        </fieldset>
                        <div id={styles.buttonContainer}>
                            <button id={styles.submitButton}>Submit</button>
                        </div>
                    </form>
                </section>}

                {  !showForm && 
                    <section id={styles.emailSuccess}>
                        <p>Thank you for your message! I will get back to you as soon as possible.</p>
                    </section>
                }
            </main>
            <Footer />
        </div>
    )
}
