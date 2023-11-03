const botonmienlace = document.getElementById("mienlace");
botonmienlace.addEventListener("click", function(){
  const mienlace = "La creadora de esta pagina es la emprendedora, \n Victoria Quintero,\n quien lleva adelante este negocio";
  alert(mienlace);
} );

const botonvn = document.getElementById("botonvn");
botonvn.addEventListener("click", function(){
  document.body.classList.toggle("darkvn");
});

const botonlista = document.getElementById("botonlista");
botonlista.addEventListener("click", function(){
  URL("botonlm");
});
