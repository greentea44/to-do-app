
  function create() {
      var userPar= document.createElement("p");
      var parNew = document.getElementById('userParagraph').value;
      var num = document.getElementById("par").childElementCount
      userPar.textContent = (num +1)+ '. ' + parNew;
      var area = document.getElementById("par");
      if(parNew) {
      area.appendChild(userPar);
      }
      document.getElementById('userParagraph').value = '';
    
}


function takeaway() {
document.getElementById("par").removeChild(document.getElementsByTagName('p')[0])
}

