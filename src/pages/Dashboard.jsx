import { useLoaderData } from "react-router-dom";
//helper functions
import { fetchData } from "../helpers";
//comps
import Intro from "../components/Intro";

// loader
export function dashboardLoader() {
  const userName = localStorage.getItem("userName");
  return { userName };
}

//action 
export async function dashboardAction({request}) {
    const formData = await request.formData();
    const userName = formData.get("userName");
    
    // save to local storage
    localStorage.setItem("userName", userName);
    
    // return the userName
    return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (<p>{userName}</p>) : (<Intro />)}
    </>
  );
};

export default Dashboard;
