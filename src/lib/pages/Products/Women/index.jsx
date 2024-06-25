import HEAD from "@/lib/components/Head";
import Home from "./components/Home";
import Banner from "@/lib/components/Banner";
import ListProducts from "./components/ListProducts";

export default function index() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Woman's Power."
        pageDescription="Explore Our Collection."
      />
      <main className="min-h-screen items-center justify-center bg-white">
        <Home />
        <ListProducts />
        <Banner />
      </main>
    </>
  );
}
