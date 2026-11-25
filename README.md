# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is a personal budget and expense tracking application.
It helps users manage their monthly budget, record expenses,
calculate spending, and monitor their remaining balance.

## Improvements Made This Week

The following interactive features were added:

- Users can set their monthly budget.
- Users can add new expenses.
- Users can select expense categories.
- Users can delete existing expenses.
- Total expenses are calculated automatically.
- Remaining balance updates dynamically.
- The application provides budget warnings.
- Dashboard information updates without refreshing the page.

## JavaScript Concepts Used

### 1. Conditional Statements

Conditional statements are used to make decisions.

Examples include:

- Checking whether expense inputs are valid.
- Checking whether the budget has been exceeded.
- Displaying warnings when spending exceeds the budget.
- Displaying success messages when spending is within budget.

### 2. Arrays

An array named `expenses` stores multiple expense records.

Each record contains:

- Expense ID
- Expense name
- Expense category
- Expense amount

The `push()` method adds new expenses, while the `filter()`
method removes deleted expenses.

### 3. Loops

A `for` loop processes all expense records to calculate
the total expenses and display transactions.

### 4. DOM Manipulation

DOM manipulation updates webpage content dynamically.

The project uses:

- `document.getElementById()`
- `document.createElement()`
- `innerHTML`
- `textContent`
- `appendChild()`

These methods update dashboard values and display expense records.

### 5. Events and User Interactions

Event listeners allow users to interact with the application.

The project uses:

- `submit` events to add expenses.
- `submit` events to set the monthly budget.
- `click` events to delete expenses.

### 6. Functions

Reusable functions are used to:

- Calculate total expenses.
- Calculate remaining balance.
- Format currency.
- Display expenses.
- Update dashboard information.
- Provide budget feedback.

## Challenges and Solutions

### Challenge 1: Updating Total Expenses

**Solution:** Created a function that uses a loop to calculate
the total amount of all expenses.

### Challenge 2: Updating Dashboard Information

**Solution:** Used DOM manipulation to update dashboard values
whenever expenses are added or deleted.

### Challenge 3: Validating User Input

**Solution:** Used conditional statements to prevent empty,
negative, or invalid expense amounts.

### Challenge 4: Managing Multiple Expenses

**Solution:** Used an array of objects to store expense records
and the `push()` and `filter()` methods to manage them.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Git and GitHub

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Set your monthly budget.
5. Add and delete expenses.
6. Watch the dashboard update automatically.

## Project Files

- `index.html` - Application structure.
- `style.css` - Application styling.
- `script.js` - Interactive functionality.
- `README.md` - Project documentation.

## Author

SpendWise Budget Tracker Project