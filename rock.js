let ct = 0, vt =0, lt=0,vper=0;

let mprs = ['r1','s1','bba'];
function rsp(e){
let d = Math.ceil(Math.random()*3);
let str;
let ming = mprs[e-1]+".png"
let ding = mprs[d-1]+".png";
switch(e) {
    case 1:
        if(d===1){
        str = "비겼습니다.";
        ct++;
        }else if(d == 2){
       str = "이겼지롱!";
         ct++;
         vt++;
        }else{
          str = "졌다ㅜ";
        ct++;
        lt++;
        }
        break;

        case 2:
        if(d == 2){
            str = "비겼습니다.";
            ct++;
        }else if(d == 3){
             str = "이겼지롱!";
             ct++;
             vt++; 
            }else{
           str = "졌다ㅜ";
            ct++;
            lt++;
            }
        break;
        case 3:
            if(d == 3){
                str = "비겼습니다.";
                ct++;
            }else if(d == 2){
                str = "졌다ㅜ";
                ct++;
                lt++;
            }else{
             str = "이겼지롱~";
             ct++;
             lt++;
            }
        break;
}
console.log(vt);
if(ct != 0) {
     vper = (vt / ct) * 100;
     vper = vper.toFixed(2);
}
document.getElementById('tk').innerHTML = str;
document.getElementById('ming').src="images/"+ming;
document.getElementById('ding').src="images/"+ding;

document.getElementById('ct').innerHTML = ct + "회";
document.getElementById('vt').innerHTML = vt + "회";
document.getElementById('lt').innerHTML = lt + "회";
document.getElementById('vper').innerHTML = "승률 : "+vper +"%";

if(vt + lt == 5){
    if(vt > lt ){
        document.getElementById('tk').innerHTML = "최종승리!!"
    }else{
        document.getElementById('tk').innerHTML = "최종패배!"
    }
    document.getElementById('r').disabled = true;
    document.getElementById('s').disabled = true;
    document.getElementById('p').disabled = true;
    document.getElementById('reset').innerHTML ="<button class='reset' onclick='reset()'> 다시도전</button>"
    
}
}
// 다시하기 버튼
function reset(){
    ct =0, vt = 0, lt = 0, vper = 0;
    document.getElementById('ct').innerHTML = ct + "회";
    document.getElementById('vt').innerHTML = vt + "회";
    document.getElementById('lt').innerHTML = lt + "회";
    document.getElementById('vper').innerHTML = "승률 : "+vper 
    document.getElementById('r').disabled = false;
    document.getElementById('s').disabled = false;
    document.getElementById('p').disabled = false;
    document.getElementById('tk').innerHTML = ""
    
}
// if(vt + lt == 5){
//     if(vt > lt){
//         document.getElementByIs('tk').innerHTML = "최종결과 : 승리";
    
//     }else{
//      document.getElementById('tk')= "최종결과 : 패배";
//     }
//     document.getElementById("r").disabled = true;
//     document.getElementById("s").disabled = true;
//     document.getElementById("p").disabled = true;



// }
