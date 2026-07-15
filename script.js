let budget = 0;
let spent = 0;

function setBudget(){

    const value = Number(document.getElementById("budgetInput").value);

    if(value <= 0){
        alert("Enter a valid budget");
        return;
    }

    budget = value;

    updateSummary();
}

function addExpense(){

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if(name === "" || amount <= 0){
        alert("Enter valid expense");
        return;
    }

    spent += amount;

    const li = document.createElement("li");

    li.innerHTML = `
        ${name} - ₹${amount}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector("button").onclick = function(){

        spent -= amount;

        li.remove();

        updateSummary();
    }

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    updateSummary();
}

function updateSummary(){

    document.getElementById("budget").textContent = "₹" + budget;

    document.getElementById("spent").textContent = "₹" + spent;

    document.getElementById("remaining").textContent = "₹" + (budget - spent);
}