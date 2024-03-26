function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   textAreaElements = document.querySelector('textarea')
   texts = []
   texts = textAreaElements.value.match(/"(.*?)"/g)
   console.log(texts);

   

   for (text of texts) {
      // const currentText = JSON.parse(texts)
      // console.log(currentText);
      // const currentObject = {}
      // const key = currentText[0]
      // const value = currentText[1]
      console.log(text);


      // currentObject[key] = value
      // console.log(text);
   }



   



   function onClick () {
      
      
   }
}