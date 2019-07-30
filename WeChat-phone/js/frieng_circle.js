var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
function extend1(){
	count1++;
	
	 if(count1%2==1){
		document.getElementById('frame1').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame1').style.display='none'
	 }
	 
}
function extend2(){
	count2++;
	
	 if(count2%2==1){
		document.getElementById('frame2').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame2').style.display='none'
	 }
	 
}
function extend3(){
	count3++;
	
	 if(count3%2==1){
		document.getElementById('frame3').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame3').style.display='none'
	 }
	 
}
function extend4(){
	count4++;
	
	 if(count4%2==1){
		document.getElementById('frame4').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame4').style.display='none'
	 }
	 
}
function extend5(){
	count5++;
	
	 if(count5%2==1){
		document.getElementById('frame5').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame5').style.display='none'
	 }
	 
}
function extend6(){
	count6++;
	
	 if(count6%2==1){
		document.getElementById('frame6').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame6').style.display='none'
	 }
	 
}
function extend7(){
	count7++;
	
	 if(count7%2==1){
		document.getElementById('frame7').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame7').style.display='none'
	 }
	 
}
function extend8(){
	count8++;
	
	 if(count8%2==1){
		document.getElementById('frame8').style.display='flex'
	 }
	 else{
	 		document.getElementById('frame8').style.display='none'
	 }
	 
}
// 
// document.getElementById('scroll').scroll(function(){   //开始监听滚动条
// 			var top = $(document).scrollTop();  //滚动条距离顶部的高度
// 
// 	                console.log(top)
// 
// 	                if(top > 200 ) {
// 	        	     document.getElementById('camera1').style.backgroundColor='rgba(20,20,20,1)'
// 	                }
// 
// 		})

window.onload=function(){
document.getElementById("scroll").onscroll=function(){height()};
function height(){
 var top = $(document.getElementById('scroll')).scrollTop();
 if (top>700){
	 document.getElementById('camera1').style.backgroundColor='#f7f7f7';
	 
 }
 else{
	 document.getElementById('camera1').style.backgroundColor='rgba(20,20,20,0.3)';
 }
// alert(top)
}
}
// document.getElementById('scroll').onscroll = function(){
//        
//       }
// function scroll(){
// 	var top = $(document.getElementById('scroll')).scrollTop();
// 	 
// }