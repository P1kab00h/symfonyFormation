import React, {useEffect, useState} from "react";
import {Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

export default function MeetPage() {
    let [fifille, setFifille] = useState();
    let [isLoaded, setIsLoaded] = useState(false);
    let [ajaxStopRequest, setAjaxStopRequest] = useState(0);
    let [lengthGirl, setLengthGirl] =useState(0);

    let listToDate = async () => {
        if (!ajaxStopRequest) {
            setAjaxStopRequest(1);
            let response = await fetch("/reactEvalMeet", {method: "get"});
            if (response.ok) {
                let listOfPotentialDate = await response.json();
                setFifille(listOfPotentialDate);
                setIsLoaded(true);
            } else {
                setFifille(response.status);
                setIsLoaded(true);
            }
        }
    }
    useEffect(listToDate);

    function girlsList() {
        if (!isLoaded) {
            return <div className='load-6'>Loading...</div>;
        } else {




            let listDate = fifille.results;
            let girl = listDate[lengthGirl];
                return <div className="card">
                    <h2 className="card-header">
                        <Figure>
                            <FigureImage
                                width={80}
                                height={80}
                                alt="60x60"
                                src={girl.picture.medium}
                                border-radius={50}
                                />
                            <FigureCaption>
                                Niceee {girl.name.first}
                            </FigureCaption>
                        </Figure>
                        <p>{girl.name.title} {girl.name.first} {girl.name.last}</p>
                    </h2>
                    <div className="card-body">
                        <p>{girl.email}, {girl.cell}</p>
                    </div>
                </div>

            }
        }


    return <>
        {girlsList()}

        <button onClick={() => {setLengthGirl(lengthGirl + 1)}}>Next -></button>
    </>
}