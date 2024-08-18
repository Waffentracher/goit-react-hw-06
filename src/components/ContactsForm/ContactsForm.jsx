// src/components/ContactsForm/ContactsForm.jsx
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNumberChange = e => {
    // Замінює все, що не є цифрами
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    setNumber(onlyNumbers);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return; // Перевірка на порожні значення
    dispatch(addContact({ id: Date.now(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="text" // Перемикаємося на text, якщо використовуємо JavaScript для обробки
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
          pattern="[0-9]*" // Дозволити тільки цифри
          title="Please enter a valid phone number"
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
