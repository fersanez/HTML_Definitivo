console.log("Hola Melon!!");

//Search Task Controllers //
const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
const navbarData = ['Search all', 'Work', 'Bussines', 'Events', 'Name user']; //Name user: se actualiza la lista los nombres d usuarios con tareas en común
const navbarDataFilter = (value) => {
  return navbarData.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(navbarAutocomplete, {
  filter: navbarDataFilter,
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}



                // -------- POPUP CREAR TASK ---------------// 
 
function openNewTask(){
  document.getElementById("formNewTask").style.display ="block";
}

function clearNewTask(){
  document.getElementById("tittle-task").value=""
  document.getElementById("description-task").value=""
  document.getElementById("description-task").value=""
  document.getElementById("dateTask-ini").value=""
  document.getElementById("dateTask-fin").value=""
  document.getElementById("catTask").value=""
  document.getElementById("shareTask").value=""
  document.getElementById("cont-span").textContent="0"
}

function cancelNewTask(){
  document.getElementById("formNewTask").style.display ="none";
}

function acceptNewTask(){
  document.getElementById("formNewTask").style.display ="none";
}

function myShared() {
  document.getElementById("myContacts").classList.toggle("show");
}



// -------- CONTADOR CHAR TITTLES CREAR TASK
// -------- AUX
function contchar(){
  var inputsCont = "input[maxlength], textarea[maxlength]";
  $(document).on('keyup', "[maxlength]", function (e) {
    var este = $(this),
      maxlength = este.attr('maxlength'),
      maxlengthint = parseInt(maxlength),
      textoActual = este.val(),
      currentCharacters = este.val().length;
      remainingCharacters = currentCharacters,
      espan = este.prev('label').find('span');      
      // Detectamos si es IE9 y si hemos llegado al final, convertir el -1 en 0 - bug ie9 porq. no coge directamente el atributo 'maxlength' de HTML5
      if (document.addEventListener && !window.requestAnimationFrame) {
        if (remainingCharacters <= -1) {
          remainingCharacters = 0;            
        }
      }
      espan.html(remainingCharacters);
      if (!!maxlength) {
        var texto = este.val(); 
        if (texto.length >= maxlength) {
          // este.removeClass().addClass("borderojo");
          este.val(text.substring(0, maxlength));
          e.preventDefault();
        }
        else if (texto.length < maxlength) {
          este.removeClass().addClass("bordegris");
        } 
      } 
});
}



                // -------- POPUP CREAR TASK ---------------//
