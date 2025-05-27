function afficherEndroitsNaturels() {
  alert("Voici quelques endroits naturels :\n- Forêt Amazonienne\n- Mont Everest\n- Baie d'Halong");
}

document.addEventListener("DOMContentLoaded", function() {
  const bouton = document.getElementById("btn-endroits");
  if (bouton) {
    bouton.addEventListener("click", afficherEndroitsNaturels);
  }
});
