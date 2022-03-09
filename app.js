
let btn = document.querySelector('.newDie');
let container = document.querySelector('.container');
let btn2 = document.querySelector('.rerollDie');
let btn3 = document.querySelector('.sumDie');


document.addEventListener('DOMContentLoaded', function () {

    let counter = 1;
    let newArr = [];

    btn.addEventListener('click', function () {
        new Die();
        counter++;
    })

    btn2.addEventListener('click', function () {
        newArr.forEach(die => die.roll())
    })

    btn3.addEventListener('click', function () {
        let sum = 0;
        newArr.forEach(total => sum += total.value)
        Swal.fire(`Dice sum = ${sum}!`);
    })

    // let answer = newArr.reduce((acc, val) => {
    //             return acc + val;
    //        })
    // console.log(answer);

    class Die {
        constructor() {

            console.log(this.addArr());
            this.div = document.createElement('div');
            this.div.className = 'box';
            this.div.id = counter;
            container.appendChild(this.div);
            this.div.innerText = this.value;
            this.roll();

            this.div.addEventListener('click', () => this.roll());

            this.div.addEventListener('dblclick', function () {
                let rmv = newArr.indexOf(this);
                newArr.splice(rmv)
                this.remove();
                console.log(newArr)

            })
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            if (this.value === 1) {
                this.div.textContent = '\u2680';
            } if (this.value === 2) {
                this.div.textContent = '\u2681'
            } if (this.value === 3) {
                this.div.textContent = '\u2682'
            } if (this.value === 4) {
                this.div.textContent = '\u2683'
            } if (this.value === 5) {
                this.div.textContent = '\u2684'
            } if (this.value === 6) {
                this.div.textContent = '\u2685'
            }
        }    //this.div.textContent = this.value;

        addArr() {
            let reRollArr = this;
            newArr.push(reRollArr)
            return newArr
        }
    }
})































