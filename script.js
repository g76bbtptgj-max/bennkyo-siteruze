
let tapCount = 0;
let gameStarted = false;
let timeLimit;

const monsterData = {
  tobi: {
    name: "トビカガチ"
  },
  zino: {
    name: "ジンオウガ"
  }
};

const monsterSelect =
document.getElementById("monsterSelect");

const monsterImage =
document.getElementById("monsterpreview");


//カガチ探すボタン
const button1 = document.getElementById("button1");
  const message1 = document.getElementById("message1")
  const message2 = document.getElementById("message2")
//モンス切り替え
const monsterSelect = document.getElementById("monsterSelect");
const monsterImage = document.getElementById("monsterpreview");

//モンスター選択に応じてボタンのテキストを変更
monsterSelect.addEventListener("change", function(){
  const selectedMonster =
    monsterData[monsterSelect.value];

  button1.textContent =
    selectedMonster.name + "を探す";
});  
monsterImage.src = monsterImages[monsterSelect.value];

//ボタン押したときの処理
  button1.addEventListener("click",function(){
    const random=Math.random();
    if (random < 0.8) {
      message1.textContent = "何にも起こらなかった！";
      message1.style.fontSize = "50px";
      message1.style.color = "yellow";
    //あらわれた
    } else if (random < 0.9) {
      message1.textContent = monsterTexts[monsterSelect.value]+"があらわれた！";
      message1.style.fontSize = "50px";
      message1.style.color = "yellow";
      const audio = new Audio("./audio/maow.mp3");
      alert("音が出るよ");
      audio.play();
    } 
    //ごろごろした
    else {
      message2.textContent = monsterTexts[monsterSelect.value]+"がごろごろした！";
      message2.style.fontSize = "50px";
      message2.style.color = "yellow";
      
    }
  });
//音出すやつ定義
const crash = new Audio("./audio/crash.mp3");
const thunder = new Audio("./audio/thunder.mp3");
//多分ボタンとカウンター？
 const button = document.getElementById("kagachibutton");
  const message = document.getElementById("message");
  const counter = document.getElementById("counter");


const monsterImages={
  tobi:"image/kagachi-normal.png",
  zino:"image/zinogre-normal.png"
};

monsterSelect.addEventListener("change",function(){
  monsterImage.src = monsterImages[monsterSelect.value];
});

 let count =0;
  button.addEventListener("click",function(){
   
count++;
counter.textContent="つついた回数:"+count;
if(count>=20){
  
      alert("音が出るよ");
      setTimeout(function(){
    crash.play();
      }, 1000);
      
  button.style.animation="explode 1s forwards";
button.disabled=true;
button.style.pointerEvents="none";
return;
}  
//なんかつつく分岐
    const random = Math.random();
    if (random < 0.2) {
      message.textContent = "ビリビリした！";
      message.style.backgroundColor = "black";
      message.style.fontSize = "50px";
      message.style.animation = "biribiri 0.1s infinite";
      setTimeout(function(){
        message.style.animation = "";
      }, 3000);
      alert("音が出るよ");
      setTimeout(function(){
        thunder.play();
      }, 1000);
      setTimeout(function(){
        thunder.pause();
        thunder.currentTime = 0;
      }, 3000);
    } else if (random < 0.5) {
      message.textContent = "かまれた！";
      message.style.fontSize = "50px";
      message.style.backgroundColor = "black";
    } else {
      message.textContent = "逃げた！";
    }
    message.style.color = "cyan";
  });

const monster = document.getElementById("monsterpreview");
monster.addEventListener("click",function(){
if(!gameStarted){

    gameStarted = true;

    timeLimit = setTimeout(function(){

        message.textContent = "逃げられた！";

        tapCount = 0;
        gameStarted = false;

    },10000);
}
    tapCount++;

    if(tapCount >= 5){
        message.textContent = "捕獲成功！";
        clearTimeout(timeLimit);
    }

    const randomX = Math.random() * (window.innerWidth - 300);
    const randomY = Math.random() * (window.innerHeight -300);
    
    monsterImage.style.left = randomX + "px";
    monsterImage.style.top = randomY + "px";
return;
  });
