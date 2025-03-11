// Budget tracker calculation
document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const expense = parseFloat(document.getElementById('expense').value);

    const remaining = income - expense;
    document.getElementById('budgetResult').innerHTML = `<p>Your remaining budget is: $${remaining.toFixed(2)}</p>`;
});

// Expense tracker functionality
const expenseList = document.getElementById('expenseList');
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    const li = document.createElement('li');
    li.textContent = `${name}: $${amount.toFixed(2)}`;
    expenseList.appendChild(li);

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
});

// Savings goal tracker
const savingsList = document.getElementById('savingsList');
document.getElementById('savingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const goalName = document.getElementById('goalName').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);

    const li = document.createElement('li');
    li.textContent = `${goalName}: Save $${goalAmount.toFixed(2)}`;
    savingsList.appendChild(li);

    document.getElementById('goalName').value = '';
    document.getElementById('goalAmount').value = '';
});
