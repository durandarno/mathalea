/* eslint-disable camelcase */
import { angleScratchTo2d, appartientSegment, appartientDroite, appartientDemiDroite, scratchblock, motifs, nomVecteurParPosition, point, tracePoint, tracePointSurDroite, milieu, pointSurSegment, pointSurCercle, pointSurDroite, pointIntersectionDD, pointAdistance, labelPoint, barycentre, droite, droiteParPointEtVecteur, droiteParPointEtParallele, droiteParPointEtPerpendiculaire, droiteHorizontaleParPoint, droiteVerticaleParPoint, droiteParPointEtPente, mediatrice, codageMediatrice, codageMilieu, constructionMediatrice, bissectrice, codageBissectrice, constructionBissectrice, polyline, pave, vecteur, segment, segmentAvecExtremites, demiDroite, demiDroiteAvecExtremite, polygone, polygoneAvecNom, polygoneRegulier, polygoneRegulierIndirect, carre, carreIndirect, codageCarre, polygoneRegulierParCentreEtRayon, triangle2points2longueurs, triangle2points2angles, triangle2points1angle1longueur, triangle2points1angle1longueurOppose, nommePolygone, deplaceLabel, aireTriangle, cercle, ellipse, pointIntersectionLC, pointIntersectionCC, cercleCentrePoint, arc, arcPointPointAngle, traceCompas, courbeDeBezier, segmentMainLevee, cercleMainLevee, droiteMainLevee, polygoneMainLevee, arcMainLevee, dansLaCibleCarree, dansLaCibleRonde, cibleCarree, cibleRonde, cibleCouronne, translation, translation2Points, rotation, sens_de_rotation, homothetie, symetrieAxiale, distancePointDroite, projectionOrtho, affiniteOrtho, similitude, translationAnimee, rotationAnimee, homothetieAnimee, symetrieAnimee, affiniteOrthoAnimee, montrerParDiv, cacherParDiv, afficherTempo, afficherTempoId, afficherUnParUn, medianeTriangle, centreGraviteTriangle, hauteurTriangle, CodageHauteurTriangle, codageHauteurTriangle, codageMedianeTriangle, orthoCentre, centreCercleCirconscrit, codageAngleDroit, afficheLongueurSegment, texteSurSegment, afficheMesureAngle, afficheCoteSegment, codeSegment, codeSegments, codeAngle, nomAngleSaillantParPosition, nomAngleRentrantParPosition, droiteGraduee, droiteGraduee2, axes, labelX, labelY, grille, grilleHorizontale, grilleVerticale, seyes, repere, repere2, pointDansRepere, traceGraphiqueCartesien, traceBarre, traceBarreHorizontale, lectureImage, lectureAntecedent, courbe, courbe2, courbeInterpolee, graphiqueInterpole, imageInterpolee, antecedentInterpole, crochetD, crochetG, intervalle, texteParPoint, texteParPosition, latexParPoint, latexParCoordonnees, fractionParPosition, print2d, longueur, norme, angle, angleOriente, angleradian, creerLutin, avance, baisseCrayon, leveCrayon, orienter, tournerG, tournerD, allerA, mettrexA, mettreyA, ajouterAx, ajouterAy, afficherCrayon, codeSvg, codeTikz, mathalea2d, labyrinthe, pavage } from './2d.js'
import { randint, texNombre, nombreDecimal, calcul } from './outils.js'

export default function globals () {
  window.mathalea = { sortieNB: false, anglePerspective: 30, coeffPerspective: 0.5, pixelsParCm: 20, scale: 1, unitesLutinParCm: 50, mainlevee: false, amplitude: 1, fenetreMathalea2d: [-1, -10, 29, 10], objets2D: [] }
  window.sortieHtml = true
  window.est_diaporama = false

  window.randint = randint
  window.texNombre = texNombre
  window.nombreDecimal = nombreDecimal
  window.calcul = calcul

  window.numId = 0 // Pour identifier tous les objets MathALEA2D
  window.angleScratchTo2d = angleScratchTo2d
  window.appartientSegment = appartientSegment
  window.appartientDroite = appartientDroite
  window.appartientDemiDroite = appartientDemiDroite
  window.scratchblock = scratchblock
  window.motifs = motifs
  window.nomVecteurParPosition = nomVecteurParPosition
  window.point = point
  window.tracePoint = tracePoint
  window.tracePointSurDroite = tracePointSurDroite
  window.milieu = milieu
  window.pointSurSegment = pointSurSegment
  window.pointSurCercle = pointSurCercle
  window.pointSurDroite = pointSurDroite
  window.pointIntersectionDD = pointIntersectionDD
  window.pointAdistance = pointAdistance
  window.labelPoint = labelPoint
  window.barycentre = barycentre
  window.droite = droite
  window.droiteParPointEtVecteur = droiteParPointEtVecteur
  window.droiteParPointEtParallele = droiteParPointEtParallele
  window.droiteParPointEtPerpendiculaire = droiteParPointEtPerpendiculaire
  window.droiteHorizontaleParPoint = droiteHorizontaleParPoint
  window.droiteVerticaleParPoint = droiteVerticaleParPoint
  window.droiteParPointEtPente = droiteParPointEtPente
  window.mediatrice = mediatrice
  window.codageMediatrice = codageMediatrice
  window.codageMilieu = codageMilieu
  window.constructionMediatrice = constructionMediatrice
  window.bissectrice = bissectrice
  window.codageBissectrice = codageBissectrice
  window.constructionBissectrice = constructionBissectrice
  window.polyline = polyline
  window.pave = pave
  window.vecteur = vecteur
  window.segment = segment
  window.segmentAvecExtremites = segmentAvecExtremites
  window.demiDroite = demiDroite
  window.demiDroiteAvecExtremite = demiDroiteAvecExtremite
  window.polygone = polygone
  window.polygoneAvecNom = polygoneAvecNom
  window.polygoneRegulier = polygoneRegulier
  window.polygoneRegulierIndirect = polygoneRegulierIndirect
  window.carre = carre
  window.carreIndirect = carreIndirect
  window.codageCarre = codageCarre
  window.polygoneRegulierParCentreEtRayon = polygoneRegulierParCentreEtRayon
  window.triangle2points2longueurs = triangle2points2longueurs
  window.triangle2points2angles = triangle2points2angles
  window.triangle2points1angle1longueur = triangle2points1angle1longueur
  window.triangle2points1angle1longueurOppose = triangle2points1angle1longueurOppose
  window.nommePolygone = nommePolygone
  window.deplaceLabel = deplaceLabel
  window.aireTriangle = aireTriangle
  window.cercle = cercle
  window.ellipse = ellipse
  window.pointIntersectionLC = pointIntersectionLC
  window.pointIntersectionCC = pointIntersectionCC
  window.cercleCentrePoint = cercleCentrePoint
  window.arc = arc
  window.arcPointPointAngle = arcPointPointAngle
  window.traceCompas = traceCompas
  window.courbeDeBezier = courbeDeBezier
  window.segmentMainLevee = segmentMainLevee
  window.cercleMainLevee = cercleMainLevee
  window.droiteMainLevee = droiteMainLevee
  window.polygoneMainLevee = polygoneMainLevee
  window.arcMainLevee = arcMainLevee
  window.dansLaCibleCarree = dansLaCibleCarree
  window.dansLaCibleRonde = dansLaCibleRonde
  window.cibleCarree = cibleCarree
  window.cibleRonde = cibleRonde
  window.cibleCouronne = cibleCouronne
  window.translation = translation
  window.translation2Points = translation2Points
  window.rotation = rotation
  window.sens_de_rotation = sens_de_rotation
  window.homothetie = homothetie
  window.symetrieAxiale = symetrieAxiale
  window.distancePointDroite = distancePointDroite
  window.projectionOrtho = projectionOrtho
  window.affiniteOrtho = affiniteOrtho
  window.similitude = similitude
  window.translationAnimee = translationAnimee
  window.rotationAnimee = rotationAnimee
  window.homothetieAnimee = homothetieAnimee
  window.symetrieAnimee = symetrieAnimee
  window.affiniteOrthoAnimee = affiniteOrthoAnimee
  window.montrerParDiv = montrerParDiv
  window.cacherParDiv = cacherParDiv
  window.afficherTempo = afficherTempo
  window.afficherTempoId = afficherTempoId
  window.afficherUnParUn = afficherUnParUn
  window.medianeTriangle = medianeTriangle
  window.centreGraviteTriangle = centreGraviteTriangle
  window.hauteurTriangle = hauteurTriangle
  window.CodageHauteurTriangle = CodageHauteurTriangle
  window.codageHauteurTriangle = codageHauteurTriangle
  window.codageMedianeTriangle = codageMedianeTriangle
  window.orthoCentre = orthoCentre
  window.centreCercleCirconscrit = centreCercleCirconscrit
  window.codageAngleDroit = codageAngleDroit
  window.afficheLongueurSegment = afficheLongueurSegment
  window.texteSurSegment = texteSurSegment
  window.afficheMesureAngle = afficheMesureAngle
  window.afficheCoteSegment = afficheCoteSegment
  window.codeSegment = codeSegment
  window.codeSegments = codeSegments
  window.codeAngle = codeAngle
  window.nomAngleSaillantParPosition = nomAngleSaillantParPosition
  window.nomAngleRentrantParPosition = nomAngleRentrantParPosition
  window.droiteGraduee = droiteGraduee
  window.droiteGraduee2 = droiteGraduee2
  window.axes = axes
  window.labelX = labelX
  window.labelY = labelY
  window.grille = grille
  window.grilleHorizontale = grilleHorizontale
  window.grilleVerticale = grilleVerticale
  window.seyes = seyes
  window.repere = repere
  window.repere2 = repere2
  window.pointDansRepere = pointDansRepere
  window.traceGraphiqueCartesien = traceGraphiqueCartesien
  window.traceBarre = traceBarre
  window.traceBarreHorizontale = traceBarreHorizontale
  window.lectureImage = lectureImage
  window.lectureAntecedent = lectureAntecedent
  window.courbe = courbe
  window.courbe2 = courbe2
  window.courbeInterpolee = courbeInterpolee
  window.graphiqueInterpole = graphiqueInterpole
  window.imageInterpolee = imageInterpolee
  window.antecedentInterpole = antecedentInterpole
  window.crochetD = crochetD
  window.crochetG = crochetG
  window.intervalle = intervalle
  window.texteParPoint = texteParPoint
  window.texteParPosition = texteParPosition
  window.latexParPoint = latexParPoint
  window.latexParCoordonnees = latexParCoordonnees
  window.fractionParPosition = fractionParPosition
  window.print2d = print2d
  window.longueur = longueur
  window.norme = norme
  window.angle = angle
  window.angleOriente = angleOriente
  window.angleradian = angleradian
  window.creerLutin = creerLutin
  window.avance = avance
  window.baisseCrayon = baisseCrayon
  window.leveCrayon = leveCrayon
  window.orienter = orienter
  window.tournerG = tournerG
  window.tournerD = tournerD
  window.allerA = allerA
  window.mettrexA = mettrexA
  window.mettreyA = mettreyA
  window.ajouterAx = ajouterAx
  window.ajouterAy = ajouterAy
  window.afficherCrayon = afficherCrayon
  window.codeSvg = codeSvg
  window.codeTikz = codeTikz
  window.mathalea2d = mathalea2d
  window.labyrinthe = labyrinthe
  window.pavage = pavage
}
