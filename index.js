alert("Welcome to the Die Roll Gane");

function onDieRoll() {
    var die1val = Math.floor(Math.random() * 6) + 1;
    var die2val = Math.floor(Math.random() * 6) + 1;
    anounceWiner(die1val, die2val);
    addImage(die1val, die2val);

}

function addImage(die1val, die2val) {
    var strimg1 = "./images/die" + die1val + ".jpg";
    var strimg2 = "./images/die" + die2val + ".jpg";
    document.querySelector("#img1").setAttribute("src", strimg1);
    document.querySelector("#img2").setAttribute("src", strimg2);
}

function anounceWiner(die1val, die2val) {
    if (die1val === die2val) {
        document.querySelector("h1").innerHTML = "Draw";
    } else if (die1val > die2val) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }

}