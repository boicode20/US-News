import createNewsElement from "./Create-Element/create.js";

const category=document.querySelector('#search');
const btn=document.querySelector('#btn')
const parent=document.querySelector('.news-container')

    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        callData()
    })




const callData=()=>{
    const categoryVal=category.value.toLowerCase()
    createNewsElement(parent,categoryVal)

}