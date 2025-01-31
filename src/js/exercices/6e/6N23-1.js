import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,choice,combinaisonListes,calcul,texNombre,texFraction} from '../../modules/outils.js'
export const titre = 'Différentes écritures des nombres décimaux'

/**
 * Compléter des égalités sur les nombres décimaux
 * * n/100 = .../10 + .../100
 * * n/100 = .../100 + .../10
 * * .../100 = u+ d/10 + c/100
 * * u = .../10
 * * u = .../100
 * * n/10 = ... + .../10 + .../100
 * @Auteur Rémi Angot
 * 6N23-1
 */
export default function Exercice_differentes_ecritures_nombres_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = titre;
  this.consigne = "Compléter l'égalité puis donner l'écriture décimale.";
  this.spacing = 2;
  this.spacingCorr = 2;

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées
    let type_de_questions
    let type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];
    let listeTypeDeQuestions = combinaisonListes(type_de_questions_disponibles, this.nbQuestions);
    if (this.nbQuestions == 3) listeTypeDeQuestions = combinaisonListes([choice([1, 2, 6]), 3, choice([4, 5])], this.nbQuestions);
    for (
      let i = 0, texte, texteCorr, cpt = 0;
      i < this.nbQuestions && cpt < 50;

    ) {
      type_de_questions = listeTypeDeQuestions[i];
      let u = randint(2, 9); //chiffre des unités
      let d = randint(1, 9); //chiffre des dixièmes
      let c = randint(1, 9); //chiffre des centièmes
      let n = 100 * u + 10 * d + c;
      let ecriture_decimale;
      switch (type_de_questions) {
        case 1: // n/100 = .../10 + .../100
          ecriture_decimale = texNombre(calcul(u + d / 10 + c / 100));
          texte = `$${texFraction(n, "100")}=\\ldots\\ldots+${texFraction(
            "",
            10
          )}+${texFraction("", 100)}=\\ldots$`;
          texteCorr = `$${texFraction(n, "100")}=${u}+${texFraction(
            d,
            "10"
          )}+${texFraction(c, "100")}=${ecriture_decimale}$`;

          break;
        case 2: // n/100 = .../100 + .../10
          ecriture_decimale = texNombre(calcul(u + d / 10 + c / 100));
          texte = `$${texFraction(n, "100")}=\\ldots\\ldots+${texFraction(
            "",
            100
          )}+${texFraction("", 10)}=\\ldots$`;
          texteCorr = `$${texFraction(n, "100")}=${u}+${texFraction(
            c,
            100
          )}+${texFraction(d, 10)}=${ecriture_decimale}$`;
          break;
        case 3: // .../100 = u+ d/10 + c/100
          ecriture_decimale = texNombre(calcul(u + d / 10 + c / 100));
          texte = `$${texFraction("", "100")}=${u}+${texFraction(
            d,
            "10"
          )}+${texFraction(c, "100")}=\\ldots$`;
          texteCorr = `$${texFraction(n, "100")}=${u}+${texFraction(
            d,
            "10"
          )}+${texFraction(c, "100")}=${ecriture_decimale}$`;
          break;
        case 4: // u = .../10
          texte = `$${u}=${texFraction("", "10")}$`;
          texteCorr = `$${u}=${texFraction(10 * u, "10")}$`;
          break;
        case 5: // u = .../100
          texte = `$${u}=${texFraction("", "100")}$`;
          texteCorr = `$${u}=${texFraction(100 * u, "10")}$`;
          break;
        case 6: // n/10 = ... + .../10 + .../100
          ecriture_decimale = texNombre(calcul(n / 10));
          texte = `$${texFraction(n, 10)}=\\ldots\\ldots+${texFraction(
            "",
            10
          )}+${texFraction("", 100)}=\\ldots$`;
          texteCorr = `$${texFraction(n, 10)}=${u * 10 + d}+${texFraction(
            c,
            10
          )}+${texFraction(0, 100)}=${ecriture_decimale}$`;
          break;
      }

      if (this.listeQuestions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions.push(texte);
        this.listeCorrections.push(texteCorr);
        i++;
      }
      cpt++;
    }
    listeQuestionsToContenu(this);
  };
}





