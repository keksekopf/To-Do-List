// Link HTML elements
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Add item to list upon button press
function addTask() {
    if(inputBox.value === ""){
        alert("Item is empty.")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
}

// Listen for mouse press and add or remove check mark depending on current state
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})

// Clears all tasks upon button press
function clearAllTasks() {
    let confirmation = confirm("Are you sure you want to delete all tasks?");
    if (confirmation) {
        document.getElementById("list-container").innerHTML = "";
    }
}

// Toggle Dark Mode
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    // Update button text
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "☀️ Light Mode";
    } else {
        this.textContent = "🌙 Dark Mode";
    }
});
