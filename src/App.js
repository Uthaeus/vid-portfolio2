import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {faInstagram, faFacebook, faTikTok} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import RootLayout from "./pages/Root";

library.add(faInstagram, faFacebook, faTikTok);

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
      }
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
