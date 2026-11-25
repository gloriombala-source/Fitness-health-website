// streak count on the page
let streak = 12;

// Runs when a user clicks "Get Started" on any of the 3 subscription boxes
function selectPlan(plan) {
  alert("You selected: " + plan);
}

// Runs when a user clicks + Login Today
function logDay() {
  if (streak < 30) {
    streak++; // Adds 1 day to the streak
    document.getElementById("streak-num").textContent = streak; // Updates the number on screen
  }
  
  // Shows a reward pop-up once the user reaches 30 days
  if (streak === 30) {
    alert("🎉 30-day streak reached! You unlocked 14 days of Premium for free!");
  }
}