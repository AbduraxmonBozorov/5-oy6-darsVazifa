let table = document.querySelector("table");
let tableBody = document.querySelector("tbody");
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let ind = 0;
let users = [];

function writeTable() {
    if (users.length == 0) {
        let tr = document.createElement("tr")
        let td = document.createElement("td");
        td.setAttribute("colspan", "6");
        td.innerHTML = "No data";
        tr.appendChild(td);
        tableBody.appendChild(tr);
    } else {
        users.forEach(item => {
            let tr = document.createElement("tr");

            let th = document.createElement("th");
            th.setAttribute("scope", "row");
            th.innerHTML = ++ind;

            let td1 = document.createElement("td");
            td1.innerHTML = item.firstName;

            let td2 = document.createElement("td");
            td2.innerHTML = item.lastName;

            let td3 = document.createElement("td");
            td3.innerHTML = item.phone;

            let td4 = document.createElement("td");
            td4.innerHTML = item.email;

            let td5 = document.createElement("td");
            td5.innerHTML = item.password;

            tr.append(th, td1, td2, td3, td4, td5);

            tableBody.appendChild(tr);
        })
    }
    return;
}
writeTable();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#passwordConfirm");
    let check = document.querySelector("#check");
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
    }
    // console.log(user);
    let i = 0;

    if (users.length) {
        users.forEach(item => {
            if (item.firstName != user.firstName || item.lastName != user.lastName) {
                if (i == 0) {
                    users.push(user);
                    let tr = document.createElement("tr");

                    let th = document.createElement("th");
                    th.setAttribute("scope", "row");
                    th.innerHTML = ++ind;

                    let td1 = document.createElement("td");
                    td1.innerHTML = user.firstName;

                    let td2 = document.createElement("td");
                    td2.innerHTML = user.lastName;

                    let td3 = document.createElement("td");
                    td3.innerHTML = user.phone;

                    let td4 = document.createElement("td");
                    td4.innerHTML = user.email;

                    let td5 = document.createElement("td");
                    td5.innerHTML = user.password;

                    tr.append(th, td1, td2, td3, td4, td5);

                    tableBody.appendChild(tr);
                    i++;
                }
            } else {
                alert("Xato");
            }
        })
    } 
    else {
        users.push(user);
        let tr = document.createElement("tr");

                    let th = document.createElement("th");
                    th.setAttribute("scope", "row");
                    th.innerHTML = ++ind;

                    let td1 = document.createElement("td");
                    td1.innerHTML = user.firstName;

                    let td2 = document.createElement("td");
                    td2.innerHTML = user.lastName;

                    let td3 = document.createElement("td");
                    td3.innerHTML = user.phone;

                    let td4 = document.createElement("td");
                    td4.innerHTML = user.email;

                    let td5 = document.createElement("td");
                    td5.innerHTML = user.password;

                    tr.append(th, td1, td2, td3, td4, td5);

                    tableBody.appendChild(tr);
    }


    e.target.reset();

})

