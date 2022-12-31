function rot13(str) {
   var obj ={"N": "A" ,"O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M" }
  var obj2 ={ "A":"N" ,"B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z","!":"!",".":".","?":"?" }
// ABCDEFGHIJKLM
// NOPQRSTUVWXYZ
var str2=''
for (let i =0; i<=str.length;i++){

str2+=obj[str[i]]===undefined?obj2[str[i]]:obj[str[i]];


}
return str2.replace(/undefined/g," ").trim();
};

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
