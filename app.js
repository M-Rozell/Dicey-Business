
let btn = document.querySelector('.newDie');
let container = document.querySelector('.container');
let btn2 = document.querySelector('.rerollDie');


document.addEventListener('DOMContentLoaded', function () {

    btn.addEventListener('click', function () {
        new Die();
        counter++;

    })

    btn2.addEventListener('click', function () {
        newArr.forEach(die => die.roll())
    })

    let counter = 1;
    let newArr = [];

    class Die {
        constructor() {

            console.log(this.addArr());
            this.div = document.createElement('div');
            this.div.className = 'box';
            this.div.id = counter;
            container.appendChild(this.div);
            this.div.innerText = this.value;
            this.roll();
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            // if (this.value === 1) {

            // }
            this.div.textContent = this.value;

        }

        addArr() {
            let reRollArr = this;
            newArr.push(reRollArr)
            return newArr
        }
    }
})





























