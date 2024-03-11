console.log("Hey! What do you think you are doing");
console.log("Dont try something crazy here >:)");
console.log("And close this thing");

function Random(){
    document.getElementById("RandomButton").addEventListener("click", function() {
        var button = this;
        button.style.display = "none"
        setTimeout(function() {
            button.style.display = "flex";
        }, 2000); // 3000 milliseconds cooldown (adjust as needed)
    })

    var Card = {
        StarterCard : document.getElementById("StarterCard"),
        Card1 : document.getElementById("Card1"),
        Card2 : document.getElementById("Card2"),
        Card3 : document.getElementById("Card3"),
        Card4 : document.getElementById("Card4"),
        SecretCard : document.getElementById("SecretCard"),
    }
    
    var Rarely = { 
        StarterRarely : document.getElementById("StarterRarely"),
        Rarely1 : document.getElementById("Rarely1"),
        Rarely2 : document.getElementById("Rarely2"),
        Rarely3 : document.getElementById("Rarely3"),
        Rarely4 : document.getElementById("Rarely4"),
        SecretRarely : document.getElementById("SecretRarely"),
    }

    Card.StarterCard.style.display = 'none'
    Rarely.StarterRarely.style.display = 'none'
    Card.Card1.style.display = 'none'
    Rarely.Rarely1.style.display = 'none'
    Card.Card2.style.display = 'none'
    Rarely.Rarely2.style.display = 'none'
    Card.Card3.style.display = 'none'
    Rarely.Rarely3.style.display = 'none'
    Card.Card4.style.display = 'none'
    Rarely.Rarely4.style.display = 'none'

    Card.SecretCard.style.display = 'none'
    Rarely.SecretRarely.style.display = 'none'

    RandomVaule = Math.floor(Math.random() * 101) // * 10 is 0 to 9 / * 11 is 0 to 10

    if (RandomVaule <= 50){
        Card.Card1.style.display = 'flex'
        Rarely.Rarely1.style.display = 'flex'
    }
    else if (RandomVaule <= 75){
        Card.Card2.style.display = 'flex'
        Rarely.Rarely2.style.display = 'flex'
    }
    else if (RandomVaule <= 90){
        Card.Card3.style.display = 'flex'
        Rarely.Rarely3.style.display = 'flex'
    }
    else if (RandomVaule <= 100){
        Card.Card4.style.display = 'flex'
        Rarely.Rarely4.style.display = 'flex'
    }

}

function SummonSecret(){
    var Card = {
        StarterCard : document.getElementById("StarterCard"),
        Card1 : document.getElementById("Card1"),
        Card2 : document.getElementById("Card2"),
        Card3 : document.getElementById("Card3"),
        Card4 : document.getElementById("Card4"),
        SecretCard : document.getElementById("SecretCard"),
    }
    
    var Rarely = { 
        StarterRarely : document.getElementById("StarterRarely"),
        Rarely1 : document.getElementById("Rarely1"),
        Rarely2 : document.getElementById("Rarely2"),
        Rarely3 : document.getElementById("Rarely3"),
        Rarely4 : document.getElementById("Rarely4"),
        SecretRarely : document.getElementById("SecretRarely"),
    }

    Card.StarterCard.style.display = 'none'
    Rarely.StarterRarely.style.display = 'none'
    Card.Card1.style.display = 'none'
    Rarely.Rarely1.style.display = 'none'
    Card.Card2.style.display = 'none'
    Rarely.Rarely2.style.display = 'none'
    Card.Card3.style.display = 'none'
    Rarely.Rarely3.style.display = 'none'
    Card.Card4.style.display = 'none'
    Rarely.Rarely4.style.display = 'none'

    Card.SecretCard.style.display = 'flex'
    Rarely.SecretRarely.style.display = 'flex'

}