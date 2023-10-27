const Selection = document.getElementById("choix");
const listItems = document.getElementById("liste");

fetch(
  "https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-atlas_regional-effectifs-d-etudiants-inscrits/records?limit=20&refine=annee_universitaire%3A%222022-23%22&refine=sexe_de_l_etudiant%3A%22Feminin%22&refine=geo_nom%3A%22Toulouse%22"
)
  .then((response) => response.json())
  .then((results) => {
    //console.log(results);
    const data1 = results.results;
    const options = data1.map((result) => {
      const option = document.createElement("option");
      option.textContent = result.regroupement;
      return option;
    });

    options.forEach((option) => Selection.appendChild(option));

    Selection.addEventListener("click", function () {
      listItems.innerHTML = "";
      setTimeout(() => {
        fetch(
          "https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-atlas_regional-effectifs-d-etudiants-inscrits/records?limit=20&refine=annee_universitaire%3A%222022-23%22&refine=sexe_de_l_etudiant%3A%22Feminin%22&refine=geo_nom%3A%22Toulouse%22"
        )
          .then((response) => response.json())
          .then((results) => {
            console.log(results);
            listItems.innerHTML = "";
            const ligne = results.results.map((liste) => {
              const li = document.createElement("li");
              li.textContent = liste.effectif;
              return li;
            });
            console.log(ligne);
            ligne.forEach((li) => listItems.appendChild(li));
          });
      }, 2000);
    });
  });
