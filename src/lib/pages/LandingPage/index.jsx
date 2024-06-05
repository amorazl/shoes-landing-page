import HEAD from "../../components/Head";
import Home from "./components/Home";

export default function LandingPage() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Stride and Hike."
        pageDescription="Welcome to Our Website"
      />
      <main className="flex min-h-screen items-center justify-center bg-platinum p-24">
        <Home />
      </main>
    </>
  );
}
