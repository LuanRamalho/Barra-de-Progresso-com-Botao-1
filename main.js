const button = document.querySelector('.button'),
      text = document.querySelector('.text');

      button.addEventListener("click",()=>{
        button.classList.add("progress");

        text.innerText = " Downloading....";


        setTimeout(()=>{
            button.classList.remove("progress");

        text.innerText = " Download File";
            
        },6000); //1000ms = 1s
      });