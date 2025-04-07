var users = [];

function addUser() {
    let user = document.getElementById('name').value;
    users.push(user);

    updateList();
}

function updateList() {
    const main = document.getElementById('user-list');
    
    while (main.rows.length > 1) { 
        main.deleteRow(1); 
    }

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = users[i];

        
        let tdTask = document.createElement('td');
        tdTask.textContent = ""; 
        let tdStatus = document.createElement('td');
        tdStatus.innerHTML = `
            <select name="status">
                <option>--Select--</option>
                <option value="Assign">Assign</option>
                <option value="InProgress">InProgress</option>
                <option value="Completed">Completed</option>
            </select>`;
        let tdAction = document.createElement('td');
        tdAction.innerHTML = `<button onclick="editUser()">Edit</button> <button>Delete</button>`;

        tr.appendChild(tdName);
        tr.appendChild(tdTask);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAction);
        main.appendChild(tr);
    }
}

function editUser(){
    document.getElementById('test').style.display = "block";
}