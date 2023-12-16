
function FieldNames(str){

    str=str.replaceAll("_"," ")
    var splitStr=str.split(" ")
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr.length[i] < splitStr.length) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        }
    }
    str = splitStr.join(" ");
    return str
}

module.exports={FieldNames}