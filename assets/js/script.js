/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   2023
Library / Component: Script file
Description: Rock Paper Scissor game logic
(c) Copyright by BRS with Nyros. 
**/

// Init priority list, assigned to list and stories array
// const priorityList = ["Low", "Medium", "High"];
// const assignedToList = ["Edwin", "Tom", "Carl", "Jerome", "Carmelo"];
// let storyList = [];

// // Default theme
// let chathams_blue = "#1A4B84";

// // Elements
// const description = document.getElementById("description");
// const assignedto = document.getElementById("assignedto");
// const priority = document.getElementById("priority");
// const storySubmitBtn = document.getElementById("storySubmitBtn");
// const storyCardList = document.getElementById("storyCardList");
// const descrptionLength = document.getElementById("descLength");
// const maxLength = 100;
// const warnLength = 90;

// // Event Listeners
// ["keyup", "change", "keydown", "focus"].forEach(function (e) {
//   description.addEventListener(e, textCounter);
// });

// ["cut", "copy", "paste"].forEach(function (e) {
//   description.addEventListener(e, ccp);
// });

// // prevent cut copy paste
// function ccp(e) {
//   e.preventDefault();
//   alert("no cut copy paste allowed");
//   return false;
// }

// // close story
// const closeStory = (storyId) => {
//   storyList.map((story) =>
//     story.id === storyId ? (story.storyStatus = "closed") : ""
//   );
//   updateList("", storyList);
// };

// // delete story
// const deleteStory = (storyId) => {
//   const updatedList = storyList.filter((story) => story.id != storyId);
//   updateList("", updatedList);
// };

// // to update the store (local storage)
// const updateStore = (list) => {
//   localStorage.setItem("storyList", JSON.stringify(list));
// };

// // update the story list
// const updateList = (newStory, updatedList) => {
//   if (newStory) {
//     storyList = [...storyList, newStory];
//   }
//   if (updatedList) {
//     storyList = [...updatedList];
//   }
//   if (storyList.length > 0) {
//     let a = "<div><h2 class=display-6 pb-2>Story List</h2></div>";
//     storyList.map((issue) => {
//       a += `
//        <div id=${issue.id} class="col-4">
//        <div class="p-3">
//          <div class="card" >
//            <div class="card-header">Priority: ${priorityList[issue.priority]} 
//            <span class="mx-4 ${
//              issue.storyStatus === "open"
//                ? "badge bg-primary"
//                : "badge bg-danger"
//            }"> 
//             ${issue.storyStatus === "open" ? "open" : "closed"}</span>
//             </div>
//             <div class="card-body">
//             <p class="text-start pb-1">Assigned to : ${
//               assignedToList[issue.assignedTo]
//             }</p>
//              <p class="card-text text-start">${issue.description}</p>
//              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//              ${
//                issue.storyStatus === "closed"
//                  ? ""
//                  : ` <button type="button" onclick="closeStory('${issue.id}')" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="close story">Close</button>`
//              }
//                <button type="button" onclick="deleteStory('${
//                  issue.id
//                }')" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="delete story" >Delete</button>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//       `;
//     });
//     storyCardList.innerHTML = a;
//     updateStore(storyList);
//   } else {
//     let a = `<div>
//                 <h2 class=display-6 pb-2>Story List</h2>
//                 <p p-5>No story to display</P>
//               </div>
//             `;
//     storyCardList.innerHTML = a;
//     updateStore(storyList);
//   }
// };

// // init the app
// const initApp = () => {
//   const list = JSON.parse(localStorage.getItem("storyList"));
//   updateList("", list);
// };
// initApp();

// // form validation
// const formValidate = (e) => {
//   e.preventDefault();
//   if (description.value === "") {
//     alert("Please enter description");
//     description.focus();
//     return;
//   }
//   if (description.value.length < 60 || description.value.trim().length < 60) {
//     alert("Description should be atleast 60 charecters");
//     description.focus();
//     return;
//   }
//   if (assignedto.value === "") {
//     alert("Please select assigned to");
//     assignedto.focus();
//     return;
//   }
//   if (priority.value === "") {
//     alert("Please select priority");
//     priority.focus();
//     return;
//   }
//   const newStory = {
//     id: "id" + Math.random().toString(16).slice(2), //generate id
//     description: description.value,
//     assignedTo: assignedto.value,
//     priority: priority.value,
//     storyStatus: "open",
//   };
//   description.value = "";
//   assignedto.value = "";
//   priority.value = "";
//   descrptionLength.innerHTML = "";
//   updateList(newStory, "");
// };

// // charecter count
// function textCounter() {
//   let count = description.value.length;
//   descrptionLength.innerHTML = `${maxLength - count} charecters left`;
//   descrptionLength.classList.remove("text-danger");
//   if (count == "") {
//     descrptionLength.innerHTML = `${maxLength} charecters left`;
//   }

//   if (count > maxLength) {
//     description.value = description.value.substring(0, maxLength);
//     count--;
//   }
//   if (count > warnLength) {
//     descrptionLength.classList.add("text-danger");
//     descrptionLength.innerHTML = `${maxLength - count} charecters left`;
//   }
// }

// storySubmitBtn.addEventListener("click", formValidate);

// // Change Theme
// function setTheme(theme) {
//   document.documentElement.style.setProperty("--primary-color", theme);
//   localStorage.setItem("movie-theme", theme);
// }
// setTheme(localStorage.getItem("movie-theme") || chathams_blue);
// Init priority list, assigned to list and stories array
const priorityList = ["Low", "Medium", "High"];
const assignedToList = ["Edwin", "Tom", "Carl", "Jerome", "Carmelo"];
let storyList = [];

// Default theme
let chathams_blue = "#1A4B84";

// Elements
const taskTitle = document.getElementById("taskTitle");
const description = document.getElementById("description");
const assignedto = document.getElementById("assignedto");
const priority = document.getElementById("priority");
const storySubmitBtn = document.getElementById("storySubmitBtn");
const storyCardList = document.getElementById("storyCardList");
const descrptionLength = document.getElementById("descLength");
const maxLength = 100;
const warnLength = 90;

// Event Listeners
["keyup", "change", "keydown", "focus"].forEach(function (e) {
  description.addEventListener(e, textCounter);
});

["cut", "copy", "paste"].forEach(function (e) {
  description.addEventListener(e, ccp);
});

// prevent cut copy paste
function ccp(e) {
  e.preventDefault();
  alert("No cut copy paste allowed");
  return false;
}

// close story
const closeStory = (storyId) => {
  storyList.map((story) =>
    story.id === storyId ? (story.storyStatus = "closed") : ""
  );
  updateList("", storyList);
};

// delete story
const deleteStory = (storyId) => {
  const updatedList = storyList.filter((story) => story.id != storyId);
  updateList("", updatedList);
};

// to update the store (local storage)
const updateStore = (list) => {
  localStorage.setItem("storyList", JSON.stringify(list));
};

// update the story list
const updateList = (newStory, updatedList) => {
  if (newStory) {
    storyList = [...storyList, newStory];
  }
  if (updatedList) {
    storyList = [...updatedList];
  }
  if (storyList.length > 0) {
    let a = "<div><h2 class=display-6 pb-2>Story List</h2></div>";
    storyList.map((issue) => {
      a += `<div class="card">
                <div class="card-body">
                  <h4 class="card-title">Task Title: ${issue.taskTitle}</h4>
                  <p class="card-text">Task ID: ${issue.id}</p>
                  <p class="card-text">Status: ${issue.storyStatus}</p>
                  <p class="card-text">Priority: ${issue.priority}</p>
                  <p class="card-text">Assigned To: ${issue.assignedTo}</p>
                  <p class="card-text">Description: ${issue.description}</p>
                  <button class="btn btn-danger" onclick="deleteStory(${issue.id})">Delete</button>
                  <button class="btn btn-warning" onclick="closeStory(${issue.id})">Close</button>
                </div>
              </div>`;
    });
    storyCardList.innerHTML = a;
  } else {
    storyCardList.innerHTML = "<p>No stories added yet!</p>";
  }
  updateStore(storyList);
};

// generate random id
const getRandomId = () => {
  return Math.floor(Math.random() * 100000);
};

// get input values
const getInputValues = () => {
  const taskTitleValue = taskTitle.value.trim();
  const descriptionValue = description.value.trim();
  const assignedToValue = assignedToList[assignedto.value];
  const priorityValue = priorityList[priority.value];
  const storyStatus = "open";
  const id = getRandomId();

  return {
    taskTitle: taskTitleValue,
    description: descriptionValue,
    assignedTo: assignedToValue,
    priority: priorityValue,
    storyStatus: storyStatus,
    id: id,
  };
};

// form validation
const formValidation = () => {
  if (!taskTitle.value.trim()) {
    alert("Task title is required");
    return false;
  }

  if (!description.value.trim()) {
    alert("Task description is required");
    return false;
  }

  if (!assignedto.value) {
    alert("Assigned to is required");
    return false;
  }

  if (!priority.value) {
    alert("Priority is required");
    return false;
  }

  return true;
};

// clear input values
const clearInputValues = () => {
  taskTitle.value = "";
  description.value = "";
  assignedto.value = "";
  priority.value = "";
};

// form submit
storySubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (formValidation()) {
    const story = getInputValues();
    updateList(story, "");
    clearInputValues();
  }
});

// text counter
function textCounter() {
  const descValue = description.value;
  const descLength = descValue.length;
  descrptionLength.innerHTML = `length: ${descLength}/${maxLength}`;

  if (descLength > maxLength) {
    description.value = descValue.substring(0, maxLength);
    alert("You have reached maximum limit of description");
    return false;
  } else if (descLength >= warnLength && descLength <= maxLength) {
    descrptionLength.style.color = "red";
  } else {
    descrptionLength.style.color = "black";
  }
}

// load the data from the store
window.onload = () => {
  const data = localStorage.getItem("storyList");
  if (data) {
    storyList = JSON.parse(data);
    updateList("", storyList);
  }
};
