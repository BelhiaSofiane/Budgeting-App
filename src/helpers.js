export const waait = () => new Promise(resolve => setTimeout(resolve, Math.random() * 800));

const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetsLength * 34 } 65% 50%`
}

// Local Storage 
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// get all items from local storage 
export const getAllMatchingItems = ({category, key, value}) => {
    const data = fetchData(category) ?? []
    return data.filter((item) => item[key] === value)
}
// delete item for local storage
export const deleteItem = ({key ,id}) => {
    const existingData = fetchData(key)
    if(id) {
        const newData = existingData.filter((item) => item.id !== id)
        return localStorage.setItem(key , JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}

// create budget 
export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor(),
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
}
// create Expense 
export const createExpense = ({ 
    name, amount, budgetId 
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId, // This should be set based on the selected budget
    }
    const existingExpenses = fetchData("expenses") ?? [];
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]));
}

// total spent by budget 
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc ,expense) => {
        // check if the expense.id === budgetId i passed in 
        if (expense.budgetId !== budgetId) {
            return acc
        }
        return acc += expense.amount;
    }, 0);
    return budgetSpent;
}


// formatting
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

// formatting percentages
export const formatPercentage = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    })
}


//format currency 
export const formatCurrency = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    });

}