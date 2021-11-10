function convertToRoman(num) {
   

    let numToRoman={
        1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',
        20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
        100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',1000:'M',
        2000:'MM',3000:'MMM'
    };
    if(numToRoman[num]==undefined){
    num=String(num);
    let numList=num.split('');
    let z;
    let digits=[];
    for(let i=1;i<=numList.length+3;i++){
        z=numList.pop();
        z=(z*(10**i)/10);

        digits.push(numToRoman[z]);
    }
    //let x= numToRoman[num];
    digits.reverse();
    return digits.join('');
   }
   else{
       return numToRoman[num];
   }
}
   
   console.log(convertToRoman(104));