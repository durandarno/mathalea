import Thales2D from './_Thales2D.js'
export const amcReady = true
export const amcType = 4 // type de question AMC

export const titre = 'Calculer des longueurs avec la propriété de Thalès'

/**
 * Calcul de longueurs avec le théorème de Thalès
 * @Auteur Rémi Angot
 * Référence 4G30
*/

export default function Thales2D_4e() {
  Thales2D.call(this);
  this.besoinFormulaireNumerique = false;
  this.titre = titre;
}
