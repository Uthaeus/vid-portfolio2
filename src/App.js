
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {faInstagram, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import RootLayout from "./pages/Root";
import Auth from "./pages/Auth";

library.add(faInstagram, faFacebook, faTiktok);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/p/:projectId',
        element: <ProjectDetail />
      },
      {
        path: '/auth',
        element: <Auth />
      }
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
