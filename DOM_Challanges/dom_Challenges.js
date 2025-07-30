// const paraText = document.querySelector('#myPara')
// console.log(paraText)
// paraText.textContent = "I am Changed"
// Note: don't use arrow function in addEventListner as it doesn't gives the context of what they're calling for, use function() keyword instead to get the context
// Exp-1 :-
document
    .getElementById("changeTextButton")
    .addEventListener("click", function() {
    const para=document.getElementById('myPara')
    const OriginalPara = "This is a Paragraph. Click on the button to chenge me!" 
    const changedPara = "The Paragraph is Changed!!"
    if(para.textContent === OriginalPara)
    {
        para.textContent = changedPara;
        this.textContent = "Change to Original Paragraph"
    }
    else{
        para.textContent = OriginalPara
        this.textContent="Change to Another Text"
    }
    })

// Exp-2 :-
document.getElementById('highlightCity')
        .addEventListener('click', function(){

const cityList=document.getElementById('cityList')
const firstCity=(cityList.firstElementChild)
firstCity.classList.toggle('highlight')
// firstCity.classList.add('highlight') : to permanently add the class
if(firstCity.classList.contains('highlight'))
    this.textContent = "Unhighlight the First City"
else    
    this.textContent = "Highlight the First City"
        })

// Exp-3 :-
document.getElementById('changeOrder')
        .addEventListener('click', function(){

let coffeeType = document.getElementById('coffeeType')
coffeeType.textContent = "Espresso"
coffeeType.style.backgroundColor = "aliceblue"
coffeeType.style.color = "blue"
coffeeType.style.padding="10px"
coffeeType.style.margin="10px"
        })


// Exp-4
document.getElementById('addNewItem')
.addEventListener('click', function(){
    const ul=document.getElementById('shoppingList')
    const li=document.createElement('li')
    li.textContent="Jam"
    ul.appendChild(li)
})

// Exp-5
document.getElementById('removeTask').addEventListener('click', function(){
    const ul = document.getElementById('taskList')
    ul.lastElementChild.remove();
})

// Exp-6
// document.getElementById('clickMe').addEventListener('click', function(){
//     alert("Clicked")
// })
// document.getElementById('clickMe').addEventListener('mouseover', function(){
//     alert("Clicked")
// })
document.getElementById('clickMe').addEventListener('dblclick', function(){
    alert("Clicked")
})


// Exp-7
document.getElementById('teaList').addEventListener('click', function(event){
console.log(event)//gives details of the event happening
console.log(event.target) //at which or on which item the event is happening that's the target
if(event.target && event.target.matches('.teaItem'))//to see if that target matches the class('.') or id('#')
{
    alert(`Youu selected ${event.target.textContent}`)
}
})

// Exp-8
document.getElementById('feedbackForm').addEventListener('submit', function(event){
    event.preventDefault(); //stops from reloading the page after from submitting
    const inputID="feedbackInput";
    const labelForm=document.querySelector(`label[for="${inputID}"]`);
    const labelText=labelForm.textContent;
    // console.log(labelText) //Your Feedback
    const formPara=document.getElementById('feedbackDisplay')
    const formInput=document.getElementById('feedbackInput').value;
    console.log(formInput)
    formPara.innerText=`Your Feedback is: \n${formInput}`;
    formPara.style.backgroundColor="yellow";
    formPara.style.color="blue";
    formPara.style.padding="10px"
    formPara.style.margin="10px"
    formPara.style.borderRadius="15px"
})

// Exp-9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent="DOM Fully Loaded"
})

// Exp-10
document.getElementById('toggleHighlight').addEventListener('click', function(){
const desc=document.getElementById('descText');
desc.classList.toggle('highlight')
})