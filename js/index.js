const sectionSelectBtn = document.getElementById("section-select-btn");
const calculateBtn = document.getElementById("calculate");
const savingBtn = document.getElementById("calculate-saving");



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
        savingAmount.innerText = mySaving;

        const balanceAfterSaving = balance - savingAmount.innerText;
        remainingBalance.innerText = balanceAfterSaving;
    })

})