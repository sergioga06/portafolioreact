import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_661xpdi",
        "template_eeiyed9",
        form.current,
        "t9vTtJjBUaSFDHD-i"
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado con éxito");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-xl">
      <h2 className="text-2xl font-bold mb-8 text-foreground">
        Hablemos de tu <span className="text-primary">proyecto</span>
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="user_email" className="block text-sm font-semibold text-foreground/70 ml-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="tucorreo@ejemplo.com"
            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground/70 ml-1">
            Mensaje
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="¿En qué puedo ayudarte?"
            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Enviar mensaje
        </button>

        {status && (
          <p className={`mt-4 text-sm text-center font-medium ${status.includes('error') ? 'text-destructive' : 'text-primary'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;