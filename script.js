  
  
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