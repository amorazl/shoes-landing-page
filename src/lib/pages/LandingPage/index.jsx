import HEAD from "../../components/Head";
import Home from "./components/Home";
import BestSeller from "./components/BestSeller";
import Highlight from "./components/Highlight";
import Categories from "./components/Categories";
import Faq from "./components/Faq";

export default function LandingPage() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Stride and Hike."
        pageDescription="Welcome to Our Website"
      />
      <main className="min-h-screen items-center justify-center bg-platinum px-5 py-24 md:px-10 lg:p-24">
        <div className="container mx-auto">
          <Home />
          <BestSeller />
          <Highlight />
          <Categories />
          <Faq />
        </div>
      </main>
    </>
  );
}
