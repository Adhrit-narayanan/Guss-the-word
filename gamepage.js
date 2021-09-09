player1_name=localStorage.getItem("player1_name_input");
player2_name=localStorage.getItem("player2_name_input");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
    lengthdivide2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthdivide2);
    lengthminus1=word.length-1;
    charAt3=word.charAt(lengthminus1);
    removecharAt1=word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");
    questionword="<h4 id='worddisplay'>Q."+removecharAt3+"</h4>";
    inputbox="<br> Answer :<input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("inputcheckbox").value;
    answer=get_answer.toLowerCase();
   if(answer==word){
       if(answer_turn=="player1"){
           player1_score=player1_score+1;
           document.getElementById("player1_score").innerHTML=player1_score;
       }
       else{
           player2_score=player2_score+1;
           document.getElementById("player2_score").innerHTML=player2_score;
       }
    }
    if(question_turn=="player1"){
   question_turn="player2";
   document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
    }
   else{
       question_turn="player1";
       document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
   }
   if(answer_turn=="player1"){
       answer_turn="player2";
       document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
   }
   else{
    answerturn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
   }
   document.getElementById("output").innerHTML="";
}