//pour l'import par défaut on a React (default donc pas de {}), le {useState} lui est importé mais n'est pas en default
// pour rappel un seul peut être default
import React, {useState} from "react";

export default function Calc() {
// déclaration de nos variable de formulaires
    let [firstValue, setFirstValue] = useState('');
    let [operateur, setOperateur] = useState('');
    let [secondValue, setSecondValue] = useState('');

    let [result, setResult] = useState();


    let changeFirstValue = (e) => {
        setFirstValue(e.target.value);
    }
    let changeSecondValue = (e) => {
        setSecondValue(e.target.value);
    }
    let changeOperateur = (e) => {
        /*        let value = e.target.value;
                setOperateur(value)*/
        setOperateur(e.target.value);
    }


    let calc = (valFirst, ope, valSec) => {
        let result = 0;
        switch (ope) {
            case '+':
                result = Number(valFirst) + Number(valSec);
                break;
            case '-':
                result = Number(valFirst) - Number(valSec);
                break;
            case '*':
                result = Number(valFirst) * Number(valSec);
                break;
            case '/':
                if (0 === valSec) {
                    result = 'Division par zéro impossible';
                } else if (Infinity === valFirst / valSec) {
                    result = 'Division par zéro impossible';
                } else {
                    result = Number(valFirst) / Number(valSec);
                }
        }
        /*        alert('Le résultat est le suivant : ' + result);*/
        return result
    }

    let submitFormCalc = (e) => {
        e.preventDefault();

        let calcul = calc(firstValue, operateur, secondValue)
        setResult(calcul);
    }

    return <>
        <div className="card">
            <h2 className="card-header">Calculatrice</h2>

            <div className="card-body">
                <div className="col-sm-2">

                    {/* Les deux arguments OBLIGATOIRE en REACT sont action & method*/}
                    <form action="" method="post" onSubmit={submitFormCalc}>
                        <div><input className="form-control m-1" type="number" value={firstValue}
                                    onChange={changeFirstValue}/></div>
                        <div>
                            <label>
                                <select className="form-control m-1" name="operateur" id="operateur-select" value={operateur}
                                        onChange={changeOperateur}>
                                    <option value="">-- opérateur --</option>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/">/</option>
                                </select>
                            </label>
                        </div>
                        <div><input className="form-control m-1" type="number" value={secondValue} onChange={changeSecondValue}/></div>
                        <button className="col text-white border-white btn btn-dark-moon m-1" type="submit">Calculer !</button>

                        <div> {isNaN(result) ? '' : 'Resultat :' + result}</div>

                    </form>

                    {/*        <ResultState/>*/}
                </div>
            </div>
        </div>


    </>
}




