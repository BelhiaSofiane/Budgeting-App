// rrd imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { deleteItem, fetchData } from "../helpers";

// comp imports
import Table from "../components/Table";

// library
import { toast } from "react-toastify";

// loader
export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}
// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)

      if (_action === "deleteExpense") {
          try {
              deleteItem({
                  key: "expenses",
                  id: values.expenseId,
              })
              return toast.success(`Expense Deleted`);
          } catch (e) {
              throw new Error("Failed to delete expense");
          }
      }
}

const ExpenesePage = () => {
  const { expenses } = useLoaderData()

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {
        expenses && expenses.length > 0 ? (
          <div className="grid-md">
            <h2>Recent Expeneses <small>({expenses.length} Total) </small> </h2>
            <Table expenses={expenses}/>
          </div>
        ): <p>No Expeneses to show</p>
      }
    </div>
  )
}

export default ExpenesePage