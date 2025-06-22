// rrd imports 
import { Form, NavLink } from "react-router-dom";
// assets 
import logomark from "../assets/logomark.svg";
// icons 
import { TrashIcon } from "@heroicons/react/16/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
      to={"/"}
      aria-label="Go to home page">
        <img src={logomark} alt="logo" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
          <Form 
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Are you sure you want to log out?")) {
              event.preventDefault();
            }
          }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete user</span>
              <TrashIcon className="icon" width={20}/>
            </button>
          </Form>

        )
      }
    </nav>
  )
}

export default Nav