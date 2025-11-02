import * as React from "react";
import ContactForm from "../components/ContactForm";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <section className="p-10 bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center">Contacto</h1>
        <p className="text-lg text-gray-300 text-center mt-4">Si quieres contactarme, completa el formulario a continuación.</p>
        <ContactForm />
      </section>
    </PageTransition>
  );
}
