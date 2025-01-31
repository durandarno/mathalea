import { tridictionnaire, filtreDictionnaire }  from "./outils.js" ;
//import dictionnaireDesExercicesAMC from "./dictionnaireDesExercicesAMC.js"
import dictionnaireDesExercicesAleatoires from './dictionnaireDesExercicesAleatoires.js'// pour reconstruire le dico au même format c'est
const dictionnaireDesExercicesAMC = {}
Object.entries(dictionnaireDesExercicesAleatoires).forEach(([id, props]) => {
  if (props.amcReady) dictionnaireDesExercicesAMC[id] = props
})
import $ from 'jquery'
import 'datatables.net-dt/css/jquery.dataTables.css'

import renderMathInElement from 'katex/dist/contrib/auto-render.js'

let liste_des_exercices_disponibles = tridictionnaire(dictionnaireDesExercicesAMC);

export function liste_html_des_exercicesQCM_d_un_theme(theme){
  let liste = '';
  let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles,theme);
  for (let id in dictionnaire) {

    liste +=
      `<span class="id_exercice">${id}</span> - <a class="lien_id_exercice" numero="${id}">${dictionnaire[id].titre}</a><i id="${id}" class="eye icon icone_preview"></i></br>\n`;
}
  return liste;
}

export function liste_html_des_exercices_d_un_niveau(liste_de_themes){ // liste_de_themes = [['6N1','6N1 - Numérations et fractions niveau 1'] , [' ',' '] ]
  let liste = '';
  for (let theme of liste_de_themes){
      if (liste_html_des_exercicesQCM_d_un_theme(theme[0])!=''){
    liste += `<h3>${theme[1]}</h3>`;
    liste += liste_html_des_exercicesQCM_d_un_theme(theme[0]);
      }
  }
  return liste;
}


export function menuDesExercicesQcmDisponibles(){

// Détermine le nombre d'exercices par niveaux
    let nombre_d_exercices_disponibles_c3 = 0;
    let nombre_d_exercices_disponibles_6 = 0;
    let nombre_d_exercices_disponibles_5 = 0;
    let nombre_d_exercices_disponibles_4 = 0;
    let nombre_d_exercices_disponibles_3 = 0;
    let nombre_d_exercices_disponibles_2 = 0;
    let nombre_d_exercices_disponibles_1 = 0;
    let nombre_d_exercices_disponibles_T = 0;
    let nombre_d_exercices_disponibles_CM = 0;
    let nombre_d_exercices_disponibles_prof = 0;
    let nombre_d_exercices_disponibles_PE = 0;
    let nombre_d_exercices_disponibles_beta = 0;
    for (let id in liste_des_exercices_disponibles) {
      if (id[0] == "c" && id[1] == "3") {
        nombre_d_exercices_disponibles_c3 += 1;
      }
      if (id[0] == 6) {
        nombre_d_exercices_disponibles_6 += 1;
      }
      if (id[0] == 5) {
        nombre_d_exercices_disponibles_5 += 1;
      }
      if (id[0] == 4) {
        nombre_d_exercices_disponibles_4 += 1;
      }
      if (id[0] == 3) {
        nombre_d_exercices_disponibles_3 += 1;
      }
      if (id[0] == 2) {
        nombre_d_exercices_disponibles_2 += 1;
      }
      if (id[0] == 1) {
        nombre_d_exercices_disponibles_1 += 1;
      }
      if (id[0] == "T") {
        nombre_d_exercices_disponibles_T += 1;
      }
      if (id[0] == "C") {
        nombre_d_exercices_disponibles_CM += 1;
      }
      if (id[0] == "P" && id[1] == "0") {
        nombre_d_exercices_disponibles_prof += 1;
      }
      if (id[0] == "P" && id[1] == "E") {
        nombre_d_exercices_disponibles_PE += 1;
      }
      if (id[0] == "b" && id[1] == "e") {
        nombre_d_exercices_disponibles_beta += 1;
      }
    }

    //
    let liste_html_des_exercices_c3 =[];
    let liste_html_des_exercices_6 = [];
    let liste_html_des_exercices_5 = [];
    let liste_html_des_exercices_4 = [];
    let liste_html_des_exercices_3 = [];
    let liste_html_des_exercices_2 = [];
    let liste_html_des_exercices_1 = [];
    let liste_html_des_exercices_T = [];
    let liste_html_des_exercices_CM = [];
    let liste_html_des_exercices_prof = [];
    let liste_html_des_exercices_PE = [];
    let liste_html_des_exercices_beta = [];

    // Affiche de la liste des exercices disponibles
    let liste_html_des_exercices ='';



    liste_html_des_exercices_c3 = liste_html_des_exercices_d_un_niveau([
      ['c3C1','c3C1 - Calculs niveau 1'],['c3N1','c3N1 - Numération Niveau 1'],['c3N2','c3N2 - Numération Niveau 2']])

    liste_html_des_exercices_6 = liste_html_des_exercices_d_un_niveau([
      ['6C1','6C1 - Calculs niveau 1'],['6C2','6C2 - Calculs niveau 2'],['6C3','6C3 - Calculs niveau 3'],
      ['6D1','6D1 - Les durées'],
      ['6G1','6G1 - Géométrie niveau 1'],['6G2','6G2 - Géométrie niveau 2'],['6G3','6G3 - Géométrie niveau 3'],['6G4','6G4 - Géométrie niveau 4'],
      ['6M1','6M1 - Grandeurs et mesures niveau 1'],['6M2','6M2 - Grandeurs et mesures niveau 2'],['6M3', '6M3 - Volumes'],
      ['6N1','6N1 - Numération et fractions niveau 1'],['6N2','6N2 - Numération et fractions niveau 2'],['6N3','6N3 - Numération et fractions niveau 3'],['6N4','6N4 - Numération et fractions niveau 4'],
      ['6P1','6P1 - Proportionnalité'],['6S1','6S1 - Statistiques'],
      ['6Algo1','6A - Algorithmique']
    ])
      liste_html_des_exercices_5 = liste_html_des_exercices_d_un_niveau([
        ['5A1','5A1 - Arithmetique'],['5C1','5C1 - Calculs'],
        ['5G1','5G1 - Symétries'],['5G2','5G2 - Triangles'],['5G3','5G3 - Angles'],['5G4','5G4 - Parallélogrammes'],['5G5','5G5 - Espace'],
        ['5L1','5L1 - Calcul littéral'],
        ['5M1','5M1 - Périmètres et aires'],['5M2','5M2 - Volumes'],['5M3','5M3 - Durées'],
        ['5N1','5N1 - Numération et fractions niveau 1'],['5N2','5N2 - Calculs avec les fractions'],
        ['5P1','5P1 - Proportionnalité'],['5R1','5R1 - Relatifs niveau 1'],['5R2','5R2 - Relatifs niveau 2'],
        ['5S1','5S1 - Statistiques'],['5S2','5S2 - Probabilités']
      ])
      liste_html_des_exercices_4 = liste_html_des_exercices_d_un_niveau([
        ['4C1','4C1 - Relatifs'],['4C2','4C2 - Fractions'],['4C3','4C3 - Puissances'],
        ['4F1','4F1 - Notion de fonction'],
        ['4G1','4G1 - Translation et rotation'],['4G2','4G2 - Théorème de Pythagore'],['4G3','4G3 - Théorème de Thalès'],['4G4',"4G4 - Cosinus d'un angle"],['4G5',"4G5 - Espace"],
        ['4L1','4L1 - Calcul littéral'],['4L2','4L2 - Équation'],['4P1','4P1 - Proportionnalité'],['4S1','4S1 - Statistiques'],['4S2','4S2 - Probabilités'],
        ['4Algo1','4A1 - Algorithmique']]);
      liste_html_des_exercices_3 = liste_html_des_exercices_d_un_niveau([
        ['3A1','3A1 - Arithmetique'],
        ['3F1','3F1 - Généralités sur les fonctions'],['3F2','3F2 - Fonctions affines et linéaires'],
        ['3G1','3G1 - Homothétie et rotation'],['3G2','3G2 - Théorème de Thalès'],['3G3','3G3 - Trigonométrie'],['3G4',"3G4 - Espace"],
        ['3L1','3L1 - Calcul littéral'],['3P1','3P1 - Proportionnalité'],['3S1','3S1 - Statistiques'],['3S2','3S2 - Probabilités'],
        ['3Algo1','3Algo1 - Algorithmique premier niveau']
      ])
 /*    liste_html_des_exercices_1 = liste_html_des_exercices_d_un_niveau([
        ['1E1','1E1 -  Équations'],
        ['1N1','1N1 -  Nombres et calculs'],
        ['1F1','1F1 -  Fonctions'],
      ])
        liste_html_des_exercices_2 = liste_html_des_exercices_d_un_niveau([
          ['2G1','2G1 -  Géométrie'],
          ['2N1','2N1 -  Nombres et calculs'],
          ['1L1','1L1 -  Calcul littéral'],
        ])
  */
    for (let id in liste_des_exercices_disponibles) {
      let exercice_tmp = id;

      if (id[0] == '1') {
        liste_html_des_exercices_1 +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == '2') {
        liste_html_des_exercices_2 +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == 'T') {
        liste_html_des_exercices_T +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "P" && id[1] == "E") {
        liste_html_des_exercices_PE +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "C") {
        liste_html_des_exercices_CM +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "P" && id[1] == "0") {
        liste_html_des_exercices_prof +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "b" && id[1] == "e") {
        liste_html_des_exercices_beta +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercicesAMC[exercice_tmp].titre +
          "</a></br>\n";
      }
    }

    // Change l'ordre des exercices suivant l'URL
    if (window.location.href.indexOf("beta") > 0) {
      liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Beta (${nombre_d_exercices_disponibles_beta})</div><div class="active content">`;
      liste_html_des_exercices += liste_html_des_exercices_beta;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `</div>`;
    } else if (window.location.href.indexOf("cm.html") > 0) {
      liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="active content">`;
      liste_html_des_exercices += liste_html_des_exercices_CM;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cours Moyen(${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_c3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_6;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_5;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_4;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_2;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_1;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_PE;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `</div>`;
    } else if (window.location.href.indexOf("outils") > 0) {
      liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="active content">`;
      liste_html_des_exercices += liste_html_des_exercices_prof;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `</div>`;
    }
    else {
      liste_html_des_exercices += `<div class="ui accordion"><div class="title"><i class="dropdown icon"></i>Cours Moyen (${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_c3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_6;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_5;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_4;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_2;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_1;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_T;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_PE;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_CM;
      liste_html_des_exercices += `</div>`;
      // Ajoute les outils prof sur mathalealatex
      if (window.location.href.indexOf("mathalealatex.html") > 0) {
        liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="content">`;
        liste_html_des_exercices += liste_html_des_exercices_prof;
        liste_html_des_exercices += `</div>`;
      }
      liste_html_des_exercices += `</div>`;
    }

    $("#liste_des_exercices").html(liste_html_des_exercices);
    	//cg 04-2021 Génération du tableau des exercices.

	liste_html_des_exercices = "";
	let liste_html_des_exercices_header = '<div id="recherche"> </div><table id=\'listtab\' class="stripe"><thead><tr><th class="colonnecode">Code</th><th>Intitulé de l\'exercice</th><th>prévisualiser</th></thead><tbody>';
	for (let id in liste_des_exercices_disponibles) {
		let exercice_tmp = id;
		if (exercice_tmp[0] != "b" || exercice_tmp[1] != "e") { //on exclu les beta
			if (dictionnaireDesExercicesAMC[exercice_tmp].titre) { //tous les non dnb
				liste_html_des_exercices += '<tr><td class="colonnecode"><span class="id_exercice">' +
				id +
				'</span></td> <td> <a class="lien_id_exercice" numero="' +id +'">' + dictionnaireDesExercicesAMC[exercice_tmp].titre +
				'</a></td><td><i id="'+id+'" class="eye icon icone_preview"></td></tr>';
			}
			else {
				liste_html_des_exercices += '<tr><td class="colonnecode"><span class="id_exercice">' +
			id +
			'</span></td> <td>'+
			`<a style="line-height:2.5" class="lien_id_exercice" numero="${exercice_tmp}">${dictionnaireDesExercicesAMC[exercice_tmp]["annee"]} - ${exercice_tmp.substr(9,2)} - ${dictionnaireDesExercicesAMC[exercice_tmp]["lieu"]} - Ex ${dictionnaireDesExercicesAMC[exercice_tmp]["numeroExercice"]}</a> ${liste_html_des_tags(dictionnaireDesExercicesAMC[exercice_tmp])} </br>\n`
			+"</td><td></td></tr>";
			}
		}
	}
	liste_html_des_exercices = liste_html_des_exercices_header + liste_html_des_exercices + '</tbody><tfoot><tr><th class="colonnecode">Code</th><th>Intitulé de l\'exercice</th><th>prévisualiser</th></tr></tfoot></table>';
    $("#liste_des_exercices_tableau").html(liste_html_des_exercices);
	$("#liste_des_exercices_tableau").hide();
	$("#mode_choix_liste").hide();
	$(".popuptext").hide();

	//fonction ajout d'un exercice : ajoute l'exercice dans l'input avec la liste des exercice et provoque l'evt change pour recalcul de la page.
	function addExercice(e) {
		let numero = $(e.target).attr("numero");
      if ($("#choix_des_exercices").val() == "") {
        $("#choix_des_exercices").val($("#choix_des_exercices").val() + numero);
      } else {
        $("#choix_des_exercices").val(
          $("#choix_des_exercices").val() + "," + numero
        );
      }

      // Créé un évènement de changement de la valeur du champ pour déclencher la mise à jour
      let event = new Event('change');
      document.getElementById('choix_des_exercices').dispatchEvent(event);

      // Actualise KaTeX pour les titres d'exercices utilisant LaTeX
      renderMathInElement(document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: true,
        errorColor: "#CC0000",
        strict: "warn",
        trust: false,
      });
	}

	if (typeof $('#listtab').DataTable != 'undefined') { //pour les pages ne supportant pas le tableau.
		$('#listtab').DataTable({
			"language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.24/i18n/French.json"
            },
			initComplete : function() {
				$("#listtab_filter").detach().appendTo('#recherche');
			}
		});
	} else {
		$(".lien_id_exercice").off("click").on("click",function () {addExercice(event); });
	}


	renderMathInElement(document.body, {
		delimiters: [
		{ left: "\\[", right: "\\]", display: true },
		{ left: "$", right: "$", display: false },
		],
		throwOnError: true,
		errorColor: "#CC0000",
		strict: "warn",
		trust: false,
	});

    // Gère le clic sur un exercice de la liste


	//Lorsqu'on change de page le tableau il faut ajouter le handler d'evenement sur la liste des exercices.
	$('#listtab').on( 'draw.dt', function () {
		$(".lien_id_exercice").off("click").on("click",function () {addExercice(event); });
		renderMathInElement(document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: true,
        errorColor: "#CC0000",
        strict: "warn",
        trust: false,
      });
	} );

	//Gestion d'affichage de l'un ou l'autre des modes.
	$("#mode_choix_liste").off("click").on("click",function () {
		$("#liste_des_exercices_tableau").hide();
		$("#liste_des_exercices").show();
		$("#mode_choix_liste").hide();
		$("#mode_choix_tableau").show();
	});
	$("#mode_choix_tableau").off("click").on("click",function () {
		$("#liste_des_exercices_tableau").show();
		$("#liste_des_exercices").hide();
		$("#mode_choix_liste").show();
		$("#mode_choix_tableau").hide();
	});
	$("#replier").off("click").on("click",function () {
		if ($("#liste_des_exercices").is(":visible") || $("#liste_des_exercices_tableau").is(":visible")) {
			$("#liste_des_exercices_tableau").hide();
			$("#liste_des_exercices").hide();
			$("#replier").html('+');
		} else if ($("#mode_choix_liste").is(":visible")) {
			$("#liste_des_exercices_tableau").show();
			$("#liste_des_exercices").hide();
			$("#replier").html('-');
		} else {
			$("#liste_des_exercices_tableau").hide();
			$("#liste_des_exercices").show();
			$("#replier").html('-');
		}
	});
}


export function menuTheme(theme) {
  let codeHTML = '<h2 class="ui horizontal divider header">Exercices en ligne à données aléatoires</h2>'
  codeHTML += '\n<div class="ui middle aligned animated selection divided list">'
  let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles,theme);
  for (let id in dictionnaire) {
    codeHTML +=
      `<a class="item" href="/exercice.html?ex=${id}" target="_blank">
      <img class="ui avatar image" src="/images/dice.png"> <div class="header content">${id} - ${dictionnaire[id].titre} </div>
    </a>`
  }
  codeHTML += '\n</div>'
  return codeHTML

}


export function listeTheme(theme) {
  let codeHTML = ''
  let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles,theme);
  for (let id in dictionnaire) {
    codeHTML +=
      `<a class="item" href="/exercice.html?ex=${id}" target="_blank">
      <img class="ui avatar image" src="/images/dice.png"> <div class="header content">${id} - ${dictionnaire[id].titre} </div>
    </a>`
  }
  return codeHTML

}
