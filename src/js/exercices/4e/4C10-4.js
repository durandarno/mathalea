import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,choice,combinaisonListes,calcul} from '../../modules/outils.js'
export const titre = 'Quotient de deux entiers relatifs'

/**
* Effectuer une division entre 2 nombres relatifs écrite sous la forme d'une fraction.
*
* * On peut choisir de n'avoir que des tables de multiplications, par défaut il y a aussi des divisions simples par 2, 3 ou 4
* @Auteur Rémi Angot
* 4C10-4
*/
export default function Exercice_quotients_relatifs() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = false;
  this.titre = titre;
  this.consigne = 'Calculer'
  this.spacing = 2;
  this.nbQuestions = 6;

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées
    let listeTypeDeQuestions = combinaisonListes(['-+', '+-', '--', '++'], this.nbQuestions);
    let liste_type_de_nombres = combinaisonListes(['tables', 'horstables'], this.nbQuestions);
    if (this.sup) {
      liste_type_de_nombres = combinaisonListes(['tables'], this.nbQuestions);
    }
    for (let i = 0, a, b, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (liste_type_de_nombres[i] == 'tables') {
        b = randint(2, 9);
        a = b * randint(2, 9);
      } else {
        b = choice([11, 12, 13, 14, 15, 16, 20, 60, 80]);
        a = b * randint(2, 4)
      }
      switch (listeTypeDeQuestions[i]) {
        case '-+':
          a *= -1;
          break;
        case '+-':
          b *= -1;
          break;
        case '--':
          a *= -1;
          b *= -1;
        default:
          break;
      }
      texte = `$\\dfrac{${a}}{${b}}$`
      texteCorr = `$\\dfrac{${a}}{${b}}=${calcul(a / b)}$`

      if (this.listeQuestions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
        this.listeQuestions.push(texte);
        this.listeCorrections.push(texteCorr);
        i++;
      }
      cpt++;
    }
    listeQuestionsToContenu(this);
  }
  this.besoinFormulaireCaseACocher = ['Utiliser seulement les tables de multiplications de 2 à 9'];
}

