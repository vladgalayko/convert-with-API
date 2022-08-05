    window.onload = function () {
        $.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function(data) {
            console.log(data) // Получаем курс валют
            let s1 = data[25].rate; // Получаем Доллар
            let s2 = data[32].rate; // Получаем Евро
            let c = {'USD':s1, 'EUR':s2, 'UAH':'1'}; // Устанавливаем курс валют

        let val = document.getElementById('val'); // Получаем элемент ввода данных
        let currency1 = document.getElementById('cur1'); // Получаем первый селект
        let currency2 = document.getElementById('cur2'); // Получаем второй селект
        let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
        function summ() { // Делаем функцию
            let z = 0;
            if(currency1.value === currency2.value){ // Если оба значения в селектах равны
                result.innerText = val.value; // То просто вписываем данные из поля ввода
            } else {
                if(currency1.value != 'UAH'){ // Если не равны рублю, то
                    z = val.value*c[currency1.value]; // Переводим сумму в рубли
                    result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
                } else { // Если не равны
                    result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
                }
            }
        }
        val.oninput = function () { // При вводе данных в поле вызываем функцию.
            summ();
        };
        currency1.onchange = function () { // При смене первого селекта вызываем функцию.
            summ();
        };
        currency2.onchange = function () { // При смене второго селекта вызываем функцию.
            summ();
        }

        });
    }