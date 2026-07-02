function calculateScore() {

    let score = 0;

    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;

    // Question 1
    if (q1 == "A" || q1 == "a") {
        score++;
    }

    // Question 2
    if (q2 == "B" || q2 == "b") {
        score++;
    }

    // Question 3
    if (q3 == "C" || q3 == "c") {
        score++;
    }

    // Display Result
    if (score == 3) {
        document.getElementById("result").innerHTML =
            "Your Score: " + score + "/3 <br> Excellent!";
    }
    else if (score == 2) {
        document.getElementById("result").innerHTML =
            "Your Score: " + score + "/3 <br> Good Job!";
    }
    else if (score == 1) {
        document.getElementById("result").innerHTML =
            "Your Score: " + score + "/3 <br> Keep Practicing!";
    }
    else {
        document.getElementById("result").innerHTML =
            "Your Score: 0/3 <br> Better Luck Next Time!";
    }
    if(score == 3){
    alert("🎉 Congratulations! You got all 3 answers correct!");
}
else if(score == 2){
    alert("😊 Nice Work! You got 2 correct answers.");
}
else if(score == 1){
    alert("👍 Good Try! You got 1 correct answer. Keep practicing!");
}
else{
    alert("🍀 Good Luck Next Time! Don't give up.");
}

}