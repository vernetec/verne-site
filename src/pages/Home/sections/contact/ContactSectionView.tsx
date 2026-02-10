import React, { useRef } from "react";
import "./ContactSectionView.css";

function ContactSectionView() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const message = messageRef.current?.value || "";
    const subject = "Quero conhecer mais sobre a Verne Tecnologia";
    const body = `Olá, meu nome é ${name},\n\n${message}`;
    const mailto = `mailto:saulo@vernetec.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const companyAddress = "R. Dona Maria César, 170 - Recife";
  const lat = -8.0631399;
  const lon = -34.8722939;

  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-map">
          <iframe
            title="company-map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&layer=mapnik&marker=${lat}%2C${lon}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-address">{companyAddress}</div>
        </div>

        <div className="contact-form">
          <h2>Entre em contato conosco</h2>
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="name">Nome</label>
            <input id="name" ref={nameRef} type="text" placeholder="Seu nome" required />

            <label className="sr-only" htmlFor="message">Mensagem</label>
            <textarea id="message" ref={messageRef} placeholder="Escreva sua mensagem aqui" rows={6} required />

            <button type="submit" className="send-btn">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionView;