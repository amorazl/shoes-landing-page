import HEAD from "../../../components/Head";
import Home from "./components/Home";
import ListProducts from "./components/ListProducts";

export default function index() {
  return (
    <>
      <HEAD
        pageTitle="Nike. Men's Wear."
        pageDescription="Explore Our Collection."
      />
      <main className="min-h-screen items-center justify-center bg-white">
        <Home />
        <ListProducts />
      </main>
    </>
  );
}
