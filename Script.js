
document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function(){
       const name = document.querySelector('#name').value
       document.querySelector('#letr').innerHTML = `Welcome, ${name}!!!`
       return false 
    }
    
})

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('.color').forEach(
    button=> button.onclick=()=> document.querySelector('#color').style.color = button.dataset.color
    );
})

document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector('select').onchange = ()=> 
        document.querySelector('#color').style.fontSize = this.value;
    

})

document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup =()=>{
        if (document.querySelector('#task').value.length > 0){
        document.querySelector('#submit').disabled = false;}
        else{document.querySelector('#submit').disabled = true;}
    }
    
    document.querySelector('#forma').onsubmit= ()=>{

       const task = document.querySelector('#task').value

      const li = document.createElement('li')
      li.innerHTML = task
      document.querySelector('#work').append(li)
      document.querySelector('#task').value = '' 
      document.querySelector('#submit').disabled = true;
       return false
    }

})



function hello(){ 
   if (document.querySelector('h1').innerHTML=== 'Welcome')
    {document.querySelector('h1').innerHTML = "hi there";
    } else{
        document.querySelector('h1').innerHTML = 'Welcome'
    }
}
    if (!localStorage.getItem("Add")){
        localStorage.setItem('Add', 0)
    }
 function count(){
    Add = localStorage.getItem('Add')
    Add++
    let plus = document.getElementById('plus')
    plus.innerHTML = Add;
    //set this else the function will run only once
    // So when the page is refreshed, it starts from where it stopped
    localStorage.setItem('Add', Add)
    // if (Add % 10 === 0){
        //alert(`You have clicked ${Add} times`)
   // }
 }
 // add event listener for the code to run properly
 document.addEventListener('DOMContentLoaded', ()=>{ 
     document.querySelector('#plus').innerHTML= localStorage.getItem( 'Add')
    // setInterval(count, 1000)
 })
 document.addEventListener('DOMContentLoaded', ()=>{ document.querySelector('#currency').onsubmit = function(){
 fetch('https://api.exchangerate.host/latest?base=NGN')
 .then(reponse => reponse.json())
 .then (data =>{
     money = document.querySelector('#money').value.toUpperCase();
     const dollar = data.rates[money]  
     if (dollar !== undefined){ 
     document.querySelector('#result').innerHTML =`Naira to ${money} to is ${dollar.toFixed(3)} in today's Market`
    console.log(data)}
        else{
            document.querySelector('#result').innerHTML = `Invalid currency`
        }
    
 }) 
 .catch( error =>{
    console.log('error', error)
})
 return false
}
   
   
})