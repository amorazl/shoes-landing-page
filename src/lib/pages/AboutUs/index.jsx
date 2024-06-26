import HEAD from "../../components/Head";
import Home from "./components/Home";
import AboutGlance from "./components/AboutGlance";
import HowWeDo from "./components/HowWeDo";

export default function AboutUs() {
  return (
    <>
      <HEAD
        pageTitle="Nike. About Our Company"
        pageDescription="Welcome to Our Website"
      />
      <main className="min-h-screen items-center justify-center bg-platinum">
        {/* COMPONENTS */}
        <Home />
        <AboutGlance />
        <HowWeDo />

        {/* QUOTE */}
        <div className="py-24 text-center">
          <p className="text-center text-xl font-medium lg:text-2xl">
            Style is a way to say who <b>you</b> are <br /> without having to
            speak.
          </p>
          <p className="mt-4">
            <i>── Anonymous</i>
          </p>
        </div>
      </main>
    </>
  );
}
