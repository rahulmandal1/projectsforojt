function storeItem() {
    const ID = document.getElementById('ID').value;
    const name1 = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const user = {'Name': name1, 'Email': email, 'Password': password, 'Phone': phone};
    localStorage.setItem(ID, JSON.stringify(user));
}

function deletesItem() {
    const ID = document.getElementById('ID').value;
    localStorage.removeItem(ID);
}

function update() {
    const ID = document.getElementById('ID').value;
    const user = localStorage.getItem(ID);
    if (user) {
        storeItem();
    } else {
        alert('User not found');
    }
}

function readItem() {
    const ID = document.getElementById('ID').value;
    const user = localStorage.getItem(ID);
    if (user) {
        const userData = JSON.parse(user);
        alert(`Name: ${userData.Name}, Email: ${userData.Email}, Phone: ${userData.Phone}`);
    } else {
        alert('User not found');
    }
}

function deleteField() {
    const ID = document.getElementById('ID').value;
    const user = localStorage.getItem(ID);
    if (!user) {
        alert('User not found');
        return;
    }
    const userData = JSON.parse(user);
    const field = prompt("Enter the field you want to delete (Name, Email, Password, Phone):");
    if (userData.hasOwnProperty(field)) {
        delete userData[field];
        localStorage.setItem(ID, JSON.stringify(userData));
        alert(`${field} deleted successfully`);
    } else {
        alert(`Field ${field} not found`);
    }
}

function editField() {
    const ID = document.getElementById('ID').value;
    const user = localStorage.getItem(ID);
    if (!user) {
        alert('User not found');
        return;
    }
    const userData = JSON.parse(user);
    const field = prompt("Enter the field you want to edit (Name, Email, Password, Phone):");
    if (userData.hasOwnProperty(field)) {
        const newValue = prompt(`Enter new value for ${field}:`);
        userData[field] = newValue;
        localStorage.setItem(ID, JSON.stringify(userData));
        alert(`${field} updated successfully`);
    } else {
        alert(`Field ${field} not found`);
    }
}
function deleteItemByField() {
    const field = prompt("Enter the field you want to search by (Name, Email, Phone):");
    const value = prompt(`Enter the value of the ${field} you want to delete:`);
    let found = false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        if (user[field] === value) {
            localStorage.removeItem(key);
            alert(`User with ${field} ${value} deleted successfully`);
            found = true;
            break;
        }
    }
    if (!found) {
        alert(`No user found with ${field} ${value}`);
    }
}