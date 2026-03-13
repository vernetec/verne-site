import React, { useRef } from "react";
import { Container, AnimatedSection, GlassCard } from '@/components/ui';
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
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${lat},${lon}&z=16&output=embed`;

  return (
    <section id="contato" className={styles.contact}>
      <Container className={styles.container}>
        <AnimatedSection animation="fadeUp">
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>
          <p className={styles.sectionSubtitle}>
            Estamos prontos para ajudar sua empresa a crescer
          </p>
        </AnimatedSection>

        <div className={styles.content}>
          <AnimatedSection animation="fadeLeft" className={styles.mapWrapper}>
            <GlassCard className={styles.mapCard}>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <iframe
                  title="company-map"
                  className={styles.map}
                  src={googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className={styles.mapOverlay}>
                  <span>Abrir no Google Maps</span>
                </div>
              </a>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.address}
              >
                <span className={styles.addressIcon}>📍</span>
                {companyAddress}
              </a>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection animation="fadeRight" delay={200} className={styles.formWrapper}>
            <GlassCard className={styles.formCard} glow>
              <h3 className={styles.title}>Envie uma mensagem</h3>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="name">
                    Nome
                  </label>
                  <input
                    className={styles.field}
                    id="name"
                    ref={nameRef}
                    type="text"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    className={styles.field}
                    id="message"
                    ref={messageRef}
                    placeholder="Escreva sua mensagem aqui"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className={styles.sendButton}>
                  <span>Enviar mensagem</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

export default ContactSectionView;