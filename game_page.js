player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")
player1_score = 0
player2_score = 0
word = ""
document.getElementById("player1name").innerHTML = player1_name
document.getElementById("player2name").innerHTML = player2_name
document.getElementById("player1score").innerHTML = player1_score
document.getElementById("player2score").innerHTML = player2_score
document.getElementById("playerquestion").innerHTML = "questionturn = " + player1_name
document.getElementById("playeranswer").innerHTML = "answerturn = " + player2_name

function send(){
    get_number1 = document.getElementById("number1").value
    get_number2 = document.getElementById("number2").value
    word = get_number1* get_number2
    questionword = "<h4 id= 'word_display'> q."+ get_number1 +"x"+get_number2+" </h4>"
    inputbox = "<br> answer:<input id= 'inputcheckbox'>"
    checkbox = "<br> <br> <button onclick='check()'> check </button>"
    row = questionword + inputbox + checkbox
    document.getElementById("output").innerHTML = row
}
questionturn = "player1"
answerturn = "player2"
function check(){
answer = document.getElementById("inputcheckbox").value

if (word == answer){
if (answerturn == "player1") {
    player1_score = player1_score + 1
    document.getElementById("player1score").innerHTML = player1_score
} else {
    player2_score = player2_score + 1
    document.getElementById("player2score").innerHTML = player2_score
}
}
if (questionturn == "player1") {
    questionturn = "player2"
    document.getElementById("playerquestion").innerHTML = "questionturn = " + player2_name
} else {
    questionturn = "player1"
    document.getElementById("playerquestion").innerHTML = "questionturn = " + player1_name
}
if (answerturn == "player1") {
    answerturn = "player2"
    document.getElementById("playeranswer").innerHTML = "answerturn = " + player2_name
} else {
    answerturn = "player1"
    document.getElementById("playeranswer").innerHTML = "answerturn = " + player1_name
}
document.getElementById("output").innerHTML = ""
}
