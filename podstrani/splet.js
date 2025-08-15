var plavalci = [];
function posljiPlavalca() {
  var ime = document.getElementById("ime").value;
  var disc = document.getElementById("disc").value;
  //console.log(ime, disc);
  plavalci.push({ ime: ime, disc: disc });
  shraniPlavalce();
  //console.log(plavalci);
  prikaziTabeloPlavalcev();

  document.getElementById("ime").value = "";
  document.getElementById("disc").value = "";

  location.href = "prijavljen.html";

}

function prikaziTabeloPlavalcev() {
  var tabela = document.getElementById("tabelaPlavalci");
  while (tabela.firstChild) {
    tabela.removeChild(tabela.firstChild);
  }

  var tr = document.createElement("tr");
  tabela.appendChild(tr);

  var td = document.createElement("td");
  td.innerHTML = "Ime";
  tr.appendChild(td);
  var td = document.createElement("td");
  td.innerHTML = "Disciplina";
  tr.appendChild(td);

  for (var i = 0; i < plavalci.length; i++) {
    var tr = document.createElement("tr");
    tabela.appendChild(tr);
    var td = document.createElement("td");
    td.innerHTML = plavalci[i].ime;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerHTML = plavalci[i].disc;
    tr.appendChild(td);
  }
}

function shraniPlavalce() {
  localStorage.setItem("plavalci", JSON.stringify(plavalci));
}

function naloziPlavalce() {
  var shranjeniPlavalci = localStorage.getItem("plavalci");
  if (shranjeniPlavalci) {
    plavalci = JSON.parse(shranjeniPlavalci);
  }
}

function izbrisiPlavalce() {
  plavalci = [];
  shraniPlavalce();
  prikaziTabeloPlavalcev();
}

naloziPlavalce();
prikaziTabeloPlavalcev();
