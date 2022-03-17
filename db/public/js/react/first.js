//import {Fragment} from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////
let first = React.createElement('div', {className: 'container-sm'}, null, React.createElement('h1', null, `Bonjour Alkas`,));

ReactDOM.render(first, document.getElementById('first'));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////
function dynTime() {
    let time = new Date().toLocaleTimeString();
    let displayTime =
        <>
            <div> il est {time} </div>
        </>

    ReactDOM.render(displayTime, document.getElementById('time'))
}

setInterval(dynTime, 1000);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////
function ActionLink() {
    function handleClick(e) {
        e.preventDefault(); // nous empêchons le comportement par défaut
        eClick.push(e.timeStamp); // pour chaque click nous allons push dans une array le timeStamp (valeur différente à chaque click)
        // la function isClick() nous permettra de modifier le message afficher à chaque click

        function IsClick() {
            return <>
                <div>
                    vous avez clickez ! {eClick.length} fois
                    <p>Le time Stamp au click est le suivant : {e.timeStamp}</p>
                </div>
            </>
        }

        ReactDOM.render(<IsClick/>, document.getElementById('testresult'))
    }

    return (
        <a href="#" onClick={handleClick}> Clique ici</a>
    )
        ;
}

// soit eClick une array contenant les timeStamp successif, en regardant sa length nous savons combien de fois le lien a été clické
let eClick = [];

// appel de la fonction ActionLink() dans unevariable actionLink
let actionLink = ActionLink();
// c'est cette variable que nous allons appeler pour notre render
ReactDOM.render(actionLink, document.getElementById('test'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////
// afin de définir un composant React avec une class on l'étend avec React.Component
class Toggle extends React.Component {
    // Nous intialisons un état local (this.state) et nous lions aussi des méthodes (this.handleClick = this.handleClick.bind(this))
    // le contructor est alors nécessaire
    constructor(props) {
        super(props);
        // On ne doit pas appeler setState dans le constructor, on affecte donc l'état initial avec this.state
        // ici isToggleDay sera à true, soit 'Jour ☼' sur notre bouton
        this.state = {
            isToggleDay: true,
            toto: 'test',
            };


        ///////////////////CAS 1//////////////avec le this.handleClick = this.handleClick.bind(this); /////////////////////////////
        // Ici une des méthodes possible consiste à lier (bind) la fonction handleClick avec le this de la class Toggle
        // en effet par défaut le this de handleClick sera sur la fonction elle-même est donc undifined
        // this.handleClick = this.handleClick.bind(this);

    }

    // la fonction handleClick sera lancé au click sur le bouton
    // nous l'avons lié avec le this de la fonction
    handleClick = () => {
        //setState() va plannifier les modifications de l'état du composant
        // Ici par exemple nous allons jongler entre le true et le false pour isToggleDay
        this.setState(state => ({
            isToggleDay: !state.isToggleDay,
            toto: !state.toto
        }));

    }

    ///////////////////CAS 1//////////////avec le this.handleClick = this.handleClick.bind(this); /////////////////////////////
    // le render() est la seule méthode à définir les autres sont optionnel
    /*    render() {
            return (
                // on retournera donc un bouton qui appelera notre method handleClick (au click)
                <button onClick={this.handleClick}> {/!* Cette methode d'écriture sera utiliser dans le cs ou on lie avec le this avec bind dans le constructeur *!/}
                    {/!*Un opérateur ternaire si isToggleDay est à true alors le résultat sera jour, si c'est faux alors nuit *!/}
                    {this.state.isToggleDay ? 'Jour ☼' : 'Nuit ☾'}
                </button>
            );
        }*/

    ///////////////////CAS 2///////////////////avec l'utilisation d'une fonction fléché dans le render ///////////////////////////////////////////
    // le render() est la seule méthoe à définir les autres sont optionnel
    render() {
        return (
            // on retournera donc un bouton qui appelera notre method handleClick (au click)
            // ici on utilise une fonction félché (n'a pas de this par défaut, donc prend celui de la class)
            <button onClick={this.handleClick}>
                {/*Un opérateur ternaire si isToggleDay est à true alors le résultat sera jour, si c'est faux alors nuit */}
                {this.state.isToggleDay ? 'Jour ☼' : 'Nuit ☾'}
                {this.state.toto ? 'test' : `t'es naze`}
            </button>
        );
    }
}

// le rendu de notre JSX sera possible dans le html avec la ligne suivante
ReactDOM.render(<Toggle/>, document.getElementById('root'));
