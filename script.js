function nextStep(current, next)
{
    // Hides the current step

    document
        .getElementById("step" + current)
        .classList
        .remove("active");

    // Shows the next step

    document
        .getElementById("step" + next)
        .classList
        .add("active");
}

function saveUserData()
{
    // Saves full name to local storage

    localStorage.setItem(
        "fullName",
        document.getElementById("fullName").value
    );

    // Saves username to local storage

    localStorage.setItem(
        "username",
        document.getElementById("username").value
    );

    // Saves email address

    localStorage.setItem(
        "email",
        document.getElementById("email").value
    );

    // Saves selected gender

    localStorage.setItem(
        "gender",
        document.getElementById("gender").value
    );

    // Saves user's age

    localStorage.setItem(
        "age",
        document.getElementById("age").value
    );

    // Saves user's height

    localStorage.setItem(
        "height",
        document.getElementById("height").value
    );

    // Saves user's weight

    localStorage.setItem(
        "weight",
        document.getElementById("weight").value
    );

    // Saves fitness goal

    localStorage.setItem(
        "goal",
        document.getElementById("goal").value
    );

    // Saves activity level

    localStorage.setItem(
        "activity",
        document.getElementById("activity").value
    );

    // Redirects user to dashboard page

    window.location.href = "dashboard.html";
}