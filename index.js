// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",submitFun);

var dataArr= JSON.parse(localStorage.getItem("schedule")) || [];


function submitFun(event){
    event.preventDefault();

    var dataObj={
        matchNum:document.querySelector("#masaiForm").matchNum.value,
        teamA:document.querySelector("#masaiForm").teamA.value,
        teamB:document.querySelector("#masaiForm").teamB.value,
        date:document.querySelector("#masaiForm").date.value,
        venue:document.querySelector("#masaiForm").venue.value,
    };
  dataArr.push(dataObj);
  
  localStorage.setItem("schedule",JSON.stringify(dataArr));
  
}