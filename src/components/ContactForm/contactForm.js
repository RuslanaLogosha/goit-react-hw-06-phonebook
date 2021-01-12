import { useState } from 'react';
import shortid from 'shortid';
import s from './form.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = () => shortid.generate();
  const contactNumberId = () => shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={contactNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={s.label} htmlFor={contactNumberId}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
