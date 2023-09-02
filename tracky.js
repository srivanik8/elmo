import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase  , ref , push , onValue , remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

const appSettings = {
    databaseURL: "https://ding-55998-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database , "tasklist")



const inputFieldEl =  document.getElementById("item")
const addButtonEl = document.getElementById("add-button")
const tasklistEl = document.getElementById("tasklist")


addButtonEl.addEventListener("click", function() {
    let inputval = inputFieldEl.value

    push(taskListInDB , inputval)

    clear();
    
});
function clear() {
    inputFieldEl.value = ""
}
function add(task) {
   // tasklistEl.innerHTML += `<li>${itemval}</li>`
   let taskID = task[0]
   let taskValue = task[1]

   if (taskValue.trim() !== "") {
        let newEl = document.createElement("li")
        newEl.textContent = taskValue
        tasklistEl.append(newEl)

        newEl.addEventListener("dblclick", function() {
        let exactLocationOfTaskInDB = ref(database , `tasklist/${taskID}`)
        remove(exactLocationOfTaskInDB)
        party();
      
   })

}
}

function party(){
    confetti()
}

const start = () => {
    setTimeout(function() {
        confetti.start();
      });
};

start();


function cleartasklist() {
    tasklistEl.innerHTML = ""
}

onValue(taskListInDB , function(snapshot) {

    if (snapshot.exists()) {
        let tasksArray = Object.entries(snapshot.val())
        cleartasklist();
        for (let i=0; i<tasksArray.length; i++) { 
            let currentTask = tasksArray[i] 
            let currentTaskID = currentTask[0]
            let currentTaskValue = currentTask[1]
            add(currentTask);
        }
    }
    else {
        tasklistEl.innerHTML = ""
    }

})


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
 



appSettings;


