let shortenBtn=document.getElementById("shortenBtn")
let linkInput=document.getElementById("linkInput")
let inputAndError=document.getElementById("inputAndError")
let errorMsg=document.getElementById("errorMsg")

if(!localStorage.getItem("linksArr")){
  localStorage.setItem("linksArr",JSON.stringify([]))
}
let linksArr=JSON.parse(localStorage.getItem("linksArr"))
for(e of linksArr){
  loadLink(e)
}


function shortenUrl(url){
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
      };
      
      let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "694cb855e7d444f99b29171aaa24084a",
      };
      
      fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(linkRequest),
      })
        .then(response => response.json())
        .then(link => {
          if(link.errors){
            errorMsg.innerHTML=link.message
            inputAndError.classList.add("error")
          }else{
            let linkObj={
              oldLink:link.destination,
              newLink:link.shortUrl
            }
            linksArr.push(linkObj)
            localStorage.setItem("linksArr",JSON.stringify(linksArr))
            loadLink(linkObj)
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
}

function loadLink(e){
    let shortenedLink=document.createElement("div")
    shortenedLink.className="shortened-link"
    shortenedLink.innerHTML=`
    <p class="old-link" title=${e.oldLink}>
      ${e.oldLink}
    </p>
    <p class="left-auto new-link" title=${e.newLink}>
      ${e.newLink}
    </p>
    <button class="copy-btn" onClick="copy(event)">Copy</button>
    `
    document.getElementById("innerLinkShortner").append(shortenedLink)
}

function copy(e){
  let copiedText=e.target.previousElementSibling.textContent
  navigator.clipboard.writeText(copiedText.trim())
  e.target.textContent="Copied!"
  e.target.classList.add("copied")
}

shortenBtn.addEventListener("click",()=>{
  let url=linkInput.value
  if(url.trim()==""){
    errorMsg.innerHTML="Please add a link"
    inputAndError.classList.add("error")
  }else{
    inputAndError.classList.remove("error")
    linkInput.value=""
    shortenUrl(url)
  }
  
})
