export default function ContactForm() {
    return (
      <form className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Tu Nombre" className="p-2 border rounded bg-gray-100 text-gray-900" />
        <input type="email" placeholder="Tu Email" className="p-2 border rounded bg-gray-100 text-gray-900" />
        <textarea placeholder="Tu Mensaje" className="p-2 border rounded bg-gray-100 text-gray-900"></textarea>
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    );
  }
  