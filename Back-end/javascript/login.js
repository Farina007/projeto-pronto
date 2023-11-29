document.querySelector("#login").addEventListener("click",()=>{
fetch("http://localhost:3000/login",{
method: "POST",
headers: {
'Content-type' : 'application/json'
},
body: JSON.stringify({
"user" : document.querySelector("#user").value,
"pass" : parseInt(document.querySelector("#pass").value)
})
}).then((res)=>{
if(res.status == 200){
window.location.href = "../../Front-end/html/index.html"
}
})
})
