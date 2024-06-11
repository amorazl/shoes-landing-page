import HEAD from "../../components/Head";
import Home from "./components/Home";
import Faq from "./components/Faq";

export default function LandingPage() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Stride and Hike."
        pageDescription="Welcome to Our Website"
      />
      <main className="min-h-screen items-center justify-center bg-platinum p-24">
        <Home />
        <Faq />
      </main>
    </>
  );
}
