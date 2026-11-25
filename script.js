// ======================================
// SPENDWISE - INTERACTIVE BUDGET TRACKER
// ======================================

// 1. VARIABLES

let monthlyBudget = 0;
let monthlyIncome = 5000;

// 2. ARRAY: STORE EXPENSE RECORDS

let expenses = [
    {
        id: 1,
        name: "Groceries",
        category: "Food",
        amount: 450
    },
    {
        id: 2,
        name: "Bus Fare",
        category: "Transport",
        amount: 180
    },
    {
        id: 3,
        name: "House Rent",
        category: "Rent",
        amount: 900
    },
    {
        id: 4,
        name: "Movie",
        category: "Entertainment",
        amount: 120
    },
    {
        id: 5,
        name: "Electricity",
        category: "Utilities",
        amount: 200
    }
];

// 3. SELECT DOM ELEMENTS

const totalIncomeElement = document.getElementById("total-income");
const totalExpensesElement = document.getElementById("total-expenses");
const remainingBalanceElement = document.getElementById("remaining-balance");

const expenseListElement = document.getElementById("expense-list");
const emptyMessageElement = document.getElementById("empty-message");

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const budgetMessage = document.getElementById("budget-message");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

// 4. FORMAT CURRENCY

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

// 5. CALCULATE TOTAL EXPENSES USING A LOOP

function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 6. CALCULATE REMAINING BALANCE

function calculateRemainingBalance() {
    return monthlyIncome - calculateTotalExpenses();
}

// 7. UPDATE DASHBOARD

function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateRemainingBalance();

    totalIncomeElement.textContent = formatCurrency(monthlyIncome);
    totalExpensesElement.textContent = formatCurrency(totalExpenses);
    remainingBalanceElement.textContent = formatCurrency(remainingBalance);

    if (remainingBalance < 0) {
        remainingBalanceElement.style.color = "#d33b3b";
    } else {
        remainingBalanceElement.style.color = "#245b4a";
    }

    displayExpenses();
    updateBudgetMessage();
}

// 8. DISPLAY EXPENSES USING A LOOP

function displayExpenses() {
    expenseListElement.innerHTML = "";

    if (expenses.length === 0) {
        emptyMessageElement.textContent = "No expenses added yet.";
        return;
    }

    emptyMessageElement.textContent = "";

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(expense.name)}</td>
            <td>${escapeHTML(expense.category)}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td>
                <button class="delete-btn" data-id="${expense.id}">
                    Delete
                </button>
            </td>
        `;

        expenseListElement.appendChild(row);
    }
}

// 9. PREVENT HTML INJECTION IN USER INPUT

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

// 10. ADD NEW EXPENSE USING FORM EVENT

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // CONDITIONAL STATEMENTS: VALIDATE INPUT

    if (name === "" || category === "") {
        alert("Please fill in all expense fields.");
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    // ADD EXPENSE TO ARRAY

    const newExpense = {
        id: Date.now(),
        name: name,
        category: category,
        amount: amount
    };

    expenses.push(newExpense);

    expenseForm.reset();

    updateDashboard();
});

// 11. DELETE EXPENSE USING EVENT DELEGATION

expenseListElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const expenseId = Number(event.target.dataset.id);

        expenses = expenses.filter(function(expense) {
            return expense.id !== expenseId;
        });

        updateDashboard();
    }
});

// 12. SET MONTHLY BUDGET

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        budgetMessage.textContent = "Please enter a valid budget.";
        budgetMessage.className = "danger";
        return;
    }

    monthlyBudget = enteredBudget;

    budgetInput.value = "";

    updateBudgetMessage();
});

// 13. CONDITIONAL BUDGET FEEDBACK

function updateBudgetMessage() {
    if (monthlyBudget === 0) {
        budgetMessage.textContent = "Please enter your monthly budget.";
        budgetMessage.className = "";
        return;
    }

    const totalExpenses = calculateTotalExpenses();
    const remainingBudget = monthlyBudget - totalExpenses;

    if (remainingBudget < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your budget by " +
            formatCurrency(Math.abs(remainingBudget));

        budgetMessage.className = "danger";

    } else if (remainingBudget === 0) {
        budgetMessage.textContent =
            "Your budget has been fully used.";

        budgetMessage.className = "warning";

    } else {
        budgetMessage.textContent =
            "You are within budget. Remaining budget: " +
            formatCurrency(remainingBudget);

        budgetMessage.className = "success";
    }
}

// 14. INITIALIZE APPLICATION

updateDashboard();