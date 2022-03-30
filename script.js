let tasks = []


function newElement() {
    if (document.getElementById("task").value) {
        tasks.push(document.getElementById("task").value)

        document.getElementById("task").value=''

        updateList();
        $('#liveToast').toast('show')
        
    } else {
        console.log("Task boş olamaz")
        $('#liveToaste').toast('show');
    }

}




function updateList() {
    while (document.getElementById("list").firstChild) {
        document.getElementById("list").removeChild(document.getElementById("list").firstChild)
    }


    let ct = 0;
    tasks.map(t => {

        let deleteButton = document.createElement("span")
        deleteButton.classList.add("button")
        deleteButton.setAttribute("id", "deleteBut");
        deleteButton.setAttribute("index", ct)
        deleteButton.onclick = deleteElement;

        let deleteImg = document.createTextNode("x")
        deleteButton.appendChild(deleteImg)
        let node = document.createElement("li");
        let textnode = document.createTextNode(t);
        node.appendChild(textnode);
        node.appendChild(deleteButton)
        document.getElementById("list").appendChild(node);

        ct += 1


    })


}
function deleteElement(e) {

    let x = e.target.getAttribute('index')
    tasks.splice(x, 1)
    updateList()


}
