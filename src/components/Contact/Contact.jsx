import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact }) => (
  <div className={styles.contact}>
    <p>{contact.name}: {contact.number}</p>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
