document.getElementById('btn-add-name').addEventListener('click', ()=>{
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    console.log(nameValue);
    localStorage.setItem('name', nameValue);
})



document.getElementById('btn-add-age').addEventListener('click', ()=>{
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    console.log(ageValue);
    localStorage.setItem('age', ageValue);
})


document.getElementById('btn-remove-name').addEventListener('click', ()=>{
    localStorage.removeItem('name')
})

document.getElementById('btn-remove-age').addEventListener('click', ()=>{
    localStorage.removeItem('age')
})


document.getElementById('btn-clear-LS').addEventListener('click', ()=>{
    localStorage.clear();
})
