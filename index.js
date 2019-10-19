function submitData(name,email){
  const requestOptions={
    headers:{
      'ConentTtype':'application/json',
      'Accept':'application/json'
    },
    method:'post',
    body:JSON.stringify({name:name,email:email})
  }
  return fetch(URL,requestOptions)
}
submitData("john","john@invisible.com").then(res =>{return res.json()})
.then (json => {let elem=document.createElement("div")
console.log(json.id)
elem.innerHtml=json.id
  document.body.appendChild(elem)}.catch(err=>{document.body.innerHTML=err.message})