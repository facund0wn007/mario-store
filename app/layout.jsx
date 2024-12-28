import { Navbar } from "@/components/Navbar/navbar";
import './global.css'
import { Footer } from "@/components/footer/footer";

export const metadata = {
  title: "Mario Store",
  description: "La mejor mario Store de LAS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
