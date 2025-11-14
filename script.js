  
  
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

  document.querySelector(".läggTill").addEventListener("click", function () {
    const listrad = document.createElement('div');
    listrad.classList.add('listrad');

    const input = document.createElement('input');
    input.classList.add('lista');

    const button = document.createElement('button');
    button.classList.add('bock');

    listrad.append(input, button);

    document.getElementById('rader').appendChild(listrad);
  })
