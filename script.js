//botão curtidas 
document.addEventListener("DOMcontentLoaded", () =>{
    const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
    if (!likeBtn) return;
    const likeSvg = likeBtn.querySelector("svg");

    //localiza o contador 

    let textNode = Array.from(likeBtn.childNodes).find(node)=> node.nodeType
    === Node. TEXT_NODE && node.textContent.trim() !==""
);

//zera o contador 

let cont = 0 

//atualiza

if(textNode){
    textNode.textContent = `0`;
}

//coração]
function applyLikedStyle (){
 likeSvg.style.fill ="#eeafd9"
 likeSvg.style.stroke ="#ff69cd"
 likeSvg.style.color ="#ace3ec"
 

 //efeito curtida
 likeSvg.style.transform = "scale(1.3";
 setTimeout(() => (likeSvg.style.transform = "scale(1)"))
}


//números acima e 1k

 function formalikes(num) {
    if (num >=1000){
        return(num/1000).toFixed(1)+"K"
 }
 
return num.toString(); 

}
//deixar a curtida bonitinha

function addLike(){
    baseLikes++;
    isLiked = true; 
    likeBtn.classList.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContent = formatLikes(baseLikes);
    }
}
 

})


