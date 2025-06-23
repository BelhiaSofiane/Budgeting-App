import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import Main, { mainLoader } from "./layouts/main";

// routes
import Error from "./pages/Error";
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";

//actions 
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import { logoutAction } from "./actions/logout";
import { dashboardAction } from "./pages/Dashboard";


// toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction
      },
      {
        path: "logout",
        action: logoutAction,
      } 
    ]
  },
])


function App() {
  return (
  <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
  )
}

export default App;
