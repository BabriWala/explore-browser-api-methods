// alert('ki khobor dosto')
const showAlert = ()=>{
    const num = Math.random()*10;
    console.log(num);
    if(num <5){
    alert('ki khobor dosto');
    }
}

const askSomething = ()=>{
    const decision = confirm('Are you sure you want to go to there?');
    console.log(decision);
    // prompt
    if(decision === true){
        alert('dosto 500 tk dar de')
    }else{
        console.log('DGM || Dure giye mor');
    }
}

const getInfo = ()=>{
    const data = prompt('Tell us your name', 'Hanzala');
    console.log(data);
    if(!!data){
        console.log('Welceome Here', data);
    }   
}