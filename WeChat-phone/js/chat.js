var count=0;
function send(){
	count++;
	if(count==1){
	var str1 = "谢谢您的夸奖";
	document.getElementById("send").innerText = str1;
	var speak1 = document.getElementById('speak1')
	speak1.innerHTML = "<div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	 "<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div>"
// 	 var time = setInterval(function(){
// 	 
// 		},1000)
// 	function stop(){
//         clearInterval(time);
//     }
		setTimeout(s2,2000)
	}
	if(count==2){
		str1 = "嗯，是，您说的对...";
		document.getElementById("send").innerText = str1;
		var speak3 = document.getElementById('speak');
		speak3.innerHTML = "<div class='speak3' id='speak3'><div class='left3 left'><p>谢谢您的夸奖</p><img src='../img/对话框.svg' alt=''></div>"+
		"<div class='right3 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
		"<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
		"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
		"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
		"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
		setTimeout(s3,3000)
		
	}
	if(count==3){
		str1 = "";
		document.getElementById("send").innerText = str1;
		var speak5 = document.getElementById('speak');
		speak5.innerHTML = "<div class='speak5 speak3' id='speak5'><div class='left5 left'>"+
	"<p>嗯，是，您说的对，青年一代应该有理想、有本领、有担当，这样国家才能够长治久安。</p>"+
	"<img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right5 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak4'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right4 right1' onclick='say()'><img src='../img/对话框白.svg' alt=''>"+
	"<p><img src='../img/说话.svg' alt=''>59″</p></div></div>"+
	"<div class='speak3' id='speak3'><div class='left3 left'><p>谢谢您的夸奖</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right3 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
	"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
		setTimeout(s4,1000)
	}
}
function s2(){
	var speak2 = document.getElementById('speak')
	speak2.innerHTML = "<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
	"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
}

function s3(){
	var speak6 = document.getElementById('speak')
	speak6.innerHTML = "<div class='speak2' id='speak4'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right4 right1' onclick='say()'><img src='../img/对话框白.svg' alt=''>"+
	"<p><img src='../img/说话.svg' alt=''>59″</p></div></div>"+
	"<div class='speak3' id='speak3'><div class='left3 left'><p>谢谢您的夸奖</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right3 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
	"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
}

function s4(){
	var speak4 = document.getElementById('speak')
	speak4.innerHTML = "<div class='speak2 speak6' id='speak6'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1 right6'><img src='../img/对话框白.svg' alt=''><p>行，小贰同志今天就说到这，再见</p></div></div>"+
	"<div class='speak5 speak3' id='speak5'><div class='left5 left'>"+
	"<p>嗯，是，您说的对，青年一代应该有理想、有本领、有担当，这样国家才能够长治久安。</p>"+
	"<img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right5 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak4'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right4 right1' onclick='say()'><img src='../img/对话框白.svg' alt=''>"+
	"<p><img src='../img/说话.svg' alt=''>59″</p></div></div>"+
	"<div class='speak3' id='speak3'><div class='left3 left'><p>谢谢您的夸奖</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right3 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
	"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
}


function say(){
	// alert(1);
	var audio = document.getElementById('say'); 
	if(audio!==null){             
    //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
	// alert(audio.paused);
  if(audio.paused)                     {                 
      audio.play();//audio.play();// 这个就是播放  
  }else{
   audio.pause();// 这个就是暂停
  }
}
}

function face(){
	var speak8 = document.getElementById('speak')
	speak8.innerHTML = "<div class='speak7 speak5 speak3' id='speak5'><div class='left7 left5'><img src='../img/告辞.jpg' alt=''>"+	
	"</div><div class='right5 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2 speak6' id='speak6'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1 right6'><img src='../img/对话框白.svg' alt=''><p>行，小贰同志今天就说到这，再见</p></div></div>"+
	"<div class='speak5 speak3' id='speak5'><div class='left5 left'>"+
	"<p>嗯，是，您说的对，青年一代应该有理想、有本领、有担当，这样国家才能够长治久安。</p>"+
	"<img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right5 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak4'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right4 right1' onclick='say()'><img src='../img/对话框白.svg' alt=''>"+
	"<p><img src='../img/说话.svg' alt=''>59″</p></div></div>"+
	"<div class='speak3' id='speak3'><div class='left3 left'><p>谢谢您的夸奖</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right3 right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"+
	"<div class='speak2' id='speak2'><div class='left1'><img src='../img/习主席.jpg' alt=''></div>"+
	"<div class='right1'><img src='../img/对话框白.svg' alt=''><p>哦，小贰同志你好，你最近表现不错，要好好努力</p></div></div>"+
	"<div class='speak1' id='speak1'><div class='left'><p>主席您好</p><img src='../img/对话框.svg' alt=''></div>"+
	"<div class='right'><img src='../img/head_erhuo.jpg' alt=''></div></div>"
}


function screen()
{
var screenwidth=400;//改为你要的网页宽度
var screenheight=300;//改为你要的网页高度
window.resizeTo(screenwidth,screenheight);
}
