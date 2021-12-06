var n;
var InputNo=new Array();
do{
    n = parseInt(prompt("Nhap so nguyen n:"));
    InputNo.push(n);
    alert(InputNo.length);
}while(n<45 && n>0 && InputNo.length<6);
alert("du 6");
alert(InputNo);

var RandomNo=new Array();
do{
    var r = parseInt(Math.random()*45);
    RandomNo.push(r);
}while(RandomNo.length<6 && r>0);
alert(RandomNo);

var i,j;
var count=0;
for (i==0;i<InputNo.length;i++){
    for(j==0;j<RandomNo.length; j++) {
        if(InputNo[i] == RandomNo[j]){
            count++;
        }
    }
}
alert("InputNo: " + InputNo + "\nRandomNo: " + RandomNo + "\nCount: " + count);

if (count == 6) {
    alert("Jackpot");
} else if (count== 5) {
    alert("1st");
} else if (count ==4){
    alert("2nd");
} else if (count ==3){
    alert("3rd");
} else{
    alert("Gud Luck!");
}