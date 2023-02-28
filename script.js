

let num1 = 0.1 ;
let num2 = 0.2 ;
let resultat = num1 + num2;
alert(resultat);

let x = "1";
let y = 2;
let result = parseInt(x) + y;
alert(result);



function calculateFiles() {
    const FLASH_DRIVE_SIZE = 1024; // 1 Гб = 1024 Мб
    const FILE_SIZE = 820; // розмір файлу в Мб
    let flashDriveSize = parseInt(document.getElementById("flash-drive-size").value);
    let numFiles = Math.floor((flashDriveSize * FLASH_DRIVE_SIZE) / FILE_SIZE);
    document.getElementById("result-files").textContent = `На флешку поміститься ${numFiles} файлів розміром ${FILE_SIZE} Мб.`;
}




function calculateChocolates() {
    let money = parseInt(document.getElementById("money").value);
    let price = parseInt(document.getElementById("price").value);
    let numChocolates = Math.floor(money / price);
    let change = money % price;
    document.getElementById("result-chocolates").textContent = `Ви можете купити ${numChocolates} шоколадок, і у вас залишиться ${change} грн. здачі.`;
}




function reverseNumber() {
    const number = document.getElementById("numberInput").value;
    
    // Проверка, что введенное значение является трехзначным числом
    if (number < 100 || number > 999 || isNaN(number)) {
      alert("Ні ні ні і ще раз ні ... Я сказав ТРИ цифри");
      return;
    }
    
    // Разбиваем число на цифры и меняем их порядок
    const digits = number.toString().split("").reverse();
    const reversedNumber = digits.join("");
    
    // Выводим результат на экран
    const resultElement = document.getElementById("result-num");
    resultElement.innerHTML = `Я перевернув ${number} і вийшло ${reversedNumber}.`;
  }


  function calculateBank() {
    const deposit = document.getElementById("deposit").value;
    const interest = deposit * 0.05;
    const resultElement = document.getElementById("result-bank");
    resultElement.innerHTML = `Нараховані %: ${interest} грн`;
  }