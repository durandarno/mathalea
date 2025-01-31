import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,choice,arrondi,calcul,texNombre,tex_texte} from '../../modules/outils.js'
export const titre = 'Conversions de volume'

/**
 * Conversions de volumes.
 *
 * Dans la correction, on ne voit qu'une multiplication ou qu'un division pour obtenir le résultat
 *
 * * 1 : Conversions en mètres-cubes avec des multiplications
 * * 2 : Conversions en mètres-cubes avec des divisions
 * * 3 : Conversions en mètres-cubes avec des multiplications ou divisions
 * * 4 : Conversions avec des multiplications ou divisions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 * Référence 6M31
 */
export default function Exercice_conversions_volumes(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre = titre;
  this.consigne = "Compléter";
  this.spacing = 2;
  this.nbColsCorr = 1;

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      ["da", "10\\times10\\times10", 1000],
      ["h", "100\\times100\\times100", 1000000],
      ["k", "1~000\\times1~000\\times1~000", 1000000000],
    ];
    let prefixe_div = [
      ["d", "10\\div10\\div10", 1000],
      ["c", "100\\div100\\div100", 1000000],
      ["m", "1~000\\div1~000\\div1~000", 1000000000],
    ];
    let unite = "m";
    let liste_unite = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    for (
      let i = 0,
      a,
      k,
      div,
      resultat,
      type_de_questions,
      texte,
      texteCorr,
      cpt = 0;
      i < this.nbQuestions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (this.sup < 5) {
        type_de_questions = this.sup;
      } else {
        type_de_questions = randint(1, 4);
      }
      k = randint(0, 2); // Choix du préfixe
      if (type_de_questions == 1) {
        // niveau 1
        div = false; // Il n'y aura pas de division
      } else if (type_de_questions == 2) {
        // niveau 2
        div = true; // Avec des divisions
      } else if (type_de_questions == 3) {
        div = choice([true, false]); // Avec des multiplications ou des divisions
      } else if (type_de_questions == 4) {
        div = choice([true, false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
      }

      if (this.sup2) {
        // Si la case pour les nombres décimaux est cochée
        a = choice([
          arrondi(randint(1, 19) + randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 100, 2),
          arrondi(randint(1, 9) + randint(1, 9) / 10 + randint(1, 9) / 100, 2),
        ]);
        // XX,X 0,X 0,0X X,XX
      } else {
        a = choice([
          randint(1, 9),
          randint(1, 9) * 10,
          randint(1, 9) * 100,
          randint(1, 9) * 10 + randint(1, 9),
        ]);
        // X, X0, X00, XX
      }

      if (!div && type_de_questions < 4) {
        // Si il faut multiplier pour convertir

        resultat = calcul(a * prefixe_multi[k][2]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^3" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^3" +
          "$";
        texteCorr =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^3" +
          " =  " +
          texNombre(a) +
          "\\times" +
          prefixe_multi[k][1] +
          tex_texte(unite) +
          "^3" +
          " = " +
          texNombre(resultat) +
          tex_texte(unite) +
          "^3" +
          "$";
      } else if (div && type_de_questions < 4) {
        k = randint(0, 1); // Pas de conversions de mm^3 en m^3 avec des nombres décimaux car résultat inférieur à 10e-8
        resultat = calcul(a / prefixe_multi[k][2]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^3" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^3" +
          "$";
        texteCorr =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^3" +
          " =  " +
          texNombre(a) +
          "\\div" +
          prefixe_div[k][1] +
          tex_texte(unite) +
          "^3" +
          " = " +
          texNombre(resultat) +
          tex_texte(unite) +
          "^3" +
          "$";
      } else if (type_de_questions == 4) {
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 10 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        let multiplications_par_1000 = "";

        if (randint(0, 1) > 0) {
          switch (ecart) {
            case 1:
              multiplications_par_1000 = "\\times 1~000";
              break;
            case 2:
              multiplications_par_1000 = "\\times 1~000 \\times 1~000";
              break;
            case 3:
              multiplications_par_1000 =
                "\\times 1~000 \\times 1~000 \\times 1~000";
              break;
          }
          resultat = calcul(a * Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            "$";
          texteCorr =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " =  " +
            texNombre(a) +
            multiplications_par_1000 +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " = " +
            texNombre(resultat) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            "$";
        } else {
          switch (ecart) {
            case 1:
              multiplications_par_1000 = "\\div 1~000";
              break;
            case 2:
              multiplications_par_1000 = "\\div 1~000 \\div 1~000";
              break;
            case 3:
              multiplications_par_1000 = "\\div 1~000 \\div 1~000 \\div 1~000";
              break;
          }
          resultat = calcul(a / Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            "$";
          texteCorr =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " =  " +
            texNombre(a) +
            multiplications_par_1000 +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " = " +
            texNombre(resultat) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            "$";
        }
      }
      // else if(type_de_questions==5) { // Pour type_de_questions==5
      // 	prefixe_multi = [['L',0.001],['dL',0.0001],['cL',0.00001],['mL',0.000001]];
      // 	k = randint(0,1)
      // 	resultat = calcul(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
      // 	texte = '$ '+ texNombre(a) + tex_texte(prefixe_multi[k][0]) + ' = \\dotfill ' + tex_texte(unite)  + '^3' + '$';
      // 	texteCorr = '$ '+ texNombre(a) + tex_texte(prefixe_multi[k][0]) + ' =  ' + texNombre(a) + '\\times' + texNombre(prefixe_multi[k][1]) + tex_texte(unite)  + '^3'
      // 		 + ' = ' + texNombre(resultat) + tex_texte(unite)+ '^2' + '$';
      // }

      if (this.listeQuestions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        if (est_diaporama) {
          texte = texte.replace("= \\dotfill", "\\text{ en }");
        }
        if (sortieHtml) {
          texte = texte.replace(
            "\\dotfill",
            "................................................"
          );
        }
        this.listeQuestions.push(texte);
        this.listeCorrections.push(texteCorr);
        i++;
      }
      cpt++;
    }
    listeQuestionsToContenu(this);
  };
  this.besoinFormulaireNumerique = [
    "Niveau de difficulté",
    4,
    "1 : Conversions en mètres-cubes avec des multiplications\n\
2 : Conversions en mètres-cubes avec des divisions\n3 : Conversions en mètres-cubes avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions",
  ];
  this.besoinFormulaire2CaseACocher = ["Avec des nombres décimaux"];
}

