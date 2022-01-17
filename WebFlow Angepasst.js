const triggerElement = document.querySelectorAll(".js-triggerelement");

const plusSymbol = document.querySelector(".plus-icon-2")

const hideShowElementsArray = document.querySelectorAll(".faq-content-2")

const giveId = (array) => {
    let i = 1 ;
    array.forEach(element => {
                element.classList.add("Kachel"+i);
                i++;
    });
}

// Give ID in windowsload
giveId(hideShowElementsArray);

const rotateIcon = (img, deg) =>{
    img.style.transform = "rotate(" + deg + "deg)"; 
} 

const unfold = (el) => {
    el.style.height =("Auto");
    let plusIcon = el.parentNode.querySelector(".faq-block-2").querySelector(".faq-icon-wrapper-2").querySelector(".plus-icon-2");
    rotateIcon(plusIcon, 45);
}

const foldUp = (el) => {
    el.style.height = "0";
    let plusIcon = el.parentNode.querySelector(".faq-block-2").querySelector(".faq-icon-wrapper-2").querySelector(".plus-icon-2");
    rotateIcon(plusIcon, 90);
}


const stateIntialiser = (array) => {
    array.forEach(element => {
        let index = element.classList[array.length-2].split("l")[1];

        if(index == 1) unfold(element);
        else foldUp(element);
        
});  
}

stateIntialiser(hideShowElementsArray);


const oneOnATime = (e) => {

    elementtoFoldUp = e.target.parentNode;
    elementtoFoldUp = FindElementToFoldUp(elementtoFoldUp);
    let childrenArray = elementtoFoldUp.children;
    for (let i = 0; i < childrenArray.length; i++) {
        let elementtoFoldUp = childrenArray[i].querySelector(".faq-main-wrapper-2").querySelector(".faq-content-2");
        foldUp(elementtoFoldUp); 
    } 
     
    elementToUnfold = e.target.parentNode;
    elementToUnfold = FindElementToUnfold(elementToUnfold);
    elementToUnfold = elementToUnfold.querySelector(".faq-content-2");
    unfold(elementToUnfold); 
}

const FindElementToFoldUp = (e) => {
    // The Parent must have faq-main-wrapper-2 in the ClassList, If not then get its parent
    if(e.classList.contains("faq-main-wrapper-2")) {
        return e.parentNode.parentNode;
                    
    } 
    else if(e.classList.contains("faq-block-2")) {
        return e.parentNode.parentNode.parentNode;
    }
    
    else if(e.classList.contains("faq-header-2") || e.classList.contains("faq-icon-wrapper-2")){
        return e.parentNode.parentNode.parentNode.parentNode;
    } 
    
    else if(e.classList.contains("plus-icon-2")){
        return e.parentNode.parentNode.parentNode.parentNode.parentNode;
    }
}

const FindElementToUnfold = (e) => {
    // The Parent must have faq-main-wrapper-2 in the ClassList, If not then get its parent
    if(e.classList.contains("faq-main-wrapper-2")) {
        return e;
                    
    } 
    else if(e.classList.contains("faq-block-2")) {
        return e.parentNode;
    }
    
    else if(e.classList.contains("faq-header-2") || e.classList.contains("faq-icon-wrapper-2")){
        return e.parentNode.parentNode;
    } 
    
    else if(e.classList.contains("plus-icon-2")){
        return e.parentNode.parentNode.parentNode;
    }
}


triggerElement.forEach(element => {
    element.querySelector(".faq-main-wrapper-2").querySelector(".faq-block-2").addEventListener("click", (e)=>{
        oneOnATime(e);   
})
});

