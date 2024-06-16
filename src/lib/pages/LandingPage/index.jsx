import HEAD from "../../components/Head";
import Home from "./components/Home";
import NewRelease from "./components/NewRelease";
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
      <main className="min-h-screen items-center justify-center bg-platinum p-24">
        <div className="container mx-auto">
          <Home />
          <NewRelease />
          <Highlight />
          <Categories />
          <Faq />
        </div>
      </main>
    </>
  );
}
