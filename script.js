function selectBox(boxNumber) {
    // Select all elements with the class 'box'
    let boxes = document.querySelectorAll(".box");
    
    // Loop through all the boxes
    boxes.forEach((box, index) => {
       
        let content = box.querySelector(".box-content");
       
        let radioInput = box.querySelector("input[type='radio']");
        
        // Check if the current box is the selected one
        if (index + 1 === boxNumber) {
            box.classList.add("selected");
            content.style.display = "block";
            radioInput.checked = true;
        } else {
           
            box.classList.remove("selected");
            content.style.display = "none";
        }
    });
}
