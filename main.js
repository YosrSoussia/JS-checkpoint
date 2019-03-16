function bold() {
    var element = document.getElementById("text");
    element.classList.toggle("bold");
}
function italic() {
    var element = document.getElementById("text");
    element.classList.toggle("italic");
}
function underline() {
    var element = document.getElementById("text");
    element.classList.toggle("underline");
}
function changeFontFamily(selectTag){
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
}
function changeFontSize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontSize = listValue;
  }