import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,choice,arrondi,texNombre,texNombrec,texFraction,tex_texte,calcul} from '../../modules/outils.js'
/**
 * Conversions  mètres, litres, grammes, octets (et euros pour la version LaTeX) en utilisant le préfixe pour déterminer la multiplication ou division à faire.
 *
 * * 1 : De da, h, k vers l'unité de référence
 * * 2 : De d, c, m vers l'unité de référence
 * * 3 : Multiplications ou divisions vers l'unité de référence
 * * 4 : Conversions d'octets
 * * 5 : Un mélange de toutes les conversions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
export default function Exercice_conversions(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre =
    "Conversions de longueurs, masses, contenance, prix ou unités informatiques";
  this.consigne = "Compléter";
  this.spacing = 2;
  this.correction_avec_des_fractions = false;

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      ["da", 10],
      ["h", 100],
      ["k", 1000],
    ]; //['M',1000000],['G',1000000000],['T',1000000000000]];
    let prefixe_div = [
      ["d", 10],
      ["c", 100],
      ["m", 1000],
    ]; //['$\\mu{}$',1000000]];
    for (let i = 0,
      a,
      k,
      div,
      resultat,
      unite,
      type_de_questions,
      texte,
      texteCorr,
      liste_unite_info,
      cpt = 0; i < this.nbQuestions && cpt < 50;) {
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
        liste_unite_info = ["o", "ko", "Mo", "Go", "To"];
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
        if (k < 2) {
          // Choix de l'unité
          unite = choice(["m", "L", "g"]);
        } else if (k == 2) {
          if (sortieHtml) {
            unite = choice(["m", "L", "g"]); // pas de signe € pour KaTeX
          } else {
            unite = choice(["m", "L", "g", "€"]);
          }
        } else {
          unite = "o";
        }
        resultat = calcul(a * prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texteCorr =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " =  " +
          texNombre(a) +
          "\\times" +
          texNombre(prefixe_multi[k][1]) +
          tex_texte(unite) +
          " = " +
          texNombrec(resultat) +
          tex_texte(unite) +
          "$";
      } else if (div &&
        type_de_questions < 4 &&
        this.correction_avec_des_fractions) {
        unite = choice(["m", "L", "g"]);
        resultat = calcul(a / prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texteCorr =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " =  " +
          texFraction(texNombre(a), texNombre(prefixe_div[k][1])) +
          tex_texte(unite) +
          " = " +
          texNombre(resultat) +
          tex_texte(unite) +
          "$";
      } else if (div && type_de_questions < 4) {
        unite = choice(["m", "L", "g"]);
        resultat = calcul(a / prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texteCorr =
          "$ " +
          texNombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " =  " +
          texNombre(a) +
          "\\div" +
          texNombre(prefixe_div[k][1]) +
          tex_texte(unite) +
          " = " +
          texNombrec(resultat) +
          tex_texte(unite) +
          "$";
      } else {
        // pour type de question = 4
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 1000 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        if (randint(0, 1) > 0) {
          resultat = calcul(a * Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite_info[unite2]) +
            " = \\dotfill " +
            tex_texte(liste_unite_info[unite1]) +
            "$";
          texteCorr =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite_info[unite2]) +
            " =  " +
            texNombre(a) +
            "\\times" +
            texNombre(Math.pow(10, 3 * ecart)) +
            tex_texte(liste_unite_info[unite1]) +
            " = " +
            texNombrec(resultat) +
            tex_texte(liste_unite_info[unite1]) +
            "$";
        } else {
          resultat = calcul(a / Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite_info[unite1]) +
            " = \\dotfill " +
            tex_texte(liste_unite_info[unite2]) +
            "$";
          texteCorr =
            "$ " +
            texNombre(a) +
            tex_texte(liste_unite_info[unite1]) +
            " =  " +
            texNombre(a) +
            "\\div" +
            texNombre(Math.pow(10, 3 * ecart)) +
            tex_texte(liste_unite_info[unite2]) +
            " = " +
            texNombrec(resultat) +
            tex_texte(liste_unite_info[unite2]) +
            "$";
        }
      }

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
    5,
    "1 : De da, h, k vers l'unité de référence\n\
2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions",
  ];
  this.besoinFormulaire2CaseACocher = ["Avec des nombres décimaux"];
}
