import { texteEnCouleurEtGras } from '../../modules/outils.js';
import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,combinaisonListesSansChangerOrdre} from '../../modules/outils.js'
import {mathalea2d,repere2,traceGraphiqueCartesien,point,segment,latexParCoordonnees} from '../../modules/2d.js'
import {randint,calcul,modalYoutube} from '../../modules/outils.js';
import {lampeMessage} from '../../modules/outils.js';
import {enumerateSansPuceSansNumero,texteGras} from '../../modules/outils.js';

export const titre = 'Conjecture de Syracuse'

/**
 * @class Syracuse
 * @classdesc Outils pour les suites de Syracuse 
 * @author Sébastien Lozano
 */

function Syracuse({N}) {

  // Pour déterminer les éléments de la suite de Syracuse jusqu'au premier 1
  this.suiteDeSyracuse = function() {
    let sortie = [N];
    let u = N;
    if (N==1) {
      sortie = [1,4,2,1];
    } else {
      while (u !=1) {
        if (u%2 == 0) {
          u = u/2;        
        } else {
          u = 3*u+1;        
        };
        sortie.push(u);
      };
    }
    return sortie;
  };

  // Pour créer les coordonées à placer dans un graphique cartésien d'une suite de Syracuse
  this.coordonneesSuiteDeSyracuse = function(suite) {
    let sortie = [];
    for (let i=0; i<suite.length;i++) {
      sortie.push([i,suite[i]]);
    };
    return sortie;
  };

  // Pour déterminer la valeur maximale de la suite jusqu'au premier 1
  this.altitudeMaximale = function() {
    let entier = N;    
    return Math.max(...this.suiteDeSyracuse(entier));
  };
  
  // Pour déterminer le nombre d'éléments de la suite de Syracuse jusqu'au premier 1 
  // sans compter la valeur initiale
  this.tempsDeVol = function() {
    let entier = N;    
    return this.suiteDeSyracuse(entier).length-1;
  };

  // Pour déterminer le nombre d'éléments de la suite de Syracuse jusqu'au premier 1
  // qui sont strictement supérieurs à la valeur initiale sans la compter !
  this.tempsDeVolEnAltitude = function() {
    let entier = N;    
    let compteur = 1;
    while (this.suiteDeSyracuse(entier)[compteur]>this.suiteDeSyracuse(entier)[0]) {
      compteur+=1;
    };
    return compteur-1;    
  };
};

function syracuse({ N='1'}) {
  return new Syracuse({ N: N })
};



export default function Exercice_zero_mathalea() {
    "use strict"
    Exercice.call(this)
    this.titre = titre;
    this.consigne = "";        
    this.nbQuestions = 5; // Ici le nombre de questions
    this.nbQuestionsModifiable=false // Active le formulaire nombre de questions
    this.nbCols = 1; // Le nombre de colonnes dans l'énoncé LaTeX
    this.nbColsCorr = 1;// Le nombre de colonne pour la correction LaTeX
    this.pasDeVersionLatex=false; // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX
    this.pas_de_version_HMTL=false; // mettre à true si on ne veut pas de l'exercice en ligne
    this.correctionDetailleeDisponible=true;
    this.listePackages = `bclogo`;
    // Voir la Classe Exercice pour une liste exhaustive des propriétés disponibles.
  
    //  this.sup = false; // A décommenter : valeur par défaut d'un premier paramètre
    //  this.sup2 = false; // A décommenter : valeur par défaut d'un deuxième paramètre
    //  this.sup3 = false; // A décommenter : valeur par défaut d'un troisième paramètre
    
    // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice
    this.nouvelleVersion = function (numeroExercice) {
      this.boutonAide = modalYoutube(
        numeroExercice,
        'https://youtu.be/aRe4ARtQiJY',
        'Conjecture de Syracuse',
        'En vidéo sur Maths-et-tiques'
      );
      // la variable numeroExercice peut être récupérée pour permettre de différentier deux copies d'un même exo
      // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page
      
      this.listeQuestions = [] // tableau contenant la liste des questions 
      this.listeCorrections = []
      let type_de_questions_disponibles=[1,2,3,4,5] // tableau à compléter par valeurs possibles des types de questions
      let listeTypeDeQuestions = combinaisonListesSansChangerOrdre(type_de_questions_disponibles, this.nbQuestions)
      // On choisit un entier pour l'étude de la suite de Syracuse correspondante
      // On contraint le temps de vol entre 5 et 25
      // On contraint l'altitude maximale en dessous de 100
      //let entier = 15;
      let entier = randint(1,200);      
      while (syracuse({N:entier}).tempsDeVol()>25 || syracuse({N:entier}).tempsDeVol()<5 || syracuse({N:entier}).altitudeMaximale()>100) {
        entier = randint(1,200);
      };

      for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {

        // Petite intro connaissances
        let string_intro = `En mathématiques, on appelle conjecture une proposition qui n'est pas encore démontrée.
        On a éventuellement vérifié cette proposition sur beaucoup d'exemples mais cela ne garantit pas qu'elle soit toujours vraie.<br>
        Nous allons nous intéresser à la ${texteGras('conjecture de Syracuse')} découverte par le mathématicien allemand ${texteGras('Lothar Collatz')} en 1930
        à l'université de Syracuse.`
        if (sortieHtml) {
          string_intro +=`<br><br>`;
        } else {
          string_intro += `\\par\\vspace{0.5cm}`
        };
        string_intro += `${texteGras('Algorithme de Syracuse :')}`;
        if (sortieHtml) {
          string_intro +=`<br>`;
        };
        string_intro += `        
        ${enumerateSansPuceSansNumero([
          `On choisit un nombre entier strictement positif.`,
          `$\\leadsto$ Si l'entier choisi est pair on le divise par 2.`,
          `$\\leadsto$ Si l'entier choisi est impair on le multiplie par 3 et on ajoute 1.`,
          `On recommence avec le nouvel entier trouvé tant qu'il ne vaut pas 1.`
        ])}<br>                    
        `;        
        string_intro += `${texteGras('Conjecture de Syracuse :')}<br>`;
        string_intro += `Encore appelée conjecture de ${texteGras('Collatz')}, conjecture ${texteGras('d\'Ulam')},
        conjecture ${texteGras('tchèque')} ou ${texteGras('problème 3x + 1')}, est l'hypothèse mathématique selon laquelle
        la suite de Syracuse de n'importe quel entier strictement positif atteint 1.<br>
        En dépit de la simplicité de son énoncé, cette conjecture défie depuis de nombreuses années les mathématiciens.
        `;

        this.introduction = lampeMessage({
          titre: `Introduction`,
          texte: string_intro,
          couleur: `nombres`
        });

       
        // Pour les objets de mathALEA2D
        let objets_correction= [], objets_correction_plus = [], params_correction = {};        
        // On crée la liste de coordonnées de la suite de Syracuse 
        let coord_Syracuse = syracuse({N:entier}).coordonneesSuiteDeSyracuse(syracuse({N:entier}).suiteDeSyracuse());

        // Pour ajouter le graphique et le repère
        let y_coeff = 5;
        let x_coeff = 2;

        // Le repère
        let r2 = repere2({
          axesEpaisseur : 3,
          grille:false,          
          xMin: -1,
          yMin: -1,
          xMax: syracuse({N:entier}).tempsDeVol()+1,
          yMax: syracuse({N:entier}).altitudeMaximale()+5,         
          yThickMin: 0,
          yThickDistance: 1*y_coeff,
          yUnite:1/y_coeff,
          xUnite:1/x_coeff,
          xThickMin: 0,
          xThickDistance:1*x_coeff,
          xLegende: 'Applications de l\'algorithme',
          xLegendePosition : [calcul((syracuse({N:entier}).tempsDeVol()+2)/x_coeff), 0],
          yLegende: 'Altitude',
          yLegendePosition : [-1, calcul((syracuse({N:entier}).altitudeMaximale()+8)/y_coeff)],                    
        });
        
        // Le graphique cartésien
        let g = traceGraphiqueCartesien(coord_Syracuse,r2)
        
        // On pousse tout ça dans les objets, le repère aussi coño !!!
        objets_correction.push(r2,g);
        
        let A = point(0,syracuse({N:entier}).suiteDeSyracuse()[0]/y_coeff);
        let B = point(syracuse({N:entier}).tempsDeVol()/x_coeff,syracuse({N:entier}).suiteDeSyracuse()[0]/y_coeff);
        let s = segment(A,B,'red');
        //let t = texteParPoint('mon texte',B);
        let t = latexParCoordonnees(
          '\\text{Altitude initiale}',
          syracuse({N:entier}).tempsDeVol()/x_coeff,
          syracuse({N:entier}).suiteDeSyracuse()[0]/y_coeff,
          'red',
          200,
          25,
          'white'
        );
        
        objets_correction_plus.push(r2,g,s,t);

        // On fixe la fenetre pour le SVG/Tikz
        params_correction = {
           xmin: -2,
           ymin: -2,
           xmax:calcul((syracuse({N:entier}).tempsDeVol()+20)/x_coeff),
           ymax: calcul((syracuse({N:entier}).altitudeMaximale()+10)/y_coeff),
           pixelsParCm: 30,           
           //scale: 0.7,
           optionsTikz: [`xscale=${18/calcul((syracuse({N:entier}).tempsDeVol()+20)/x_coeff)}`,`yscale=${7/calcul((syracuse({N:entier}).altitudeMaximale()+10)/y_coeff)}`],
           mainlevee: false 
        }
                

        let string_connaissance={
          cas1 :{
            titre:`Cycle trivial`,
            texte:`Après que le nombre 1 a été atteint, la suite des valeurs (4,2,1) se répète indéfiniment.
            C'est pourquoi on ne s'intéresse qu'à la liste des entiers jusqu'au premier 1.`
          },
          cas2 :{
            titre:`Vol de la suite de Syracuse ${entier}`,
            texte:`Les graphiques font penser à la chute chaotique d'un grêlon ou bien à la trajectoire d'une feuille emportée par le vent.
            Sur le graphique ci-dessous, on peut observer le vol de la suite de Syracuse ${entier}.`
          },
          cas3 :{
            titre:`Altitude maximale de la suite de Syracuse ${entier}`,
            texte:`Si on file la métaphore, la valeur maximale atteinte par les valeurs trouvées serait désignée par l'altitude maximale du vol. `
          },
          cas4 :{
            titre:`Temps de vol de la suite de Syracuse ${entier}`,
            texte:`C'est le plus petit nombre de fois qu'il faut appliquer l'algorithme pour atteindre la valeur 1 pour la première fois.`
          },
          cas5 :{
            titre:`Temps de vol en altitude de la suite de Syracuse ${entier}`,
            texte:`C'est le plus petit nombre de fois qu'il faut appliquer l'algorithme avant que la valeur suivante soit strictement inférieure
            à la valeur initiale. ${texteGras('Attention')} cela ne signifie pas que l'on ne repassera jamais au dessus de la valeur initiale.
            `
          },
        };

        switch (listeTypeDeQuestions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...
          case 1: //étude du cas N = 1
            texte = `On choisit le nombre entier 1. Quels sont tous les entiers déterminés par cet algorithme ?`
            texteCorr = `Si on choisit le nombre 1 au départ la suite de Syracuse est : ${texteGras(syracuse({N:1}).suiteDeSyracuse())}<br><br>`;            
            texteCorr+= texteEnCouleurEtGras('Remarque - '+string_connaissance.cas1.titre)+' : '+ string_connaissance.cas1.texte;              
            break;
          case 2: //suite de Syracuse pour un entier aléatoire          
            texte = `Déterminer tous les entiers issus de cet algorithme lorsqu'on choisit ${entier}.`;
            texteCorr = `La suite de Syracuse du nombre ${entier} est : <br>
            ${texteGras(syracuse({N:entier}).suiteDeSyracuse())}<br><br>`;            
            texteCorr+= texteEnCouleurEtGras('Remarque - '+string_connaissance.cas2.titre)+' : '+ string_connaissance.cas2.texte+'<br><br>';              

            if (this.correctionDetaillee) {
              texteCorr += mathalea2d(params_correction, objets_correction)
            }            
            break;
          case 3://altitude max
            texte = `Quelle est la valeur maximale de cette liste d'entiers ?`;
            texteCorr = `La valeur maximale atteinte vaut : ${texteGras(syracuse({N:entier}).altitudeMaximale())}<br><br>`;            
            texteCorr+= texteEnCouleurEtGras('Remarque - '+string_connaissance.cas3.titre)+' : '+ string_connaissance.cas3.texte;              
            break;
          case 4://temps de vol
            texte = `Combien de fois au minimum faut-il appliquer l'algorithme pour trouver la valeur 1 ?`;
            texteCorr = `Il faut  appliquer au minimum ${texteGras(syracuse({N:entier}).tempsDeVol())} fois l'algorithme pour trouver la valeur 1.<br><br>`;            
            texteCorr+= texteEnCouleurEtGras('Remarque - '+string_connaissance.cas4.titre)+' : '+ string_connaissance.cas4.texte;              
            break;            
          case 5://temps de vol en altitude
            texte = `Au bout de combien d'application minimum de l'algorithme la valeur calculée suivante sera-t-elle strictement inférieure à la valeur initiale ?`;
            //`Quelle est le nombre d'éléments de cette liste d'entiers qui sont strictement supérieurs à la valeur initiale, sans compter cette valeur initiale ?`;            
            if (syracuse({N:entier}).tempsDeVolEnAltitude()==0) {
              texteCorr = `Dès la première application de l'algorithme la valer trouvée est inférieure à la valeur initiale.`
            } else {
              texteCorr = `Il faut appliquer au minimum ${texteGras(syracuse({N:entier}).tempsDeVolEnAltitude())} fois l'algorithme pour que la valeur calculée suivante soit strictement inférieure à la valeur initiale.`
            };
            texteCorr +=`<br><br>`;
            //texteCorr += `${syracuse({N:entier}).tempsDeVolEnAltitude()}<br><br>`;            
            texteCorr+= texteEnCouleurEtGras('Remarque - '+string_connaissance.cas5.titre)+' : '+ string_connaissance.cas5.texte+'<br><br>';              

            if (this.correctionDetaillee) {
              texteCorr += mathalea2d(params_correction, objets_correction_plus)
            } 
            break;
        };         

        if (this.listeQuestions.indexOf(texte) == -1) {
          // Si la question n'a jamais été posée, on la stocke dans la liste des questions
          this.listeQuestions.push(texte);
          this.listeCorrections.push(texteCorr);
          i++;
        }
        cpt++;
      }
      listeQuestionsToContenu(this); // On envoie l'exercice à la fonction de mise en page
    };
  // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants
  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.
  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.
  
  //	this.besoinFormulaireNumerique = ['Type de questions', 3, `1 : Perpendiculaires\n 2 : Parallèles\n 3 : Mélange`]
  //  this.besoinFormulaire2Numerique = ["Type de cahier",3,`1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`];
  // this.besoinFormulaire3CaseACocher =['figure à main levée',true]
  
  } // Fin de l'exercice.
  