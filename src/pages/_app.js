import "@/styles/globals.css";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
