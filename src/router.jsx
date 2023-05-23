import { createBrowserRouter } from "react-router-dom";
import { PersonajeDetail, Navbar, Personajes } from "./components/index";
import {
  Home,
  Favorite,
  ErrorPage,
  About,
  Footer,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/personajes",
    element: (
      <>
        <Navbar />
        <Personajes />
        <Footer />
      </>
    ),
  },
  {
    path: "/personajes/:id",
    element: (
      <>
        <Navbar />
        <PersonajeDetail />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <Navbar />
        <Favorite />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
]);
