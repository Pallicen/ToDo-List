  
  
  document.querySelectorAll(".bock").forEach(button => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling; 
   
      if (this.textContent === "✔️") {
        this.textContent = "";    
        input.value = "";                  
      } else {
        this.textContent = "✔️";    
      }
    });
  });

  document.querySelector(".rensa").addEventListener("click", function () {

    document.querySelectorAll(".lista").forEach(input=> {
      input.value = "";
    });
  
    document.querySelectorAll(".bock").forEach(button => {
      button.textContent = "";
    });
    
  });

    document.querySelector(".rensaNotes").addEventListener("click", function () {
    document.querySelector(".text").value = "";
 });

 document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.minus').forEach(function(minusBtn) {
        minusBtn.addEventListener("click", function () {
            const listrad = this.closest('.listrad');
            listrad.remove();
        });
    });


  document.querySelector(".läggTill").addEventListener("click", function () {
    const listrad = document.createElement('div');
    listrad.classList.add('listrad');

    const button = document.createElement('button');
    button.classList.add('bock');

    const input = document.createElement('input');
    input.classList.add('lista');

    const minusBtn = document.createElement('button');
    minusBtn.innerText ="➖";
    minusBtn.classList.add('minus');

    listrad.append(button, input, minusBtn);

    document.getElementById('rader').appendChild(listrad);
    
    minusBtn.addEventListener("click", function () {
      listrad.remove();
   });
  });
 });