export function ajaxSansFrotter() {
    //let returnData = [];
    let oUserSearchDiv = document.getElementById('userSearchDiv')

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

function search(listUsers, el) {

    let firstNameSearchbar = document.getElementById('search-tool');

    firstNameSearchbar.addEventListener("keyup", (e) => {
        let tab = listUsers.results.filter((user) => {
            return user.name.first.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0 || user.name.last.toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0
        })
        /*
               let repeat = listUsers.results.length;

                let tab = [];

                for (let i = 0; i < repeat; i++) {
                    if (listUsers.results[i].name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0) {
                        // console.log(listUsers.results[i].name.first);
                        tab.push(listUsers.results[i]);
                    }
                }
        */
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


        // arrayUserDataFirstname.push(user.name.first);
    })

}


/*
export function ajaxSansFrotter() {

    let returnData = [];

    fetch("https://randomuser.me/api/?results=100&nat=fr",
        {
            method: "get"
        }).then((r) => {
        if (r.ok) {
            r.json().then((listUsers) => {
                for (let i = 0; i < listUsers.results.length; i++) {
                    document.getElementById('cardHeaderRandomUser' + [i]).innerHTML = `<p> ${listUsers.results[i].name.title} ${listUsers.results[i].name.first} ${listUsers.results[i].name.last}</p>`;
                    document.getElementById('randomuser' + [i]).innerHTML = `<img src=${listUsers.results[i].picture.large} alt="${listUsers.results[i].gender}"> <br> <p>${listUsers.results[i].email}<br>
${listUsers.results[i].cell}</p>`;
                    // on renseigne notre array pour faire la recherche dessus;
                    returnData.push(listUsers.results[i].name.first);
                    /!*console.log(returnData);*!/
                }
            });
        } else {
            document.getElementById('randomuser' + [i]).textContent = 'Some mistake seems to be here';
        }
    }).catch((e) => {
        document.getElementById('randomuser' + [i]).textContent = e.message;
    });
}*/
