import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router> {/* 🔹 Asegúrate de envolver todo dentro de <Router> */}
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
