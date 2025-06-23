import { useLoaderData } from "react-router-dom";
//helper functions
import { fetchData } from "../helpers";
//comps
import Intro from "../components/Intro";
import { toast } from "react-toastify";

import AddBudgetForm from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

//action 
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);
    
    if (_action === "newUser") {
        try {
        localStorage.setItem("userName", JSON.stringify(values.userName));
        toast.success(`Welcome ${values.userName}!`);
        return null;
        } catch(e) {
            throw new Error("Failed to save user name");
        }
    }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
            <h1>Welcome Back, <span className="accent">{userName}</span></h1>
            <div className="grid-sm">
                {/* {budgets ? () : ()} */}
                <div className="grid-lg">
                    <div className="flex-lg">
                        <AddBudgetForm />
                    </div>
                </div>
            </div>
        </div>
      ) : (<Intro />)}
    </>
  );
};

export default Dashboard;
