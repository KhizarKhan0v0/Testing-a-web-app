let balance = Number(0);

function depositMenu1() {
    document.getElementById('depositMenu').style.display = 'block';
    document.getElementById('mainScreen').style.display="none";
    document.getElementById('withdrawMenu').style.display='none';
    document.getElementById('displayMoney').style.display='none';

    console.log('depositMenu1 called');



}
function withdrawMenu1() {
    document.getElementById('depositMenu').style.display = 'none';
    document.getElementById('mainScreen').style.display="none";
    document.getElementById('withdrawMenu').style.display='block';
    document.getElementById('displayMoney').style.display='none';

    console.log('Withdraw if called');



}
function showMainMenu(){
    document.getElementById('mainScreen').style.display='block';
    document.getElementById('depositMenu').style.display='none';
    document.getElementById('withdrawMenu').style.display='none';
    document.getElementById('displayMoney').style.display='none';

}
function displayMenu1(){
    document.getElementById('mainScreen').style.display='none';
    document.getElementById('depositMenu').style.display='none';
    document.getElementById('withdrawMenu').style.display='none';
    document.getElementById('displayMoney').style.display='block';
    showbalance();
}

function depositMoney() {
    let ammount = Number(document.getElementById("amountD").value);
    if (ammount > 0) {
        balance = balance + ammount;
        console.log(balance);
        let message = document.getElementById('MessageD');
        message.innerHTML = (`Rs. ${ammount} is Added to your Account\nYour Balance is : ${balance}`)
    }
    else {
        balance = balance + 0;
    }
    let timeout=setTimeout(showMainMenu, 1500);
}
function withdrawMoney() {
    let ammount = Number(document.getElementById("amountW").value);
    if (ammount <= balance && ammount >=0) {
        balance = balance - ammount;
        console.log(balance);
        let message = document.getElementById('MessageW');
        message.innerHTML = (`Rs. ${ammount} is Withdrawn from your Account\nYour Balance is : ${balance}`)
    }
    else {
        balance = balance + 0;
    }
    let timeout=setTimeout(showMainMenu, 1500);
}


function showbalance(){
    document.getElementById("Disp").innerHTML=(`Current Balance is Rs. ${balance}`);
    let timeout=setTimeout(showMainMenu, 1500);
}