export default class Des
{
    constructor(elDice, elThrowDice, elResult)
    {
        this.elDice = elDice;
        this.elThrowDice = elThrowDice;
        this.elResult = elResult;

        this.dice = '';
    }

    ev()
    {
        this.elThrowDice.addEventListener('click', () => this.render());
    }

    render()
    {
    this.dice = this.elDice.value;
    console.log(this.dice = document.getElementById('dice').value);
    this.elResult.textContent = this.calcul();
    }

    calcul()
    {
        let total = 0;

        let diceToLowerCase = this.dice.toLowerCase();

        let diceList = diceToLowerCase.split('+');

// Pour chaque valeur dans dicelist ou i représentant l'index
        for(let i in diceList) {
            let diceValues = diceList[i].split('d');
/*console.log(diceValues);*/
            if (diceValues.length > 1) {
                for(let i = 0; i < diceValues[0]; i++) {
                    total += Math.floor((Math.random() * diceValues[1]) + 1);
                }
            } else {
                total += diceValues[0];
            }
        }
        return total
    }
}

function monAlert()
{
    alert(1);
}
export {Des, monAlert};

