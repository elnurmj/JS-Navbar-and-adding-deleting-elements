let ul = document.querySelector(".list-group");
let myInput = document.querySelector(".form-control");


myInput.onkeypress = function (e) {

    if (e.keyCode == 13 && myInput.value != "") {
        ul.innerText = "";
        for (let i = 1; i <= myInput.value; i++) {
            let box = document.createElement("div");
            box.classList.add("elements-box");
            ul.append(box);
            let li = document.createElement("li");
            li.classList.add("list-group-item", "mt-2");
            li.innerText = i;
            let icon = document.createElement("i");
            icon.classList.add("fas", "fa-times", "mt-2");
            box.append(li);
            box.append(icon);

            icon.onclick = function () {
                box.remove();
            }
        }
        myInput.value = "";
    }
} 