//Split Happens
findScore = function(score){
  score = score.replace(/\-/g,"");
  score = score.split("")

  if(score[score.length-3] === "X"){
    score.splice(-2, 2)
  }

  if(score[score.length-2] === "/"){
    score.splice(-1, 1)
  }

  for (var i = 0; i < score.length; i++) {
    if(score[i] === "X"){
      score[i] = 30;
    }
    else if(score[i] === "/"){
      score[i-1] = parseInt(score[i-1]) ;
      score[i-1] += 10;
      delete score[i];
    }
    else{
      score[i] = parseInt(score[i]);
    }
  }

  console.log("Score Table: " + score);
  console.log(score.reduce(function(a,b){
    return a + b;
  }))
}

//Expect to return 90
findScore("9-9-9-9-9-9-9-9-9-9-");

//Expect to return a perfect score of 300
findScore("XXXXXXXXXXXX");

//Expect to return 150
findScore("5/5/5/5/5/5/5/5/5/5/5");