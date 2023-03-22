import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import RootLayout from "./pages/Root";
import Auth from "./pages/Auth";
import { store } from "./store/store";


library.add(faInstagram, faFacebook, faTiktok);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/p/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
