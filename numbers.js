const tdList = document.querySelectorAll("td");
// const tdList2 = document.querySelectorAll(".td");

// console.log(tdList);
const rand = () => {
    return Math.round(Math.random() * 100);
};

const intervalID = setInterval(() => {
    let tdList2 = document.querySelectorAll(".td");
    tdList2.forEach((td) => {
        td.classList.remove("accent");
        let num = rand();
        if (num === 31) {
            td.classList.add("accent");
        }
        td.textContent = `${num}`;
    });
}, 2500);
