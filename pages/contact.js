import Header from '../components/header'
import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import Socials from '../components/socials'


export default function Contact() {
    return (
        <div id={styles.container}>
            <Head>Contact</Head>
            <Header />
            <main id={styles.main}>
                <section id={styles.mycontact}>
                    <p>Feel free to shoot me an email at <em>gagandeepgopalaiah@gmail.com</em> or connect via my socials. </p>
                    <Socials />
                </section>

                <section id={styles.form}>
                    <form method="POST" id={styles.actualform} onSubmit={handleSubmit}>
                    <p>Or, you can fill out this form and I'll get back to you as soon as possible!</p>
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
                                <label htmlFor="suggestions" className={styles.label}>Suggestions</label>
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

// Event handler for onSubmit event
function handleSubmit(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      suggestions: formData.get('suggestions'),
    };
  
    // Send form data to the API
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }