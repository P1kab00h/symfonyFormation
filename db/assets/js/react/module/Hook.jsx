//pour l'import par défaut on a React (default donc pas de {}), le {useState} lui est importé mais n'est pas en default
// pour rappel un seul peut être default
import React, {useState} from "react";


export default function Hook() {
    // on crée un état pour notre hook
    let [isToggleLight, setLight] = useState(true);
    // le premier argument défini l'état initial, le second attend une fonction pour agir sur le premier par exemple

    let [monTableau, setMonTableau] = useState(['Laurent', 'Orfeo']);

    let displayList = monTableau.map((name) =>
        <li>{name}</li>);


    let [count, setCount] = useState(0);

    // Ici nous allons préparer un champ input, avec son fonctionnement complet (soit la possibilitée de le mettre à jour)
    let [monInput, setMonInput] = useState("test");
    let changeMonInput = (e) => {
        setMonInput(e.target.value);
    }


    return <>

        <div className="card">
            <h2 className="card-header">Hello first Hook !</h2>

            <div className="card-body">
                <div className="col-sm-2">


                    <p> La lumière est : {isToggleLight ? 'allumé ' : 'éteinte '}
                        <button onClick={() => setLight(!isToggleLight)}>{isToggleLight ? '🔅' : '🌚'}</button>
                    </p>

                    <p>{monTableau[0]}</p>

                    <div>
                        <p>Vous avez cliqué {count} fois <button
                            onClick={() => setCount(count + 1)}>Cliquez-ici</button>
                        </p>
                    </div>

                    {/*Notre input aura pour valeur inital {monInput}, au changement on executera la fonction (fléché) {changeMonInput}*/}
                    <div><input className="form-control" type="text" value={monInput} onChange={changeMonInput}/></div>

                    <ul>{displayList}</ul>
                </div>
            </div>
        </div>

    </>
}