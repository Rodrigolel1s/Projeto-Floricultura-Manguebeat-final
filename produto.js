// função para ativar o efeito de trocar foto do produto.

function changeImage(imagePath) {
    var productImage = document.getElementById('product-image');
    productImage.src = imagePath;
  }
  
// função para ativar o modo noturno. (Observe que para editar o modo noturno, vá até o arquivo pagproduto.css , estará no .dark-mode)

  function myFunction() {  
    var element = document.body;
    
    element.classList.toggle("dark-mode"); 

    }





