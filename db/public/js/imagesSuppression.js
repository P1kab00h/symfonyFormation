    // au chargement de la page nous lancons le script, celui-ci ecoutera les evenements au click
window.onload = () => {
        // Gestion des liens "Supprimer", ici les éléments avec le selector 'data-delete'
    let links = document.querySelectorAll("[data-delete]")

        // On boucle sur links, il peut y avoir plusieurs image donc il nous faut une boucle
    for(link of links){
            // On écoute le 'click' sur 'link'
        link.addEventListener("click", function(e){
                // On empêche la navigation (on désactive le lien en réalité)
            e.preventDefault()
                // On demande confirmation (pop-in)
            if(confirm("Voulez-vous supprimer cette image ?")){
                // On envoie une requête Ajax vers le href du lien avec la méthode DELETE (sans la bonne method pas possible de fonctionner)
                //Utilisation d'une promesse js (ajax),
                // on récupére le href du lien sur lequel on vient de cliquer
                fetch(this.getAttribute("href"), {
                    method: "DELETE", // notre method 'DELETE'
                    headers: {
                        "X-Requested-With": "XMLHttpRequest", //nos en-tête
                        "Content-Type": "application/json" // ce qu'on envoie
                    },
                    body: JSON.stringify({"_token": this.dataset.token}) // notre body, les données, transformé en json, contenant le token du lien (cf f12 sur une image en edition); donc on ajoute à notre url le token, condition nécessaire pour la suppression (protégé)
                }).then( //après la promesse alors que fait-on ==>
                    // Récupèration de la réponse en JSON
                    response => response.json() // il s'agit en faite d'une nouvelle prommesse
                ).then(data => { // nouveau .then suite à la promesse ci-dessus
                    if(data.success) //soit notre tableau data contient success
                        this.parentElement.remove() // aura pour effet de supprimer l'élement parent de notre lien (soit la div, que l'on supprimera => 'remove()')
                    else
                        alert(data.error) //soit notre tableau data contient error
                }).catch(e => alert(e)) //si jamais la promesse initial n'est pas tenue
            }
        })
    }
}
