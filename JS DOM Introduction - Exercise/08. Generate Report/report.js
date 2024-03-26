function generateReport() {
    
    const thInputElements = document.querySelectorAll('input');
    const trBodyElement = document.querySelectorAll('table tbody tr');
    const textAreaElement = document.getElementById('output');
 
    let checkedMap = [];
    let reportInfo = [];
 
    /* let checkedMap1 = Array.from(thInputElements).map(({}, index) => ({[thInputElements[index].name]: thInputElements[index].checked})); */
    /* for (let i=0; i<thInputElements.length; i++) {
        checkedMap.push({
            [thInputElements[i].name]:thInputElements[i].checked
        })
    } */
 
    for (let i=0; i<thInputElements.length; i++) {
        let inputName = thInputElements[i].name;
        let isChecked = thInputElements[i].checked;
        checkedMap.push([inputName, isChecked])
    }
 
    for (let i=0; i<trBodyElement.length; i++) {
        let dataFromRow = trBodyElement[i].querySelectorAll('td');
        reportInfo.push({});
 
        for (let j=0; j<checkedMap.length; j++) {
            if (checkedMap[j][1] === true) {
                reportInfo[i][checkedMap[j][0]] = dataFromRow[j].textContent
            }
        }
    }
 
    textAreaElement.textContent = JSON.stringify(reportInfo, null, 2)
    /* console.dir(checkedMap);
    console.dir(reportInfo); */
}
 
/* function generateReport() {
    //TODO
    const thElement = document.querySelectorAll('table thead tr th');
    const trBodyElement = document.querySelectorAll('table tbody tr');
    const textAreaElement = document.getElementById('output')
 
    let checkedMap = [];
    let reportInfo = [];
 
    for (let thE of thElement) {
        let checkBox = thE.querySelector('input[type=checkbox]');
        let isChecked = checkBox.checked;
        checkedMap.push({[thE.textContent.toLowerCase().trim()]:isChecked});
    }
 
    for (let i=0; i<trBodyElement.length; i++) {
        let dataFromRow = trBodyElement[i].querySelectorAll('td');
        reportInfo.push({});
 
        for (let j=0; j<checkedMap.length; j++) {
            if (Object.values(checkedMap[j])[0] === true) {
                reportInfo[i][Object.keys(checkedMap[j])[0]] = dataFromRow[j].textContent
            }
        }
    }
 
    console.dir(reportInfo)
    console.dir(JSON.stringify(reportInfo))
    textAreaElement.textContent = JSON.stringify(reportInfo, null, 2)
    textAreaElement.value = JSON.stringify(reportInfo, null, 2)
} */