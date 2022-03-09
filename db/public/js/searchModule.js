let suggestionsArray = [];


const searchWrapper = document.querySelector(".search-input");

let firstNameSearchbar = document.getElementById('search-tool');
let oUserSearchDiv = document.getElementById('userSearchDiv')


let inputBox = searchWrapper.querySelector("input");
let oSuggBox = searchWrapper.querySelector(".autocom-box");
let icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let weblink;


export function searchModule() {






    fetch("https://randomuser.me/api/?results=10&nat=fr")
        //le then attend toujours une fonction (ici fléché)
        .then((r) => {
            if (r.ok) {
                //la encore le then attend une fonction ici la function search() (pas besoin de paranthèse, c'est le callback)
                r.json().then((listUsers) => search(listUsers, oUserSearchDiv));
            } else {
                oUserSearchDiv.innerText = 'Il y a une erreur<br>code : ' + r.status;
            }
        }).catch((e) => {
        oUserSearchDiv.textContent = e.message;
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function search(listUsers, el) {
    firstNameSearchbar.addEventListener("keyup", (e) => {
        let userData = e.target.value; // information saisie par l'utilisateur dans le champ de recherche

        let emptyArray = [];
        let tab = listUsers.results.filter((user) => {
            return user.name.first.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0 || user.name.last.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0
        })


        if (userData) {

            emptyArray = suggestionsArray.filter((data) => {
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().indexOf(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data) => {
                // passing return data inside li tag
                return data = `<li>${data}</li>`;
            });


            console.log(emptyArray)

            searchWrapper.classList.add("active"); //show autocomplete box
            showSuggestions(emptyArray);
            let allList = oSuggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                //adding onclick attribute in all li tag
                allList[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchWrapper.classList.remove("active"); //hide autocomplete box
        }

        show(tab, el);
    });

    show(listUsers.results, el)
};

function show(listUsers, el) {

//methode pour vider notre affichage
    while (el.firstChild) {
//        console.log(el.firstChild)
        el.firstChild.remove();
    }

    // ici le map attend une fonction (callback)
    listUsers.map((user) => {
        let oUserSearchDiv = document.getElementById('userSearchDiv')
        let oUserCard = document.createElement('div')
        let oTitleListUsers = document.createElement('h5');
        let oDivCardContent = document.createElement('div');
        let oFigure = document.createElement('figure');
        let oImg = document.createElement('img');
        let oFigCap = document.createElement('figcaption');
        let oInfo = document.createElement('div');

        oUserCard.className = "card randomuserCard";
        oTitleListUsers.className = "card-header";
        oDivCardContent.className = "card-content col-sm-8";
        oUserSearchDiv.appendChild(oUserCard);
        oUserCard.appendChild(oTitleListUsers);
        oUserCard.appendChild(oDivCardContent);
        oDivCardContent.appendChild(oFigure);
        oFigure.appendChild(oImg);
        oFigure.appendChild(oFigCap);
        oDivCardContent.appendChild(oInfo);

        oImg.src = `${user.picture.large}`;
        oImg.alt = `Une photo de ${user.name.title}, ${user.name.first} ${user.name.last}`;
        oFigCap.innerHTML = `${user.name.title}, ${user.name.first} ${user.name.last}`;
        oTitleListUsers.innerHTML = `${user.name.title}, ${user.name.first} ${user.name.last}`;
        oInfo.innerHTML = `
            Prenom : ${user.name.first}, <br>
            Nom : ${user.name.last}, <br>
            Mail : <a href="mailto:${user.email}">${user.email}</a>, <br>
            Numéro de téléphone : <a href="tel:${user.cell}">${user.cell}</a>, <br>       
            `;

        suggestionsArray.push(user.name.first);
        suggestionsArray.push(user.name.last);
    });

    suggestionsArray = suggestionsArray.map((data) => {
        return data = `<li>${data}</li>`;
    })
}



function showSuggestions(list) {
    let listData;
    let userValue;
    if (!list.length) {
        userValue = inputBox.value;


        listData = `<li>${userValue}</li>`;
    } else {

        listData = list.join('');

    }

    oSuggBox.innerHTML = listData;
}

