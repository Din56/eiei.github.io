console.log("Hey! What do you think you are doing");
console.log("Dont try something crazy here >:)");
console.log("And close this thing");

var StatCard = {
    StatCard1 : 0,
    StatCard2 : 0,
    StatCard3 : 0,
    StatCard4 : 0,
    StatCard5 : 0,
    StatCard6 : 0,
    StatCard7 : 0,
    StatCard8 : 0,
    StatCard9 : 0,
    StatCardZ : 0,
    StatCardA : 0,
}

var TotalCard = {
    Total : 0
}

function Random(StatCard, TotalCard, CoolDown){
    
    document.getElementById("RandomButton").addEventListener("click", function() {
        var button = this;
        button.style.display = "none"
        setTimeout(function() {
            button.style.display = "flex";
        }, CoolDown);
    })

    TotalCard.Total = TotalCard.Total + 1
    document.getElementById('TotalCard').innerHTML = '> You have random for ' +  TotalCard.Total  + ' times <'


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
        CardZ : document.getElementById("CardZ"),
        CardA : document.getElementById("CardA"),
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
        RarelyZ : document.getElementById("RarelyZ"),
        RarelyA : document.getElementById("RarelyA"),
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
    Card.CardZ.style.display = 'none'
    Rarely.RarelyZ.style.display = 'none'
    Card.CardA.style.display = 'none'
    Rarely.RarelyA.style.display = 'none'

    Card.SecretCard.style.display = 'none'
    Rarely.SecretRarely.style.display = 'none'

    RandomVaule = Math.floor(Math.random() * 1001) // * 10 is 0 to 9 / * 11 is 0 to 10
    RandomVauleForZ = Math.floor(Math.random() * 10000001)
    RandomVauleForA = Math.floor(Math.random() * 3201)
    
    if (RandomVauleForZ == 46169){
        StatCard.StatCardZ = StatCard.StatCardZ + 1
        document.getElementById('ShowCardZ').innerHTML = 'Card Z [ 1 in 10,000,000 ]'
        document.getElementById('StatCardZ').innerHTML = 'x ' + StatCard.StatCardZ
        Card.CardZ.style.display = 'flex'
        Rarely.RarelyZ.style.display = 'flex'
    }
    else if (RandomVauleForA == 32){
        StatCard.StatCardA = StatCard.StatCardA + 1
        document.getElementById('ShowCardA').innerHTML = 'Card A [ 1 in 3,200 ]'
        document.getElementById('StatCardA').innerHTML = 'x ' + StatCard.StatCardA
        Card.CardA.style.display = 'flex'
        Rarely.RarelyA.style.display = 'flex'
    }
    else if (RandomVaule <= 500){
        StatCard.StatCard1 = StatCard.StatCard1 + 1
        document.getElementById('ShowCard1').innerHTML = 'Card 1 [ 1 in 2 ]'
        document.getElementById('StatCard1').innerHTML = 'x ' + StatCard.StatCard1
        Card.Card1.style.display = 'flex'
        Rarely.Rarely1.style.display = 'flex'
    }
    else if (RandomVaule <= 750){
        StatCard.StatCard2 = StatCard.StatCard2 + 1
        document.getElementById('ShowCard2').innerHTML = 'Card 2 [ 1 in 4 ]'
        document.getElementById('StatCard2').innerHTML = 'x ' + StatCard.StatCard2
        Card.Card2.style.display = 'flex'
        Rarely.Rarely2.style.display = 'flex'
    }
    else if (RandomVaule <= 900){
        StatCard.StatCard3 = StatCard.StatCard3 + 1
        document.getElementById('ShowCard3').innerHTML = 'Card 3 [ 1 in 6.6 ]'
        document.getElementById('StatCard3').innerHTML = 'x ' + StatCard.StatCard3
        Card.Card3.style.display = 'flex'
        Rarely.Rarely3.style.display = 'flex'
    }
    else if (RandomVaule <= 960){
        StatCard.StatCard4 = StatCard.StatCard4 + 1
        document.getElementById('ShowCard4').innerHTML = 'Card 4 [ 1 in 16.6 ]'
        document.getElementById('StatCard4').innerHTML = 'x ' + StatCard.StatCard4
        Card.Card4.style.display = 'flex'
        Rarely.Rarely4.style.display = 'flex'
    }
    else if (RandomVaule <= 980){
        StatCard.StatCard5 = StatCard.StatCard5 + 1
        document.getElementById('ShowCard5').innerHTML = 'Card 5 [ 1 in 50 ]'
        document.getElementById('StatCard5').innerHTML = 'x ' + StatCard.StatCard5
        Card.Card5.style.display = 'flex'
        Rarely.Rarely5.style.display = 'flex'
    }
    else if (RandomVaule <= 990){
        StatCard.StatCard6 = StatCard.StatCard6 + 1
        document.getElementById('ShowCard6').innerHTML = 'Card 6 [ 1 in 100 ]'
        document.getElementById('StatCard6').innerHTML = 'x ' + StatCard.StatCard6
        Card.Card6.style.display = 'flex'
        Rarely.Rarely6.style.display = 'flex'
    }
    else if (RandomVaule <= 995){
        StatCard.StatCard7 = StatCard.StatCard7 + 1
        document.getElementById('ShowCard7').innerHTML = 'Card 7 [ 1 in 200 ]'
        document.getElementById('StatCard7').innerHTML = 'x ' + StatCard.StatCard7
        Card.Card7.style.display = 'flex'
        Rarely.Rarely7.style.display = 'flex'
    }
    else if (RandomVaule <= 999){
        StatCard.StatCard8 = StatCard.StatCard8 + 1
        document.getElementById('ShowCard8').innerHTML = 'Card 8 [ 1 in 250 ]'
        document.getElementById('StatCard8').innerHTML = 'x ' + StatCard.StatCard8
        Card.Card8.style.display = 'flex'
        Rarely.Rarely8.style.display = 'flex'
    }
    else if (RandomVaule <= 1000){
        StatCard.StatCard9 = StatCard.StatCard9 + 1
        document.getElementById('ShowCard9').innerHTML = 'Card 9 [ 1 in 1000 ]'
        document.getElementById('StatCard9').innerHTML = 'x ' + StatCard.StatCard9
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
        CardZ : document.getElementById("CardZ"),
        CardA : document.getElementById("CardA"),
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
        RarelyZ : document.getElementById("RarelyZ"),
        RarelyA : document.getElementById("RarelyA"),
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
    Card.CardZ.style.display = 'none'
    Rarely.RarelyZ.style.display = 'none'
    Card.CardA.style.display = 'none'
    Rarely.RarelyA.style.display = 'none'

    Card.SecretCard.style.display = 'flex'
    Rarely.SecretRarely.style.display = 'flex'

    document.getElementById('ShowCardSecret').innerHTML = ':)'
    document.getElementById('StatCardSecret').innerHTML = 'NICE'

}

function OpenInventory(){
    var MainPage = document.getElementById("MainPage")
    var InventoryPage = document.getElementById("InventoryPage")

    MainPage.style.display = 'none'
    InventoryPage.style.display = 'block'
}

function BackToMainPage(){
    var MainPage = document.getElementById("MainPage")
    var InventoryPage = document.getElementById("InventoryPage")

    MainPage.style.display = 'block'
    InventoryPage.style.display = 'none'
}
