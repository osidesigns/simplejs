const titleBox = document.getElementById('titleInputData');
const pageHeading = document.getElementById('titleArea');
titleBox.onkeyup = getInputData;

function getInputData() {

    pageHeading.innerHTML = '';
    document.getElementById('titleArea').innerText += titleBox.value;
}