const assistantBtn = document.getElementById("assistant-btn");
const calculateBtn = document.getElementById("calculate");
const savingBtn = document.getElementById("calculate-saving");
const historyList = document.getElementById("history-list");

calculateBtn.addEventListener("click", ()=>{
    const income = getElementById("income");
    const software = getElementById("software");
    const course = getElementById("course");
    const internet = getElementById("internet");

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;
    
    const totalExpensesElement = document.getElementById("total-expenses");
    const myBalanceElement = document.getElementById("balance");
    const result = document.getElementById("results");

    result.classList.remove("hidden");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    myBalanceElement.innerText = balance;

    const history = document.createElement("div");
    history.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    history.innerHTML = `

        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p>Income: ${income.toFixed(2)}</p>
        <p>Expense: ${totalExpenses.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p>
    `
    historyList.prepend(history);
})

savingBtn.addEventListener("click", ()=>{
    const savingAmount = document.getElementById("savings-amount");

    const income = getElementById("income");
    const software = getElementById("software");
    const course = getElementById("course");
    const internet = getElementById("internet");
    const saving = getElementById("saving");
    const remainingBalance = document.getElementById("remaining-balance");

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;

    const mySaving = balance * (saving / 100);
    savingAmount.innerText = mySaving.toFixed(2);

    const balanceAfterSaving = balance - savingAmount.innerText;
    remainingBalance.innerText = balanceAfterSaving.toFixed(2);
})



const calculateSection = document.getElementById("calculate-section");
const historyBtn = document.getElementById("history");
const historySection = document.getElementById("history-section");

historyBtn.addEventListener("click", (event)=>{
    event.target.classList.add("bg-blue-700", "text-white", "rounded-r-md");
    assistantBtn.classList.remove("bg-blue-700", "text-white", "rounded-r-md");
    calculateSection.classList.add("hidden");
    historySection.classList.remove("hidden");
});

assistantBtn.addEventListener("click", (event)=>{
    event.target.classList.add("bg-blue-700", "text-white", "rounded-l-md");
    historyBtn.classList.remove("bg-blue-700", "text-white", "rounded-r-md");
    calculateSection.classList.remove("hidden");
    historySection.classList.add("hidden");
})