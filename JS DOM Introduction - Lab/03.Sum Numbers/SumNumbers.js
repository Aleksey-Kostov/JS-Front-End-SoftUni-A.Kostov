function calc() {
   const firstElement = document.querySelector('#num1')
   const secondElement = document.getElementById('num2')
   const resultElemnt = document.getElementById('sum')

   resultElemnt.value = Number(firstElement.value) + Number(secondElement.value)

}
