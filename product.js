document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("orderButton");
    const orderModal = document.getElementById("orderModal");
    const closeModal = document.querySelector(".close-modal");
  
    orderButton.addEventListener("click", function() {
      orderModal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function() {
      orderModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === orderModal) {
        orderModal.style.display = "none";
      }
    });
  
  
    const orderForm = document.getElementById("orderForm");
  
    orderForm.addEventListener("submit", function(event) {
      event.preventDefault();
     
    
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
  
      if (nameInput.value === "") {
       
      }
  
      if (emailInput.value === "") {
       
      }
  
  
      const totalPrice = calculateTotalPrice(); 
  
      if (totalPrice > 1000) {
        applyDiscount(totalPrice); 
      }
    });
  
    function calculateTotalPrice() {
      
    }
  
    function applyDiscount(totalPrice) {
     
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    $(".carousel").slick({
      autoplay: true,   
      dots: true,      
      infinite: true,   
      speed: 500,       
      slidesToShow: 1,  
      slidesToScroll: 1 
    });
  });

  function minus1(quantityId) {
    var quantity = document.getElementById(quantityId);
    var currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 0) {
      quantity.textContent = currentQuantity - 1;
    }
  }
  
  function pluse1(quantityId) {
    var counter = parseInt(document.getElementById(quantityId).innerText);
    counter++;
    document.getElementById(quantityId).innerText = counter;
    updateTotalPrice();
}

  
  function minus1(quantityId) {
    var counter = parseInt(document.getElementById(quantityId).innerText);
    if (counter > 0) {
      counter--;
      document.getElementById(quantityId).innerText = counter;
      updateTotalPrice();
    }
  }
  function updateTotalPrice() {
    var total = 0;
    var productPrices = [1200, 1500, 1300, 900]; 
    var quantities = [
      parseInt(document.getElementById("quantity1").innerText),
      parseInt(document.getElementById("quantity2").innerText),
      parseInt(document.getElementById("quantity3").innerText),
      parseInt(document.getElementById("quantity4").innerText)
    ];
  
    for (var i = 0; i < productPrices.length; i++) {
      total += productPrices[i] * quantities[i];
    }
    if (total >= 1000) {
      total *= 0.9;
  }
    document.getElementById("total-price").innerText = total;
  }
  