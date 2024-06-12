import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/pages/Home/Home";
import About from "../Component/pages/About/About";
import Services from "../Component/pages/Services/Services";
import Work from "../Component/pages/Work/Work";
import Skills from "../Component/pages/Skills/Skills";
import Contact from "../Component/pages/Contact/Contact";
import RecentWork from "../Component/pages/Work/RecentWork";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/work",

        element: <Work></Work>,

      },
      // {
      //   path: "/recentwork/:id",
      //   loader: ({ params }) => fetch(`https://protfolio-website-server.vercel.app/recentwork/${params.id}`),
      //   element: <RecentWork></RecentWork>,
      // },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },



    ]
  },
]);