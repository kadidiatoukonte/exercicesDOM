//Exercice1:
var btn = document.getElementById("btn");

function myFunction(){
  btn.style.backgroundColor = "red";
}

btn.onclick = function(){
  myFunction();
}


//Exercice2:
// var google = document.getElementById("google");
// var attributs = document.getElementById("attributs");
// var hr = document.getElementById("hr");
//
// hr.style.display = "none";
//
// function myFunction(){
//   hr.style.display = "block";
//   attributs.style.display = "none";
// }
// attributs.onclick = function(){
//   myFunction();
// }

//Exercice3:
// var click = document.getElementById("click");
//
// function mOver() {
//     click.innerHTML = "Bienvenue";
//     click.style.backgroundColor = "white";
// }
//
// function mOut() {
//     click.innerHTML = "Survolez moi";
//     click.style.backgroundColor = "lightgrey";
// }
//
// onmouseover = function(){
//   mOver();
// }
// onmouseout = function(){
//   mOut();
// }

//Exercice4:
// var ok = document.getElementById("ok");
// var now = new Date();
// var annee   = now.getFullYear();
// var mois    = now.getMonth() + 1;
// var jour    = now.getDate();
// var heure   = now.getHours();
// var minute  = now.getMinutes();
//
// function click(){
// ok.innerHTML = "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+"minute" ;
// }
// ok.onclick = function(){
//   click();
// }

//Exercice5: Pas compris
// var date = new Date();
// var heure =date.getHours();
// var minute=date.getMinutes();
// var seconde=date.getSeconds();
// var f = function() {
// if(seconde<59)
// seconde++;
// else
// {minute++;seconde=00;}
// if(minute>59)
// {heure++;minute=0;}
// document.getElementById("horloge").textContent=heure+":"+minute+":"+seconde;
// setTimeout(f, 1000);
// }
// setTimeout(f, 1000);
// function horloge(){
//   if(seconde<59)
//   seconde++;
//   else
//   {minute++;seconde=00;}
//   if(minute>59)
//   {heure++;minute=0;}
// horloge.innerHTML = "Vous avez passé "+seconde+" seconde sur notre site";
// seconde++;
// setTimeout(f, 1000);
// }
// horloge.onclick = function(){
//   horloge();
// }

      // (2ème méthode)
// début: var div = document.getElementById("horloge");
// div.innerHTML=new Date();
// setTimeout(div, 1000); fin

// Exercice6:
// var btn = document.getElementById("btn");
// var indice = 0;
//
// function myFunction(){
//   if(indice==0){
//   btn.style.backgroundColor = "blue";
//   indice++;
// }else if(indice==1){
//   btn.style.backgroundColor = "purple";
//   indice++;
// }else if(indice==2){
//   btn.style.backgroundColor = "red";
//   indice++;
// }else{
//   btn.style.backgroundColor = "white";
// }
//
// }
// btn.onclick = function(){
//   myFunction();
// }

//Exercice7:
// var btn = document.getElementById("btn");
// function ajouterLigne()
// {
// 	var tableau = document.getElementById("tableau");
//  //add a line
//   var ligne = tableau.insertRow(-1);
// //add a cell
//   var colonne1 = ligne.insertCell(0);
// //put the content of the title
//   colonne1.innerHTML += document.getElementById("td").value;
// //add the second cell
//   var colonne2 = ligne.insertCell(1);
//   colonne2.innerHTML += document.getElementById("td").value;
// }
// btn.onclick = function(){
//   ajouterLigne();
// }

// Exercice8:
// function elements(){
//
// var newA = document.createElement('a');
// newA.href = "##";
// newA.target = "__blank";
// newA.innerHTML= "newA";
//
// var img = document.createElement('img');
// img.src = "img/img2.jpg";
// img.alt = "image 2";
// img.innerHTML= "img";
//
// var newPara = document.createElement('p');
// newPara = "This is a new para";
// newPara.innerHTML= "newPara";
// }
//
// div1.onclick = function(){
//   elements();
// }

// Exercice9: pas fini
// var img1 = document.getElementById("img1");
// var img2 = document.getElementById("img2");
// var img3 = document.getElementById("img3");
// var tab = [];
// var div = document.getElementById("table");
//
// // for(i=0; i<=tab.lenght; i++){
//   function tab1(){
//     tab.push("img1");
//     var tab = ["img1"];
//     div.innerHTML = "tab";
//
//   }
//   img1.onclick = function(){
//     tab1();
//   }
//
//   function tab2(){
//     tab.push("img2");
//     var tab = ["img2"];
//     div.innerHTML = "tab";
//   }
//   img2.onclick = function(){
//     tab2();
//   }
//
//   function tab3(){
//     tab.push("img3");
//     var tab = ["img3"];
//     div.innerHTML = "tab";
//   }
//   img3.onclick = function(){
//     tab3();
//   }
// // }
// // div.innerHTML = "Félicitations, vous avez cliqué sur les 3 images. Voici leurs id : "img1"+ "<br>" + "img2"+ "<br>" + "img3"";
//
// // var div = document.getElementById("table");
// // div.appendChild(table);
