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
