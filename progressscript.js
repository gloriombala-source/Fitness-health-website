// 26435292 Alexandra Nicolau
function updateProgress() {

    let target1 = 50; //Sets the target value

    let input = document.getElementById("proteinInput"); //This takes the value put in by the user
    let value1 = Number(input.value); //Converts the input from text(string) to a number so that it can be used in calculations

    if (value1 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target1);
        return;
        //This makes sure that the user puts in a valid number
    }

    let percentage1 = (value1 / target1) * 100; //Calculates the percentage

    let bar1 = document.getElementById("proteinProgress"); //Stores proteinProgress in bar1

    bar1.style.width = percentage1 + "%"; //Updates the bar based on the percentage

    bar1.innerHTML = Math.round(percentage1) + "%"; //Rounds the percentage to the nearest whole number

    if (value1 >= target1) {
       document.getElementById("proteinResult").textContent =
       ("Congrats! You've reached your goal for the day!");
    }
    //If the user puts in a value equal to or greater than the goal the message will be diplayed
}

function updateProgress2() {

    let target2 = 35;

    let input = document.getElementById("fibreInput");
    let value2 = Number(input.value);

    if (value2 < 0 ||  input.value === "") {
        alert("Enter a value between 0 and " + target2);
        return;
    }

    let percentage2 = (value2 / target2) * 100;

    let bar2 = document.getElementById("fibreProgress");

    bar2.style.width = percentage2 + "%";

    bar2.innerHTML = Math.round(percentage2) + "%";

    if (value2 >= target2) {
       document.getElementById("fibreResult").textContent =
       ("Congrats! You've reached your goal for the day!");
    }
}
//Works the same as previous functions

function updateProgress3() {

    let target3 = 250;

    let input = document.getElementById("carbInput");
    let value3 = Number(input.value);

    if (value3 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target3);
        return;
    }

    let percentage3 = (value3 / target3) * 100;

    let bar3 = document.getElementById("carbProgress");

    bar3.style.width = percentage3 + "%";

    bar3.innerHTML = Math.round(percentage3) + "%";

     if (value3 >= target3) {
        document.getElementById("carbResult").textContent =
        "Congrats! You've reached your goal for the day!";
    }
}
//Works the same as previous functions


function updateProgress4() {

    let target4 = 50;

    let input = document.getElementById("fatsInput");
    let value4 = Number(input.value);

    if (value4 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target4);
        return;
    }

    let percentage4 = (value4 / target4) * 100;

    let bar4 = document.getElementById("fatsProgress");

    bar4.style.width = percentage4 + "%";

    bar4.innerHTML = Math.round(percentage4) + "%";

    
       if (value4 >= target4) {
             document.getElementById("fatsResult").textContent =
          ("Congrats! You've reached your goal for the day!");
    }
}
//Works the same as previous functions


document.getElementById("proteinInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress();
});

document.getElementById("fibreInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress2();
});

document.getElementById("carbInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress3();
});

document.getElementById("fatsInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress4();
});
//This allows the user to press enter to input a value














const ctx = document.getElementById('piechart'); //Finds the piechart and stores it in ctx

const piechart = new Chart(ctx, { //Uses Chart.js to create a chart on the canvas
    type: 'pie', //Tells Chart.js to make it a pie chart

    data: { 
        labels: ['Vitamin A', 'Vitamin C', 'Vitamin Bs','Vitamin D', 'Calcium', 'Iron', 'Magnesium', 'Zinc', 'Sodium'],

        datasets: [{
            data: [0.008, 80, 23.8, 0.015, 1100, 18, 310, 8, 1500],

            backgroundColor: [
                '#0073E6',
                '#63B3ED',
                '#174A7E',
                '#C4E538',
                '#A8D91A',
                '#8BAF65',
                '#FF6B00',
                '#FFAB70',
                '#6bdfc4',
            ],

            borderWidth: 2,
            borderColor: 'white'

        }] //This inputs all the data in the piechart; the labels, each value of the corresponding label and the colour of the piechart

    },

    options: {
        responsive: true, //This allows the chart to resize if the window or page size changes

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white'
                } //This puts the legend at the bottom and colours the text white
            },

            tooltip: {
                enabled: true
            } //This allows each section of the piechart to be highlighted when the user hovers over it 
        }
    }
});

function updateChart() {

    let vita = Number(document.getElementById('a').value); //This takes the value input of a (Vitamin A), changes it from text to a number and stores it in vita
    let vitc = Number(document.getElementById('c').value);
    let vitb = Number(document.getElementById('b').value);
    let vitd = Number(document.getElementById('d').value);
    let calci = Number(document.getElementById('cal').value);
    let iron = Number(document.getElementById('ir').value);
    let magn = Number(document.getElementById('mag').value);
    let zin = Number(document.getElementById('zinc').value);
    let sodium = Number(document.getElementById('sodi').value);

    piechart.data.datasets[0].data = [
        vita,
        vitc,
        vitb,
        vitd,
        calci,
        iron,
        magn,
        zin,
        sodium
    ];
    //This replaces the piecharts data with the numbers read from the inputs if the user changes them

    piechart.update(); //Updates the piechart
}

















function getWeek() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() - date.getDay() + 1);

    return date.toDateString();
}


let currentWeek = getWeek();
let savedWeek = localStorage.getItem("savedWeek");

let total = Number(localStorage.getItem("total")) || 0;


if (savedWeek !== currentWeek) {
    total = 0;

    localStorage.setItem("total", 0);
    localStorage.setItem("savedWeek", currentWeek);
}


document.getElementById("total").textContent = total;



function logWorkouts() {

    let workouts = Number(document.getElementById("workouts").value);

    if (workouts > 0 && Number.isInteger(workouts)) {

        total = total + workouts;

        localStorage.setItem("total", total);

        document.getElementById("total").textContent = total;

        document.getElementById("workouts").value = "";

    } else {
        alert("Enter a valid number of workouts.");
    }
}

function updateProgress5() {

    let target1 = 10000;

    let input = document.getElementById("stepsInput");
    let value1 = Number(input.value);

    if (value1 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target1);
        return;
    }

    let percentage1 = (value1 / target1) * 100;

    let bar1 = document.getElementById("stepsProgress");

    bar1.style.width = percentage1 + "%";

    bar1.innerHTML = Math.round(percentage1) + "%";

    if (value1 >= target1) {
       document.getElementById("stepsResult").textContent =
       ("Congrats! You've reached your goal for the day!");
    }
}
document.getElementById("stepsInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress5();
})

function updateProgress6() {

    let target2 = 1500;

    let input = document.getElementById("calInput");
    let value2 = Number(input.value);

    if (value2 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target2);
        return;
    }

    let percentage6 = (value2 / target2) * 100;

    let bar2 = document.getElementById("calProgress");

    bar2.style.width = percentage6 + "%";

    bar2.innerHTML = Math.round(percentage6) + "%";


    if (value2 >= target2) {
       document.getElementById("calResult").textContent =
       ("Congrats! You've reached your goal for the day!");
    }
}
document.getElementById("calInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress6();
});


function updateProgress7() {

    let target2 = 2000;

    let input = document.getElementById("waterInput");
    let value2 = Number(input.value);

    if (value2 < 0 || input.value === "") {
        alert("Enter a value between 0 and " + target2);
        return;
    }

    let percentage7 = (value2 / target2) * 100;

    let bar2 = document.getElementById("waterProgress");

    bar2.style.width = percentage7 + "%";

    bar2.innerHTML = Math.round(percentage7) + "%";


    if (value2 >= target2) {
       document.getElementById("waterResult").textContent =
       ("Congrats! You've reached your goal for the day!");
    }
}
document.getElementById("waterInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateProgress7();
});
