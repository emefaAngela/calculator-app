var bill =document.getElementById("bill-amount");
var customtip =document.getElementById("custom_tip");
var people =document.getElementById("no_of_people");
var tip_per_person =document.getElementById("tip_person");
var total_per_person =document.getElementById("total_person");
var reset =document.getElementById("reset");
var tips=document.querySelectorAll("row-1");

function handleclick(event){
tips.forEach(function(val){
    val.classList.remove(active_tip);
    if(event.target.innerHTML== val.innerHTML){
        val.classList.add("active_tip");
    }
})
}

const Reset =() =>{

};

const calculate_tip =() =>{

};