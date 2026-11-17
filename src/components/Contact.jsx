import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import SocialLinks from './SocialLinks.jsx';

const initialValues = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

function Field({ name, label, as = 'input', value, error, onChange, ...rest }) {
  const Tag = as;
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      <Tag
        id={`f-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `e-${name}` : undefined}
        {...rest}
      />
      {error && (
        <small id={`e-${name}`} className="error">
          {error}
        </small>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const send = (via) => {
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus('');
      return;
    }

    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    if (via === 'whatsapp') {
      const text = `*${values.subject}*\n\n${body}`;
      const number = profile.phone.replace(/\D/g, '');
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      setStatus('Thanks! WhatsApp has opened with your message — just press send.');
    } else {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus('Thanks! Your email app has opened with your message — just press send.');
    }
    setValues(initialValues);
  };

  const fieldProps = (name) => ({ name, value: values[name], error: errors[name], onChange });

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading eyebrow="Get in touch" title="Contact" highlight="Me" />

        <div className="contact-grid">
          <Reveal className="contact-info" direction="right">
            <h3>Let&apos;s work together</h3>
            <p>
              Need a website or web application? Feel free to contact me on WhatsApp or email — I&apos;ll get back to
              you as soon as possible.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <FiMail />
                </span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <FiPhone />
                </span>
                <div>
                  <small>Phone / WhatsApp</small>
                  <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <FiMapPin />
                </span>
                <div>
                  <small>Location</small>
                  <span>{profile.location}</span>
                </div>
              </li>
            </ul>

            <SocialLinks />
          </Reveal>

          <Reveal className="card contact-form-card" direction="left" delay={100}>
            <form
              className="contact-form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                send('email');
              }}
            >
              <div className="form-row">
                <Field label="Your Name" type="text" placeholder="John Doe" autoComplete="name" {...fieldProps('name')} />
                <Field
                  label="Your Email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  {...fieldProps('email')}
                />
              </div>
              <Field label="Subject" type="text" placeholder="Website development" {...fieldProps('subject')} />
              <Field
                label="Message"
                as="textarea"
                rows={5}
                placeholder="Tell me about your project..."
                {...fieldProps('message')}
              />

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  <FiSend /> Send Email
                </button>
                <button type="button" className="btn btn-whatsapp" onClick={() => send('whatsapp')}>
                  <FaWhatsapp /> Send on WhatsApp
                </button>
              </div>
              {status && (
                <p className="form-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
