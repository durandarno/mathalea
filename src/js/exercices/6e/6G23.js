import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,choice,lettreDepuisChiffre,texNombre} from '../../modules/outils.js'
import {point,labelPoint,rotation,mathalea2d,afficheMesureAngle,sens_de_rotation, homothetie,demiDroiteAvecExtremite,cibleCouronne, texteParPoint,similitude} from '../../modules/2d.js'

export const titre = 'Construire un angle de mesure donnée'

/**
 * Construire un angle
 * @Auteur Jean-Claude Lhote
 * Référence 6G23
 */
export default function Construire_un_angle() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = titre;
  this.consigne = "";
  this.nbQuestions = 2;
  this.nbQuestionsModifiable=true
  this.nbCols = 2;
  this.nbColsCorr = 2;
  this.sup=1;
  this.video="cU80v1p6mMI"

  this.nouvelleVersion = function () {
    this.listeQuestions = []; // Liste de questions
    this.listeCorrections = []; // Liste de questions corrigées

      let angle,anglerot,Apos,Bpos,Cpos,fleche,signe=[],p,texte,texteCorr,A,B,s,C,s2
      let labels,labels2,secteur,cible,xMin,xMax,yMin,yMax,objets_enonce,objets_correction
      for (let i=0;i<this.nbQuestions;i++){
        signe.push((-1)**i)
      }
      for (let i=0;i<this.nbQuestions;i++){

      if (this.sup==1) {
          angle = randint (1,17,9)*10
      } 
      else if (this.sup==2){
          angle = randint(3,34,18)*5
      }
      else {
          angle = randint(12,168,90)
      }
      angle=angle*signe[i]
      anglerot=randint(-50,50)
      p = ['x',lettreDepuisChiffre(randint(1,16)),'y'];
    texte = `Construire l'angle $\\widehat{${p[0] + p[1] + p[2]}}$ de mesure $${texNombre(Math.abs(angle))}\\degree$ en tournant dans le sens `
    if (angle<0) {
      texte+=`des aiguilles d'une montre.<br>`
    }
    else {
      texte+=`inverse des aiguilles d'une montre.<br>`
    }
      A = point(0, 0);
      B = point(5, 0);
      B=rotation(B,A,anglerot)
      Apos=texteParPoint(p[1],similitude(B,A,-90,0.1),'milieu')
      Bpos=texteParPoint(p[0],similitude(A,homothetie(B,A,0.9),signe[i]*90,0.1),'milieu')
      
      s = demiDroiteAvecExtremite (A, B);
      s.epaisseur=2
      C = rotation(B,A,angle);
      Cpos=texteParPoint(p[2],similitude(A,homothetie(C,A,0.9),-signe[i]*90,0.1),'milieu')
      fleche=sens_de_rotation(B,A,signe[i])
      s2 = demiDroiteAvecExtremite(A, C);
      labels=labelPoint(A,B)
      labels2=labelPoint(A,B,C)
      secteur=afficheMesureAngle(B,A,C)
      texteCorr=``
      cible=cibleCouronne({x:0,y:0,taille:3})
      xMin=Math.min(A.x-4,C.x)
      xMax=Math.max(B.x,C.x)+0.5
      yMin=Math.min(A.y-4,C.y)-0.5
      yMax=Math.max(A.y+4,C.y)+0.5
        mathalea.fenetreMathalea2d = [xMin, yMin, xMax, yMax]
      objets_enonce=[s,labels,cible,Apos,Bpos,fleche]
      objets_correction=[s,labels2,secteur,cible,s2,Apos,Bpos,Cpos,fleche]
      texte+=mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 0.8 }, objets_enonce)
      if ((!sortieHtml)&&((i+1)%2==0&&!(i+1)%4==0)) texte+="\\columnbreak "
      if ((!sortieHtml)&&((i+1)%4==0)) texte+="\\newpage "
      texteCorr=mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 0.7 }, objets_correction)
      this.listeQuestions.push(texte)
      this.listeCorrections.push(texteCorr)
  }
        listeQuestionsToContenu(this)
  };
  this.besoinFormulaireNumerique = ['Précision de l\'angle',3,'1 : Angle à 10°\n2 : Angle à 5°\n3 : Angle à 1°'];
 // this.besoinFormulaire2Numerique = ['Niveau de difficulté',2,'1 : Construire un angle\n2 : Construire 2 anles'];
}

