// step-1: deposit button add:
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: create the deposit amount
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3:get the current deposit total
    const depositTotalelement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalelement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // step-4: add numbers
    const currentdepositTotal = previousdepositTotal + newDepositAmount
    depositTotalelement.innerText = currentdepositTotal;
    // step-5:get balance current total (string to num)
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



    // step-7:Deposit field clear:
    depositField.value = '';


    // console.log(depositTotal);
})