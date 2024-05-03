fetch('pass.json')
.then(Response => Response.json())
.then(data => {
    const passKey = data.pass;
    document.getElementById('brr').value = passKey
})
.catch(error => console.error('Error fetching JSON', error));

function checkPassKey(){
    const userPass = document.getElementById('pass').value
    const pass     = document.getElementById('brr').value
    const enterKey = document.getElementById('enterKey')
    const main     = document.getElementById('main-content')
    if (userPass == pass) {
        enterKey.style.display = 'none'
        main.style.display = 'block'
    }
    else {
        document.getElementById('enterKeyHeader').innerHTML = 'Wrong Key!'
    }
}

function clickedYes(){
    document.getElementById('main-content').style.display = 'none'
    document.getElementById('answerYes').style.display = 'block'
}

function clickedNO(times){
    const noButton = document.getElementById('noButton')
    if (times == 1){
        document.getElementById('headerText').innerHTML = 'again? do you like me?'
        noButton.setAttribute('onclick', 'clickedNO(2)')
    }
    else if (times == 2){
        document.getElementById('headerText').innerHTML = 'just click yes >:)'
        noButton.setAttribute('onclick', 'clickedNO(3)')
    }
    else if (times == 3){
        document.getElementById('headerText').innerHTML = 'why D:'
        noButton.setAttribute('onclick', 'clickedNO(4)')
    }
    else if (times == 4){
        document.getElementById('headerText').innerHTML = ' answer again? >:('
        noButton.setAttribute('onclick', 'clickedNO(5)')
    }
    else if (times == 5){
        document.getElementById('headerText').innerHTML = 'fine! just answer no'
        noButton.setAttribute('onclick', 'clickedNO(6)')
    }
    else if (times == 6){
        document.getElementById('headerText').innerHTML = 'err.. I guess you have to click yes :)'
        noButton.style.display = 'flex'
        noButton.setAttribute('onclick', 'clickedNO(7)')
    }
    else if (times == 7){
        document.getElementById('headerText').innerHTML = 'what now >:3'
        noButton.style.display = 'none'
        noButton.setAttribute('onclick', 'clickedNO(8)')
    }


}