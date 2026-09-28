import styles from './Footer.module.css';

const companyLinks = [
  'About Us',
  'The Journal',
  'The Edit',
  'Careers',
  'Shipping',
  'Returns & Exchanges',
  'Terms & Conditions',
];

const socialLinks = ['Instagram', 'Facebook', 'Pinterest'];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksColumn}>
        {companyLinks.map((link) => (
          <a href='#' key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className={styles.contactColumn}>
        <p>+64-9-378-7988</p>
        <p>studio@everyday-needs.com</p>

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a href='#' key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.storeColumn}>
        <p>
          270 Ponsonby Road
          <br />
          Ponsonby, Auckland 1011
        </p>

        <p>
          Monday to Saturday 10:00 am – 5:00pm
          <br />
          Sunday 10:00 am – 4:30 pm
          <br />
          Click & Collect is available within store hours
        </p>
      </div>

      <div className={styles.newsletterColumn}>
        <p>
          Sign up to the Everyday Needs newsletter and receive $10 off your
          first purchase.
        </p>

        <form className={styles.newsletterForm}>
          <input type='email' placeholder='Email*' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>

      <p className={styles.credit}>Site by S/A</p>
    </footer>
  );
};

export default Footer;
