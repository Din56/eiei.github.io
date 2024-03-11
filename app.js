console.log("Hey! What do you think you are doing");
console.log("Dont try something crazy here >:)");
console.log("And close this thing");

function Random(){
    document.getElementById("RandomButton").addEventListener("click", function() {
        var button = this;
        button.style.display = "none"
        setTimeout(function() {
            button.style.display = "flex";
        }, 2000);
    })

    var Card = {
        StarterCard : document.getElementById("StarterCard"),
        Card1 : document.getElementById("Card1"),
        Card2 : document.getElementById("Card2"),
        Card3 : document.getElementById("Card3"),
        Card4 : document.getElementById("Card4"),
        Card5 : document.getElementById("Card5"),
        Card6 : document.getElementById("Card6"),
        Card7 : document.getElementById("Card7"),
        Card8 : document.getElementById("Card8"),
        Card9 : document.getElementById("Card9"),
        SecretCard : document.getElementById("SecretCard"),
    }
    
    var Rarely = { 
        StarterRarely : document.getElementById("StarterRarely"),
        Rarely1 : document.getElementById("Rarely1"),
        Rarely2 : document.getElementById("Rarely2"),
        Rarely3 : document.getElementById("Rarely3"),
        Rarely4 : document.getElementById("Rarely4"),
        Rarely5 : document.getElementById("Rarely5"),
        Rarely6 : document.getElementById("Rarely6"),
        Rarely7 : document.getElementById("Rarely7"),
        Rarely8 : document.getElementById("Rarely8"),
        Rarely9 : document.getElementById("Rarely9"),
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
    Card.Card5.style.display = 'none'
    Rarely.Rarely5.style.display = 'none'
    Card.Card6.style.display = 'none'
    Rarely.Rarely6.style.display = 'none'
    Card.Card7.style.display = 'none'
    Rarely.Rarely7.style.display = 'none'
    Card.Card8.style.display = 'none'
    Rarely.Rarely8.style.display = 'none'
    Card.Card9.style.display = 'none'
    Rarely.Rarely9.style.display = 'none'

    Card.SecretCard.style.display = 'none'
    Rarely.SecretRarely.style.display = 'none'

    RandomVaule = Math.floor(Math.random() * 1001) // * 10 is 0 to 9 / * 11 is 0 to 10

    if (RandomVaule <= 500){
        Card.Card1.style.display = 'flex'
        Rarely.Rarely1.style.display = 'flex'
    }
    else if (RandomVaule <= 750){
        Card.Card2.style.display = 'flex'
        Rarely.Rarely2.style.display = 'flex'
    }
    else if (RandomVaule <= 900){
        Card.Card3.style.display = 'flex'
        Rarely.Rarely3.style.display = 'flex'
    }
    else if (RandomVaule <= 960){
        Card.Card4.style.display = 'flex'
        Rarely.Rarely4.style.display = 'flex'
    }
    else if (RandomVaule <= 980){
        Card.Card5.style.display = 'flex'
        Rarely.Rarely5.style.display = 'flex'
    }
    else if (RandomVaule <= 990){
        Card.Card6.style.display = 'flex'
        Rarely.Rarely6.style.display = 'flex'
    }
    else if (RandomVaule <= 995){
        Card.Card7.style.display = 'flex'
        Rarely.Rarely7.style.display = 'flex'
    }
    else if (RandomVaule <= 999){
        Card.Card8.style.display = 'flex'
        Rarely.Rarely8.style.display = 'flex'
    }
    else if (RandomVaule <= 1000){
        Card.Card9.style.display = 'flex'
        Rarely.Rarely9.style.display = 'flex'
    }

}

function SummonSecret(){
    var Card = {
        StarterCard : document.getElementById("StarterCard"),
        Card1 : document.getElementById("Card1"),
        Card2 : document.getElementById("Card2"),
        Card3 : document.getElementById("Card3"),
        Card4 : document.getElementById("Card4"),
        Card5 : document.getElementById("Card5"),
        Card6 : document.getElementById("Card6"),
        Card7 : document.getElementById("Card7"),
        Card8 : document.getElementById("Card8"),
        Card9 : document.getElementById("Card9"),
        SecretCard : document.getElementById("SecretCard"),
    }
    
    var Rarely = { 
        StarterRarely : document.getElementById("StarterRarely"),
        Rarely1 : document.getElementById("Rarely1"),
        Rarely2 : document.getElementById("Rarely2"),
        Rarely3 : document.getElementById("Rarely3"),
        Rarely4 : document.getElementById("Rarely4"),
        Rarely5 : document.getElementById("Rarely5"),
        Rarely6 : document.getElementById("Rarely6"),
        Rarely7 : document.getElementById("Rarely7"),
        Rarely8 : document.getElementById("Rarely8"),
        Rarely9 : document.getElementById("Rarely9"),
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
    Card.Card5.style.display = 'none'
    Rarely.Rarely5.style.display = 'none'
    Card.Card6.style.display = 'none'
    Rarely.Rarely6.style.display = 'none'
    Card.Card7.style.display = 'none'
    Rarely.Rarely7.style.display = 'none'
    Card.Card8.style.display = 'none'
    Rarely.Rarely8.style.display = 'none'
    Card.Card9.style.display = 'none'
    Rarely.Rarely9.style.display = 'none'

    Card.SecretCard.style.display = 'none'
    Rarely.SecretRarely.style.display = 'none'

}
