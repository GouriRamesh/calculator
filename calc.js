function displayname(num){
    result.value+=num //result.value=result.value+num
}
function evaluateExpr(){
    // expr=result.value
    // op=eval(expr)
    // result.value=op
    result.value=eval(result.value)
}
function allclear(){
    result.value=""
}
function removeone(){
    result.value=result.value.slice(0,-1)
}