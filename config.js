// ═══════════════════════════════════════════════════════════════
//  MyBusiness — Configuración del cliente
//  Al instalar para un nuevo cliente, solo hay que editar este archivo.
// ═══════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey:            "AIzaSyD6XMrPeGS-idKEpoUftbvjkpSJvkBTLuw",
  authDomain:        "mybusiness-ee7a4.firebaseapp.com",
  projectId:         "mybusiness-ee7a4",
  storageBucket:     "mybusiness-ee7a4.firebasestorage.app",
  messagingSenderId: "1094706581573",
  appId:             "1:1094706581573:web:8129a8d26c6ba195ea532c",
  measurementId:     "G-BC7JLJ1KBC"
};

// URL del backend Flask en Render (Mercado Pago)
// Dejar vacío si no se usa MP todavía
export const MP_BACKEND = "https://mybusiness-mp.onrender.com";

// ID del dispositivo MP Point físico (caja)
// Dejar vacío si no se usa MP Point todavía
export const MP_DEVICE_ID = "";
