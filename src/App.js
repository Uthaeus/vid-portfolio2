import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import RootLayout from "./pages/Root";
import Auth from "./pages/Auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/auth-context";
import NewProject from "./pages/NewProject";

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
        path: 'new-project',
        element: <NewProject />
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    function fetchToken() {
      const storedToken = localStorage.getItem('token');
      console.log('looking for token app.js');

      if (storedToken) {
        authCtx.authenicate(storedToken);
      }
    }

    fetchToken();
  }, [])

  return <RouterProvider router={router} />;
}

export default App;
