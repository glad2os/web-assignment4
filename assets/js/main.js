/*
    Ruslan Ibragimov
    301199215
 */
const grades = [
    "Not satisfactory 👿",
    "Fair 😈",
    "Good 🧐",
    "Excellent 😎👍"
];

const jsonQuestionList = {
    "Instructor": [
        "<strong>knowlledge</strong> of subject",
        "<strong>helpfulness</strong>",
        "<strong>courtesy and respect</strong> for all students",
        "communication skills",
        "overall <strong>perfomance</strong>"
    ],
    "Course": [
        "How would you rate the <strong>course materials</strong>",
        "How much did this course meet your <strong>expectations</strong>",
        "How would you rate this course (<strong>overall</strong>)"
    ],
    "General Information": [
        "Was the <strong>course outline</strong> reviewed/explained at the beginning of your course",
        "Would you <strong>recommend</strong> this course to a friend with the same interests"
    ]
}

let questionCounter = 0;

for (const question in jsonQuestionList) {

    let questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-block");

    questionWrapper.style.borderRadius = Math.floor(Math.random() * 40) + "px " + Math.floor(Math.random() * 25) + "px";
    let questionHeader = document.createElement("div");
    questionHeader.classList.add("question-header");

    questionHeader.innerText = question;

    let questionContent = document.createElement("div");
    questionContent.classList.add("question-content");

    jsonQuestionList[question].forEach(value => {
        questionCounter++;

        questionContent.insertAdjacentHTML("beforeend", `<p>${questionCounter + ". " + value}?</p>`);

        let range = document.createElement('input');
        range.min = 1;
        range.type = "range";
        range.max = 4;
        range.value = 0;
        range.id = question + jsonQuestionList[question].indexOf(value);

        let label = document.createElement("label");
        label.htmlFor = question + jsonQuestionList[question].indexOf(value);
        // label.innerText = grades[grades.length-1]

        range.onchange = ev => {
            label.innerText = grades[ev.target.value - 1];
        }

        questionContent.insertAdjacentElement("beforeend", range);
        questionContent.insertAdjacentElement("beforeend", label);
    });

    questionWrapper.appendChild(questionHeader);
    questionWrapper.appendChild(questionContent);

    let htmlDivElement = document.createElement("div");

    let clear = document.createElement("input");
    clear.type = "button";
    clear.value = "Clear values"
    clear.onclick = ev => {
        ev.target.parentNode.parentNode.querySelectorAll("label").forEach(value => {
            value.innerText = "";
        });
        for (let i = 0; i < ev.target.parentNode.parentNode.querySelectorAll("input").length - 1; i++) {
            ev.target.parentNode.parentNode.querySelectorAll("input")[i].value = 0;
        }
    }
    htmlDivElement.appendChild(clear);
    questionContent.insertAdjacentElement("beforeend", htmlDivElement);
    // document.body.insertAdjacentElement("beforeend", questionWrapper);
    document.body.querySelector(".wrapper").insertAdjacentElement("beforeend", questionWrapper);

}
questionCounter++;

/*
 Other block
 duplicating code
 */


let questionWrapper = document.createElement("div");
questionWrapper.classList.add("question-block");

questionWrapper.style.borderRadius = Math.floor(Math.random() * 40) + "px " + Math.floor(Math.random() * 25) + "px";
let questionHeader = document.createElement("div");
questionHeader.classList.add("question-header");

questionHeader.innerHTML = "Any other comments <i style='font-size: 1rem;'>please use the back of the computer card or this paper if necessary</i>";

let questionContent = document.createElement("div");
questionContent.classList.add("question-content");

// just three iterations
questionContent.insertAdjacentHTML("beforeend", `<p>${questionCounter}. What is the best thing about this course? <textarea name="" id="textarea1" spellcheck="true" cols="35" rows="1"></textarea></p>`);
questionCounter++;
questionContent.insertAdjacentHTML("beforeend", `<p>${questionCounter}. How could we improve this course? <textarea name="" id="textarea2" spellcheck="true" cols="35" rows="1"></textarea></p>`);
questionCounter++;
questionContent.insertAdjacentHTML("beforeend", `<p>${questionCounter}. How could we improve this course? <textarea name="" id="textarea3" spellcheck="true" cols="60" rows="7"></textarea></p>`);

let htmlDivElement = document.createElement("div");

let clear = document.createElement("input");
clear.type = "button";
clear.value = "Clear values"
clear.onclick = ev => {
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea3").value = "";
}
questionWrapper.appendChild(questionHeader);
questionWrapper.appendChild(questionContent);

htmlDivElement.appendChild(clear);
questionContent.insertAdjacentElement("beforeend", htmlDivElement);

document.body.querySelector(".wrapper").insertAdjacentElement("beforeend", questionWrapper);

/* submit event */
let data = [];

document.getElementById('submit').addEventListener("click",ev => {
    data = [];
    document.querySelectorAll("input[type=range]").forEach(value => {
        data.push(grades[parseInt(value.value)]);
    });
    data.push(document.getElementById("textarea1").value);
    data.push(document.getElementById("textarea2").value);
    data.push(document.getElementById("textarea3").value);

    /*
        Here should be XMLHttpRequest
     */

    alert("Answers was:  " + data);
})