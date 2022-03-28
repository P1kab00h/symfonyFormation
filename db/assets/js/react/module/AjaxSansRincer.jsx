import React, {useEffect, useState} from "react";

export default function AjaxSansRincer() {
    let [image, setImage] = useState('');

    let [voitures, setVoitures] = useState('');

    let [ajaxTimeOut, setAjaxTimeOut] = useState(0);



    // async function ajax() {
    //     //pour récupérer des données en Ajax on fetch(), ici on place un await, il faudra donc préciser à la fonction async
    //     let response = await fetch("/upload/My_Monkey_darkBlueII.png", {method: "post"}); // la method sera importante dans le cas d'utilisations de formulaire par exe
    //     if (response.ok) {
    //         // console.log(response)
    //         setImage(await response.url); // si la réponse est 'ok : true' alors on récupére l'url (ici le lien de l'image)
    //     } else {
    //         setImage(response.status); // si notre réponse est 'ok : false' dans ce cas on retourne le status (404, 800 ...)
    //     }
    // }


    let listVoiture = async () => {
        if (!ajaxTimeOut) {
            setAjaxTimeOut(1);
            //pour récupérer des données en Ajax on fetch(), ici on place un await, il faudra donc préciser à la fonction async
            let response = await fetch("/ajaxSansRincer", {method: "get"}); // la method sera importante dans le cas d'utilisations de formulaire par exe, ici nous voulons du get pour la requete en BDD
            if (response.ok) {
                //console.log(await response.json())
                let test = await response.json();
                setVoitures(test);
                // setVoitures(await JSON.parse(response.json()));
            } else {
                setVoitures(response.status); // si notre réponse est 'ok : false' dans ce cas on retourne le status (404, 800 ...)
            }
        }
    }
    useEffect(listVoiture);
    // le useEffect sur les hooks va être similaire au componentDidMount() pour les classes
    // Il va entre autre servir à "prévenir" REACT de l'utilisations d'un service externe pouvant avoir un effet sur notre page
    // useEffect(ajax);




    // console.log(testSuite());

    return <>
        {voitures.length && voitures.map((voiture) =>
            <div className="card">
                <h2 className="card-header">{voiture.nom}</h2>
                {voiture.uploadImages.map((img) => {
                    return <img src={"upload/" + img.name}/>
                })
            }
            </div>)
        }

    </>
}