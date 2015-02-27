function setCharacterClass(){
  var object = document.getElementById("characterPdf");
  if(document.body.contains(object)){
    document.body.removeChild(object);
  }

  var classDropdown = document.getElementById("classes"),
      value = classDropdown.value;

     var pdf = document.createElement("object");
     pdf.type = "application/pdf";
     pdf.data = "assets/pdf/classes/"+value+".pdf";
    pdf.id = "characterPdf";

    document.body.appendChild(pdf);

}