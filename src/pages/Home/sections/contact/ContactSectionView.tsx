import React, { useRef } from "react";
import { Container } from '@/components/ui';
import styles from './ContactSectionView.module.css';

function ContactSectionView() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const message = messageRef.current?.value || "";
    const subject = "Quero conhecer mais sobre a Verne Tecnologia";
    const body = `Olá, meu nome é ${name},\n\n${message}`;
    const mailto = `mailto:contato@vernetec.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const companyAddress = "R. Dona Maria César, 170 - Recife";
  const lat = -8.0631399;
  const lon = -34.8722939;

  return (
    <section id="contato" className={styles.contact}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mapWrapper}>
            <iframe
              title="company-map"
              className={styles.map}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&layer=mapnik&marker=${lat}%2C${lon}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.address}>{companyAddress}</div>
          </div>

          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Entre em contato conosco</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.srOnly} htmlFor="name">
                Nome
              </label>
              <input
                className={`${styles.field} ${styles.defaultFieldColorText}`}
                id="name"
                ref={nameRef}
                type="text"
                placeholder="Seu nome"
                required
              />

              <label className={styles.srOnly} htmlFor="message">
                Mensagem
              </label>
              <textarea
                className={`${styles.field} ${styles.defaultFieldColorText}`}
                id="message"
                ref={messageRef}
                placeholder="Escreva sua mensagem aqui"
                rows={6}
                required
              />

              <button type="submit" className={styles.sendButton}>
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSectionView;