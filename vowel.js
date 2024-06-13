function count(){
    var text=document.getElementById("text").value;
    var count = 0;
    text=text.toLowerCase();

    for(var i=0;i<text.length;i++){
        var char=text.charAt(i)
        if(isVowel(char)){
            count+=1;
        }
    }
    var result= document.getElementById("2");
    result.textContent="Total Vowels :" + count;


}

function isVowel(char){
    var Vowels=["a","e","i","o","u"];
    return Vowels.includes(char)
}