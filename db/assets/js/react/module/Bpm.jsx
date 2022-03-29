import React, {useState} from "react";

export default function Bpm() {

    let [count, setCount] = useState(0);
    let [timeFirst, setTimeFirst] = useState(0);
    let [timePrevious, setTimePrevious] = useState(0);
    let [bpm, setBpm] = useState(0);


    let bpmCount = () => {
        let timeClick = new Date();
        let time = timeClick.getTime();
        if (0 === count) {
            // pour le premier temps on récupére notre 'time' => correspond à notre premier click
            setTimeFirst(time);
            // on incrémente donc le count
            setCount(count + 1);
        } else {
            // on fait notre moyenne de BPM, ou 60000 correspond à une minute
            let bpmAverage = (60000 * count) / (time - timeFirst);
            // J'arrondie mon résultat avec Math.round()
            let bpm = Math.round(bpmAverage);
            // Si l'on veut un résultat plus précis on peut faire le calcul suivant, on obtiendra alors un résultat à virgule
            // let bpm = Math.round(bpmAverage * 100) / 100;

            // J'attribue à mon hook bpm la valeur calculé dans la variable bpm
            setBpm(bpm);
            // on incrémente notre compteur de click, utilie pour le calcul et display le nombres de click
            setCount(count + 1);
            // J'attribue à timePrevious la valeur de time (qui devient donc le temps précédent, le nouveau click enregistrant un nouveau time => timeFirst)
            setTimePrevious(time);
        }
    }

    // fonction pour réinitialiser nos compteurs, je redéfini simplement toutes nos hooks à 0 (valeur initial)
    let resetBpmCount = () => {
        setCount(0);
        setTimeFirst(0);
        setTimePrevious(0);
        setBpm(0);
    }


    return <>
        <div className="card">
            <h2 className="card-header">Metronome BPM</h2>
            <div className="card-body">
                <div tabIndex='0' onKeyDown={() => bpmCount()} className="col-sm-4">
                    <p>
                        <button onClick={() => bpmCount()}
                                className="col text-white border-white btn btn-dark-moon m-1">Let's Rock'N Roll
                        </button>
                        <button onClick={() => resetBpmCount()}
                                className="col text-white border-white btn btn-dark-moon m-1">Reset BPM
                        </button>
                    </p>
                    <h3> Votre rythme : {bpm}</h3>
                    <p>Vous avez cliquez : {count}</p>
                </div>
            </div>
        </div>
    </>
}