    var deposit = 0.0;
    var withdraw = 0.0;
    var balance = 1240.00;

    const blc = document.getElementById("bltxt");
    const dpt = document.getElementById("dptxt");
    const wdt = document.getElementById("wdtxt");
    blc.innerHTML = "$ " + balance.toString();

    const btnLogin = document.getElementById("btn_login");
    btnLogin.addEventListener("click", function() {
        const loginArea = document.getElementById("login_area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction_area");
        transactionArea.style.display = "block";
    });

    function stoppedTyping(txtField) {
        //alert("'"+txtField.id.toString()+"'");
        if (txtField.value.length > 0) {
            if (txtField.id.toString() == "wdinpt") {
                document.getElementById('wdbtn').disabled = false;
            } else {
                document.getElementById('dpbtn').disabled = false;
            }
        } else {
            if (txtField.id.toString() == "wdinpt") {
                document.getElementById('wdbtn').disabled = true;
            } else {
                document.getElementById('dpbtn').disabled = true;
            }
        }
    }

    const btnDeposit = document.getElementById("dpbtn");
    btnDeposit.addEventListener("click", function() {
        var depositAmountInput = document.getElementById("dpinpt").value;
        var parsedDepositedAmount = parseFloat(depositAmountInput);
        deposit = deposit + parsedDepositedAmount;
        balance = balance + parsedDepositedAmount;

        blc.innerHTML = "$ " + balance.toString();
        dpt.innerHTML = "$ " + deposit.toString();
        document.getElementById("dpinpt").value = "";
        document.getElementById('dpbtn').disabled = true;
        document.getElementById('wdbtn').disabled = true;
    })




    const btnWithdraw = document.getElementById("wdbtn");
    btnWithdraw.addEventListener("click", function() {
        var withdrawAmountInput = document.getElementById("wdinpt").value;
        var parsedWithdrawAmount = parseFloat(withdrawAmountInput);
        var remAmount = balance - parsedWithdrawAmount;
        if (remAmount < 0) {
            window.confirm("Not sufficient Balance!!!");
            document.getElementById("wdinpt").value = "";
        } else {
            withdraw = withdraw + parsedWithdrawAmount;
            balance = balance - parsedWithdrawAmount;

            blc.innerHTML = "$ " + balance.toString();
            wdt.innerHTML = "$ " + withdraw.toString();
            document.getElementById("wdinpt").value = "";
        }
        document.getElementById('dpbtn').disabled = true;
        document.getElementById('wdbtn').disabled = true;
    })