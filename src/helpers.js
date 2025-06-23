export const waait = () => new Promise(resolve => setTimeout(resolve, Math.random() * 800));

const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetsLength * 34 } 65% 50%`
}

// Local Storage 
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
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

// delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key);
}

