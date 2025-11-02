import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    // Configuración de EmailJS
    // IMPORTANTE: Debes crear una cuenta en emailjs.com y reemplazar estos valores:
    // 1. YOUR_SERVICE_ID: ID del servicio de email
    // 2. YOUR_TEMPLATE_ID: ID de la plantilla
    // 3. YOUR_PUBLIC_KEY: Tu clave pública

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplazar con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplazar con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Reemplazar con tu Public Key
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
      <div>
        <input
          type="text"
          placeholder="Tu Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full p-3 border rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 ${
            errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full p-3 border rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <textarea
          placeholder="Tu Mensaje"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className={`w-full p-3 border rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 ${
            errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-blue-500 text-white py-3 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <div className="bg-green-500 text-white p-3 rounded text-center">
          ¡Mensaje enviado con éxito! Te responderé pronto.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-500 text-white p-3 rounded text-center">
          Error al enviar el mensaje. Por favor intenta de nuevo.
        </div>
      )}
    </form>
  );
}
  