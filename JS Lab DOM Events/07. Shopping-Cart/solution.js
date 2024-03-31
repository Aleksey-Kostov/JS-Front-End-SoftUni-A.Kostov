function solve() {
   const addButton = document.querySelectorAll('button.add-product')
   const textAreaField = document.querySelector('textarea')
   const checkOut = document.querySelector('button.checkout')

   let totalPrice = 0;
   let uniqueProducts = {};

   for (const buttonElement of addButton) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         const title = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent);

         totalPrice += price;
         uniqueProducts[title] = true;

         textAreaField.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkOut.addEventListener('click', (event) => {
      Array.from(addButton).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
      event.target.setAttribute('disabled', 'disabled');
      const list = Object.keys(uniqueProducts).join(', ');

      textAreaField.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.\n`;
   });

}