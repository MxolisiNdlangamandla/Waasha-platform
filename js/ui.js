/* ================================= */
/* HERO SEARCH FUNCTION */
/* ================================= */

function handleSearch() {

  const service = document.getElementById("serviceSearch").value;
  const location = document.getElementById("locationSearch").value;

  let url = "pages/search.html?";

  if(service){
    url += "q=" + encodeURIComponent(service);
  }

  if(location){
    url += "&location=" + encodeURIComponent(location);
  }

  window.location.href = url;
}
/* SEARCH BUTTON FUNCTION */
function goToSearch(){
window.location.href = "pages/search.html";
}