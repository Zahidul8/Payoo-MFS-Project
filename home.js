function getElement(id) {
    const element = document.getElementById(id);
    return element;

}
// displayContent function
function displayContent(id) {
    const sections = document.getElementsByClassName('sections');
    for (const section of sections) {
        section.style.display = 'none';

    }
    document.getElementById(id).style.display = 'block';
}

// active style function
function activeStyle(id) {
    const cards = document.getElementsByClassName('cards');
    
    for (const card of cards) {
        card.classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}

const transactionHistory = [];


// add money section
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const bank = getElement('add-money-select-bank');
        const bankValue = bank.value;
        const accountNumber = getElement('add-money-account-number');
        const accountNumberValue = accountNumber.value;
        const amount = getElement('add-money-amount');
        const amountValue = parseInt(amount.value);
        const pinNumber = getElement('add-money-pin');
        const pinNumberValue = pinNumber.value;
        const availableAmount = parseInt(getElement('available-amount').innerText);
        if (bank.value === "" || accountNumberValue.length !== 11 || amountValue <= 0 || pinNumberValue.length !== 4) {
            alert('Please Enter valid information');
            return;
        }

        const total = availableAmount + amountValue;

        document.getElementById('available-amount').innerText = total;

        bank.value = "";
        accountNumber.value = '';
        amount.value = '';
        pinNumber.value = "";

        const data = {
            name: 'Add Money',
            date: new Date().toLocaleTimeString()
        }
        transactionHistory.push(data);


    })

// cashout section 
document.getElementById('cashout-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const agentNumber = getElement('cashout-agent-number');
        const agentNumberValue = agentNumber.value;
        const cashoutAmount = getElement('cashout-amount');
        const cashoutAmountValue = parseInt(cashoutAmount.value);
        const cashoutPin = getElement('cashout-pin');
        const cashoutPinValue = cashoutPin.value;
        const availableAmount = parseInt(getElement('available-amount').innerText);

        if (agentNumberValue.length !== 11 || cashoutAmountValue <= 0 || cashoutAmountValue > availableAmount || cashoutPinValue.length !== 4) {
            alert('Please give valid information');
            return;
        }

        const total = availableAmount - cashoutAmountValue;
        document.getElementById('available-amount').innerText = total;
        agentNumber.value = '';
        cashoutAmount.value = "";
        cashoutPin.value = "";

        const data = {
            name: 'Cash Out',
            date: new Date().toLocaleTimeString()
        }
        transactionHistory.push(data);

    })

// transfer money section 
document.getElementById('transfer-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = getElement('user-account-number');
        const accountNumberValue = accountNumber.value;
        const transferAmount = getElement('transfer-amount');
        const transferAmountValue = parseInt(transferAmount.value);
        const transferPin = getElement('transfer-pin');
        const transferPinValue = transferPin.value;
        const availableAmount = parseInt(getElement('available-amount').innerText);

        if (accountNumberValue.length !== 11 || transferAmountValue <= 0 || transferAmountValue > availableAmount || transferPinValue.length !== 4) {
            alert('Please give valid information');
            return;
        }

        const total = availableAmount - transferAmountValue;
        document.getElementById('available-amount').innerText = total;

        accountNumber.value = "";
        transferAmount.value = "";
        transferPin.value = "";

        const data = {
            name: 'Transfer Money',
            date: new Date().toLocaleTimeString()
        }
        transactionHistory.push(data);

    })
// Get bonus section 
document.getElementById('get-bonus-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const getBonus = getElement('bonus-coupon');
        const getBonusValue = getBonus.value;
        if (!getBonusValue) {
            alert('Please give valid information');
            return;
        }

        alert('You got bonus');
        getBonus.value = "";


    })

// pay bill section 
document.getElementById('pay-now-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const selectBank = getElement('pay-bill-select-bank');
        const selectBankValue = selectBank.value;
        const billerAccountNumber = getElement('biller-account-number');
        const billerAccountNumberValue = billerAccountNumber.value;
        const payBillAmount = getElement('pay-bill-amount');
        const payBillAmountValue = parseInt(payBillAmount.value);
        const payBillPin = getElement('pay-bill-pin');
        const payBillPinValue = payBillPin.value;
        const availableAmount = parseInt(getElement('available-amount').innerText);

        if (!selectBankValue || billerAccountNumberValue.length !== 11 || payBillAmountValue <= 0 || payBillAmountValue > availableAmount || payBillPinValue.length !== 4) {
            alert('Please give valid information');
            return;
        }
        const total = availableAmount - payBillAmountValue;
        document.getElementById('available-amount').innerText = total;

        selectBank.value = '';
        billerAccountNumber.value = '';
        payBillAmount.value = '';
        payBillPin.value = '';

        const data = {
            name: 'Pay Bill',
            date: new Date().toLocaleTimeString()
        }
        transactionHistory.push(data);

    })


// transaction section 
document.getElementById('transactions-card')
    .addEventListener('click', function () {

    })






// add money card
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        displayContent('add-money-section')
        activeStyle('add-money-card');
    })
// cashout card
document.getElementById('cashout-card')
    .addEventListener('click', function () {
        displayContent('cashout-section')
        activeStyle('cashout-card');
    })

// transfer money card 
document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        displayContent('transfer-money-section');
        activeStyle('transfer-money-card');
    })
// get bonus card 
document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        displayContent('get-bonus-section');
        activeStyle('get-bonus-card');
    })

// pay bill card 
document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        displayContent('pay-bill-section');
        activeStyle('pay-bill-card');
    })

// transactions card
document.getElementById('transactions-card')
    .addEventListener('click', function () {
         displayContent('transactions-section');
        activeStyle('transactions-card');


        const transactionContainer = getElement('transactions-container');
        transactionContainer.innerHTML = "";

        for (const transaction of transactionHistory) {
            const div = document.createElement('div');
            div.innerHTML = `<div class="bg-white p-[16px] flex justify-between items-center rounded-[12px] mb-[10px]">
                    <div class=" flex items-center gap-[10px]">

                        <div class="bg-[#F4F5F7] p-[10px] rounded-[50%]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div>
                            <h1 class="dark-1 font-semibold">${transaction.name}</h1>
                            <p>Today ${transaction.date}</p>
                        </div>

                    </div>

                    <div><i class='bx bx-dots-vertical-rounded text-[20px]'></i></div>
                </div>`;
            transactionContainer.appendChild(div);
        }

    })

// latest history 
document.getElementById('latest-history')
.addEventListener('click', function() {
    displayContent('latest-transactions-section');
    const latestTransactionContainer = getElement('latest-transactions-container');
    latestTransactionContainer.innerHTML = "";

    const reversedHistory = transactionHistory.reverse();

    for (const transaction of reversedHistory) {
        const div = document.createElement('div');
         div.innerHTML = `<div class="bg-white p-[16px] flex justify-between items-center rounded-[12px] mb-[10px]">
                    <div class=" flex items-center gap-[10px]">

                        <div class="bg-[#F4F5F7] p-[10px] rounded-[50%]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div>
                            <h1 class="dark-1 font-semibold">${transaction.name}</h1>
                            <p>Today ${transaction.date}</p>
                        </div>

                    </div>

                    <div><i class='bx bx-dots-vertical-rounded text-[20px]'></i></div>
                </div>`;
            latestTransactionContainer.appendChild(div);
    }
})





