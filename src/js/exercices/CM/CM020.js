import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu} from '../../modules/outils.js'
import TrouverSolutionMathador from './_TrouverSolutionMathador.js'
export const titre = 'Générateur de compte est bon version semi-aléatoire'

/**
 * @Auteur Jean-Claude Lhote
  * référence CM020
 * Dans cette version, il est possible de choisir 1,2,3,4 ou 5 nombres du tirage et de contraindre la cible entre deux valeurs
 */
export default function Le_compte_est_bonV4() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = titre;
  this.consigne =
    "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
  this.nbQuestions = 1;
  this.nbCols = 2;
  this.nbColsCorr = 2;
  this.sup = 1;

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées
    let solution_mathador = [];
    let tirage, solution, expression, min, max, texte, texteCorr;
    let minmax = [];
    if (!this.sup2) {
      // Si rien n'est saisi
      min = 0;
      max = 100;
    } else {
      if (typeof this.sup2 == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        min = 0;
        max = this.sup2;
      } else {
        minmax = this.sup2.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
        min = minmax[0];
        max = minmax[1];
      }
    }
    if (!this.sup) {
      // Si rien n'est saisi
      solution_mathador = TrouverSolutionMathador(min, max);
    } else {
      if (typeof this.sup == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        solution_mathador = TrouverSolutionMathador(min, max, this.sup);
      } else {
        tirage = this.sup.split("-"); // Sinon on crée un tableau à partir des valeurs séparées par des -
        for (let i = 0; i < tirage.length; i++) tirage[i] = parseInt(tirage[i]);
        solution_mathador = TrouverSolutionMathador(min, max, ...tirage);
      }
    }

    tirage = solution_mathador[0];
    solution = solution_mathador[1];
    expression = solution_mathador[3];

    texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;
    texteCorr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;
    texteCorr += `ou $${solution_mathador[4]}$.<br>`;
    texteCorr += `En effet : <br>`;
    for (let i = 0; i < 4; i++) {
      texteCorr += `$${solution_mathador[2][i]}$<br>`;
    }
    this.listeQuestions.push(texte);
    this.listeCorrections.push(texteCorr);

    listeQuestionsToContenu(this);
  };
  this.besoinFormulaireTexte = [
    "Choix des nombres du tirage (de aucun à cinq)",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoinFormulaire2Texte = [
    "Intervalle pour la cible (ou rien pour cible non contrainte)",
    "Minimum-Maximum (éviter de trop contraindre la cible, cela peut bloquer le programme)",
  ]; // Texte, tooltip

  // this.besoinFormulaire2Numerique = ['Limite supérieure',100];
}
