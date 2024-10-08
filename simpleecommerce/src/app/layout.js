import Header from "./components/Header";
import "./globals.css";
import CartProvider from "../../context/CartProvider";
import Footer from "./components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body>
        <Header></Header>
        <CartProvider>
          {children}
        </CartProvider>

      </body>
    </html>
  );
}
