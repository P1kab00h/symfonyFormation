class Formulaire extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Valeur par défaut',
            /*            namesss: 'test',*/

            nom: '',
            prenom: '',
            email: ''
        }
        // la method de base pour lier le this du contructeur à la method changeNameForm
        /*this.changeNameForm = this.changeNameForm.bind(this)*/
    }

    // On préférera utiliser une fonction fléché
    changeNameForm = (e) => {
        const target = e.target;
        // const value = target.value;
        const name = target.name;
        this.setState({
            // [name]: value,
            [name]: target.value,
        });
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Création d'une method afin de tester nos champs, on testera le faite que le champ est rempli dans un premier temps et avec une longueur minimum
//
    errorMessageHandler(id, name, minLength = 3) {
        let errorMessage = '';
        let el = document.getElementById(id);
        let errorColor = '#fedede';

        if (el) {
            if (!el.value) {
                el.style.backgroundColor = errorColor;
                errorMessage += `Veuillez saisir le ${name} ! <br />`;
            } else if (el.value.length < minLength) {
                el.style.backgroundColor = errorColor;
                errorMessage += `Le ${name} doit être supèrieur à ${minLength} <br/>`
            } else {
                el.style.backgroundColor = '#90EE90'
            }
        }
        console.log(errorMessage)
        return errorMessage
    }
// dans la continuité nous testons nos différents champs de formulaire
    testField = (e) => {
        e.preventDefault();
        this.errorMessageHandler('nom', this.state.nom);
        this.errorMessageHandler('prenom', this.state.prenom);
        this.errorMessageHandler('email', this.state.email, 8);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div>
                <form action="" method="post">
                    {/*Pour pouvoir modifier le champ du formulaire on indique onChange*/}
                    *<input type="text" name="name" value={this.state.name} onChange={this.changeNameForm}/>

                    {/*Si AUCUN controle n'est necessaire alors on peut déclarer en defaultValue*/}
                    {/*                <input type="text" name="namesss" defaultValue={this.state.namesss} />*/}
                    {/*Ici un clone de notre champ au dessus*/}
                    <input type="text" name="cloneName" value={this.state.name}/>
                </form>
                <div>------------------------------------------------ Other Form
                    -------------------------------------------------------------
                </div>
                <div className="wrapper">
                    <div className="search-input col-3 ">
                        <form method="post" action="" noValidate>
                            <label htmlFor="nom">Entrer le nom</label>
                            <span className="nomDiv alert">
            </span>
                            <input className="form-control border border-secondary m-1" type="text" name="nom" id='nom'
                                   value={this.state.nom} onChange={this.changeNameForm}/>

                            <label htmlFor="prenom">Entrer le prénom</label>
                            <span className="prenomDiv alert"></span>
                            <input className="form-control border border-secondary m-1" type="text" name="prenom"
                                   id="prenom" value={this.state.prenom} onChange={this.changeNameForm}/>

                            <label htmlFor="email">Entrer l'email</label>
                            <span className="emailDiv alert"></span>
                            <input className="form-control border border-secondary m-1" type="email" name="email"
                                   id="email" value={this.state.email} onChange={this.changeNameForm}/>

                            <input
                                type='submit'
                                value='Commander !'
                                className="form-control btn btn-primary border border-primary m-1"
                                //Ici au click nous testons nos champs avec la method 'testField', qui elle même appel la method 'errorMessageHandler'
                                onClick={this.testField}
                            />
                        </form>
                    </div>
                </div>

                <div>------------------------------------------------ Other Form (complet)
                    -------------------------------------------------------------
                </div>
                {/*            <form method="post" action="" noValidate>
                <label htmlFor="nom">Entrer le nom</label>
                <span className="nomDiv alert"></span>
                <input className="border border-secondary col-4" type="text" name="nom" id="nom" value=""/>

                <div>
                    <label htmlFor="invertChoice">Inverser la sélection</label>
                    <input type="checkbox" name="invertChoice" id="invertChoice" value="invertChoice" required/>
                </div>

                <label for="biere">Choisissez votre bière</label>
                <select name="" id="biere">
                    <option value="">Choisissez votre bière</option>
                    <option value="adel">Adelscott</option>
                    <option value="leffe">Leffe</option>
                    <option value="IPA" selected>Punk IPA</option>
                    <option value="bud">Budweiser</option>
                </select>
                <div id="biereResult"></div>

                <select name="" id="cocktail" multiple>
                    <option value="fraise">Fraise</option>
                    <option value="carotte">Carotte</option>
                    <option value="gingembre">Gingembre</option>
                    <option value="tabasco">Tabasco</option>
                </select>
                <div id="cocktailResult"></div>

                <label htmlFor="femme">femme</label>
                <input type="radio" name="sexe" id="femme" value="femme" required/>
                <label htmlFor="homme">homme</label>
                <input type="radio" name="sexe" id="homme" value="homme" required/>
                <div id="sexResult"></div>

                <div className="form-check">
                    <label htmlFor="voiture">voiture</label>
                    <input type="checkbox" name="vehicule" id="voiture" value="voiture" required checked/>
                    <label htmlFor="velo">velo</label>
                    <input type="checkbox" name="vehicule" id="velo" value="velo" required/>
                    <label htmlFor="trottinette">trottinette</label>
                    <input type="checkbox" name="vehicule" id="trottinette" value="trottinette"
                           required checked/>
                    <div id="vehiculeResult"></div>

                </div>


                <input className="btn btn-primary btn-sm border border-primary col-4" type="submit" name=""
                       value="Envoyer"/>
            </form>*/}
            </div>
        );
    }
}

ReactDOM.render(<Formulaire/>, document.getElementById('formulaire'));