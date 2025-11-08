// Death Clock - JavaScript Logic

// ---------------------------------------------------------------------------------
//                      here we got started for writing JS code
//   ------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------- 
//                      here we declare all variables
// -------------------------------------------------------------------------------------
const startBtn = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const introSection = document.getElementById('intro');
const form = document.getElementById('lifestyle-form');
const yearsLeftDiv = document.getElementById('years-left');
const summaryP = document.getElementById('summary');
const countdownDiv = document.getElementById('countdown');
const retryBtn = document.getElementById('retry');
const bg = document.getElementById('bg-overlay');

startBtn.addEventListener('click', () => {
    introSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    document.body.style.background = "#000";
});
// ---------------------------------------------------------------------------------
//                      made by Ganesh thigale with love and code
// ------------------------------------------------------------------------------------


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // ---------------------------------------------------------------------------------
    //            here we get all values from input fields
    //   ------------------------------------------------------------------------------------
    const age = +document.getElementById('age').value;
    const sleep = +document.getElementById('sleep').value;
    const exercise = +document.getElementById('exercise').value;
    const diet = document.getElementById('diet').value;
    const smoke = document.getElementById('smoke').value;
    const stress = +document.getElementById('stress').value;
    const happy = +document.getElementById('happy').value;

    // ---------------------------------------------------------------------------------
    //        here we calculate life expectancy based on inputs
    //   ------------------------------------------------------------------------------------
    let life = 80;
    if (sleep < 5) life -= 5;
    if (exercise < 2) life -= 4;
    if (diet === "junk") life -= 5;
    if (diet === "healthy") life += 2;
    if (smoke === "yes") life -= 6;
    if (stress > 7) life -= 3;
    if (happy > 7) life += 2;

    // ---------------------------------------------------------------------------------
    //        here we calculate years left and total seconds left
    //   ------------------------------------------------------------------------------------
    const yearsLeft = life - age;
    const totalSeconds = yearsLeft * 365 * 24 * 60 * 60;

    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    yearsLeftDiv.textContent = `${yearsLeft.toFixed(1)} years left`;
    summaryP.textContent = getSummary(sleep, exercise, diet, smoke, stress, happy);

    startCountdown(totalSeconds);
});
// ---------------------------------------------------------------------------------
//                                  here we declare all msg
//   ------------------------------------------------------------------------------------
function getSummary(sleep, exercise, diet, smoke, stress, happy) {
    let msg = "";
    if (smoke === "yes") msg += "The smoke you inhale whispers your countdown... ";
    if (diet === "junk") msg += "Grease runs through your veins like poison. ";
    if (exercise < 2) msg += "Your muscles mourn their own decay. ";
    if (stress > 7) msg += "Your mind is the sharpest killer of them all. ";
    if (happy > 8) msg += "Strangely, your smile might buy you more time. ";
    if (!msg) msg = "You're untouchable... for now.";
    return msg;
}
// <!---------------------------------------------------------------------------------
//  hrer we rite countdown working logic 
//   ------------------------------------------------------------------------------------>
function startCountdown(totalSeconds) {
    let seconds = totalSeconds;
    const timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            countdownDiv.textContent = "⛓ Time’s up!";
            document.body.style.background = "crimson";
            bg.style.animation = "none";
        } else {
            const years = Math.floor(seconds / (365 * 24 * 60 * 60));
            const days = Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60));
            countdownDiv.textContent = `${years} years, ${days} days left...`;
            seconds -= 1;
        }
    }, 1000);
}

retryBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    countdownDiv.textContent = "";
    document.body.style.background = "#000";
});


// ---------------------------------------------------------------------------------
//                      made by Ganesh thigale with love and code
// ------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
//                                  end of code
//   ------------------------------------------------------------------------------------