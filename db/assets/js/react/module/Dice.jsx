import React, {useState} from "react";

export default function Dice()
{
    let [dicesValue, setDicesValue] = useState('1D6+3D4');
    let [totalValue, setTotalValue] = useState(0);

    let diceList = dicesValue.split('+');

    let changeDicesValue = (e) => {
        setDicesValue(e.target.value);
    }

    // Pour chaque valeur dans dicelist ou i représentant l'index
    let throwDices = (dValues) => {
        let total = 0;
        for(let i in diceList) {
            let diceValues = diceList[i].split('D');

            if (diceValues.length > 1) {
                for(let i = 0; i < diceValues[0]; i++) {
                    total += Math.floor((Math.random() * diceValues[1]) + 1);
                }
            } else {
                total += diceValues[0];
            }
        }
        return total;
    }

    let submitFormDice = (e) => {
        e.preventDefault();

        let jetDes = throwDices(dicesValue);
        setTotalValue(jetDes);
    }

    return <>
        <div className="card">
            <h5 className="card-header">Jet de dé(s)</h5>
            <div className="card-body">
                <div className="col-sm-2">
                    <form action="" method="post" onSubmit={submitFormDice}>
                    <input className="form-control m-1" type="text" name="dice" value={dicesValue} onChange={changeDicesValue} />
                        <button className="col text-white border-white btn btn-dark-moon m-1" type="submit">⚂ Lancer les dés ⚅</button>
                        <p >{(0 === totalValue) ? '' : 'Votre résultat : ' + totalValue}</p>
                        </form>
                </div>
            </div>
        </div>
    </>
}