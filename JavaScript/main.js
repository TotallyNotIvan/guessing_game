// let red = "#a91818";
function deal(){
    document.getElementById('handone2').innerHTML = "";
    document.getElementById('handone3').innerHTML = "";
    document.getElementById('handone4').innerHTML = "";
    document.getElementById('handone5').innerHTML = "";
    document.getElementById('handone6').innerHTML = "";
    document.getElementById('dealer2').innerHTML = "";
    document.getElementById('dealer3').innerHTML = "";
    document.getElementById('dealer4').innerHTML = "";
    document.getElementById('dealer5').innerHTML = "";
    document.getElementById('dealer6').innerHTML = "";
    document.getElementById('dealersuit2').src = "SVGs/question.svg";
    document.getElementById('dealersuit3').src = "SVGs/question.svg";
    document.getElementById('dealersuit4').src = "SVGs/question.svg";
    document.getElementById('dealersuit5').src = "SVGs/question.svg";
    document.getElementById('dealersuit6').src = "SVGs/question.svg";
    document.getElementById('handonesuit2').src = "SVGs/question.svg";
    document.getElementById('handonesuit3').src = "SVGs/question.svg";
    document.getElementById('handonesuit4').src = "SVGs/question.svg";
    document.getElementById('handonesuit5').src = "SVGs/question.svg";
    document.getElementById('handonesuit6').src = "SVGs/question.svg";
    if (cash-bet>=0){
    // aceReplay=0;
    playerAce=0;
    dealerAce=0;
    cash=cash-bet;
    document.getElementById('cash').innerHTML = cash; 
    dealerValue=0;
    handoneValue=0;
    n=0;
    m=0;
    document.getElementById('wl').innerHTML = "";
    var dealer = Math.floor((Math.random()*13)+2)
    if (dealer ==14) {
        dealer = "A";
        dealerValue = dealerValue+11;
        dealerAce++
    }else if (dealer==13){
        dealer = "K";
        dealerValue = dealerValue+10;
    }else if (dealer==12){
        dealer = "J";
        dealerValue = dealerValue+10;
    }else if (dealer==11){
        dealer = "Q";
        dealerValue = dealerValue+10;
    }
    else{
        dealerValue = dealerValue+dealer;
    }
    document.getElementById('dealer').innerHTML = dealer;
    document.getElementById('dealerValue').innerHTML = dealerValue;

    var handone = Math.floor((Math.random()*13)+2)
    if (handone==14) {
        handone= "A";
        handoneValue = handoneValue+11;
        playerAce++;
    }else if (handone==13){
        handone= "K";
        handoneValue = handoneValue+10;
    }else if (handone==12){
        handone= "J";
        handoneValue = handoneValue+10;
    }else if (handone==11){
        handone= "Q";
        handoneValue = handoneValue+10;
    }
    else{
        handoneValue = handoneValue+handone;
    }
    document.getElementById('handone').innerHTML = handone;
    document.getElementById('handoneValue').innerHTML = handoneValue;

    let handonesuit = Math.floor((Math.random()*4))
    if (handonesuit==1) {
        handonesuit= "SVGs/heart.svg";
        // dealerColor=red
    }else if (handonesuit==2){
        handonesuit= "SVGs/spades.svg";
        // dealerColor=black
    }else if (handonesuit==3){
        handonesuit= "SVGs/diamonds.svg";
        // dealerColor=red
    }else if (handonesuit==0){
        handonesuit= "SVGs/clubs.svg";
        // handoneColor=black
    }
    document.getElementById('handonesuit').src = handonesuit;
    // document.getElementById('handoneColor').innerHTML = handoneColor;

    let dealersuit = Math.floor((Math.random()*4))
    if (dealersuit==1) {
        dealersuit= "SVGs/heart.svg";
        // dealerColor=red
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==2){
        dealersuit= "SVGs/spades.svg";
        // dealerColor=black
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==3){
        dealersuit= "SVGs/diamonds.svg";
        // dealerColor=red
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==0){
        dealersuit= "SVGs/clubs.svg";
        // dealerColor=black
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }
    document.getElementById('dealersuit').src = dealersuit;

    
    // document.getElementById('dealerColor').innerHTML = dealerColor;

    // if (dealerColor==black){
    //     document.getElementById('dealerColor').innerHTML = dealerColor;
    // }else{
    //     document.getElementById('dealerColor').innerHTML = dealerColor;
    // }

    // if (dealerColor==black){
    //     document.getElementById('dealerColor').innerHTML = "#000000";
    // }else{
    //     document.getElementById('dealerColor').innerHTML = "#a91818";
    // }

    // let handonesuit4 = Math.floor((Math.random()*4))
    // if (handonesuit4==1) {
    //     handonesuit4= "SVGs/heart.svg";
    //     // dealerColor=red
    // }else if (handonesuit4==2){
    //     handonesuit4= "SVGs/spades.svg";
    //     // dealerColor=black
    // }else if (handonesuit4==3){
    //     handonesuit4= "SVGs/diamonds.svg";
    //     // dealerColor=red
    // }else if (handonesuit4==0){
    //     handonesuit4= "SVGs/clubs.svg";
    //     // handoneColor=black
    // }
    // document.getElementById('handonesuit4').src = handonesuit4;

    // let handonesuit5 = Math.floor((Math.random()*4))
    // if (handonesuit5==1) {
    //     handonesuit5= "SVGs/heart.svg";
    //     // dealerColor=red
    // }else if (handonesuit5==2){
    //     handonesuit5= "SVGs/spades.svg";
    //     // dealerColor=black
    // }else if (handonesuit5==3){
    //     handonesuit5= "SVGs/diamonds.svg";
    //     // dealerColor=red
    // }else if (handonesuit5==0){
    //     handonesuit5= "SVGs/clubs.svg";
    //     // handoneColor=black
    // }
    // document.getElementById('handonesuit5').src = handonesuit5 
    // }else if(cash==0){
    //     poor();
    // }
    }else{
        bet=cash;
        document.getElementById('bet').innerHTML = bet; 
    }
    // if(cash==0){
    //     poor()
    // }
}
// function poor(){
//     if (confirm('you ran out of money, would you like to barrow $1000 from my uncle?')) {
//         cash=$1000
//       } else {
        
//       }
// }
function betUp(){
    if (cash>bet){
        bet=bet+50
    }
    document.getElementById('bet').innerHTML = bet;
}
function betDown(){
    if (bet>=50){
        bet=bet-50
    }
    document.getElementById('bet').innerHTML = bet;
}

function hit(){
    n++;
    if (n==1){
        let handonesuit2 = Math.floor((Math.random()*4))
        if (handonesuit2==1) {
            handonesuit2= "SVGs/heart.svg";
            // dealerColor=red
        }else if (handonesuit2==2){
            handonesuit2= "SVGs/spades.svg";
            // dealerColor=black
        }else if (handonesuit2==3){
            handonesuit2= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (handonesuit2==0){
            handonesuit2= "SVGs/clubs.svg";
            // handoneColor=black
        }
        document.getElementById('handonesuit2').src = handonesuit2;


        var handone2 = Math.floor((Math.random()*13)+2)
        if (handone2==14) {
            handone2= "A";
            playerAce++;
            handoneValue = handoneValue+11;
        }else if (handone2==13){
            handone2= "K";
            handoneValue = handoneValue+10;
        }else if (handone2==12){
            handone2= "J";
            handoneValue = handoneValue+10;
        }else if (handone2==11){
            handone2= "Q";
            handoneValue = handoneValue+10;
        }//Here was the 11 bug.
        else{
            handoneValue = handoneValue+handone2;
        }
        document.getElementById('handone2').innerHTML = handone2;
        document.getElementById('handoneValue').innerHTML = handoneValue;
        blackjackpos=1
    }else if (n==2){
        let handonesuit3 = Math.floor((Math.random()*4))
        if (handonesuit3==1) {
            handonesuit3= "SVGs/heart.svg";
            // dealerColor=red
        }else if (handonesuit3==2){
            handonesuit3= "SVGs/spades.svg";
            // dealerColor=black
        }else if (handonesuit3==3){
            handonesuit3= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (handonesuit3==0){
            handonesuit3= "SVGs/clubs.svg";
            // handoneColor=black
        }
        document.getElementById('handonesuit3').src = handonesuit3;

        var handone3 = Math.floor((Math.random()*13)+2)
        if (handone3==14) {
            handone3= "A";
            playerAce++;
            handoneValue = handoneValue+11;
        }else if (handone3==13){
            handone3= "K";
            handoneValue = handoneValue+10;
        }else if (handone3==12){
            handone3= "J";
            handoneValue = handoneValue+10;
        }else if (handone==11){
            handone3= "Q";
            handoneValue = handoneValue+10;
        }
        else{
            handoneValue = handoneValue+handone3;
        }
        document.getElementById('handone3').innerHTML = handone3;
        document.getElementById('handoneValue').innerHTML = handoneValue;
        blackjackpos=0
    }
    else if (n==3){
        let handonesuit4 = Math.floor((Math.random()*4))
        if (handonesuit4==1) {
            handonesuit4= "SVGs/heart.svg";
            // dealerColor=red
        }else if (handonesuit4==2){
            handonesuit4= "SVGs/spades.svg";
            // dealerColor=black
        }else if (handonesuit4==3){
            handonesuit4= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (handonesuit4==0){
            handonesuit4= "SVGs/clubs.svg";
            // handoneColor=black
        }
        document.getElementById('handonesuit4').src = handonesuit4;

        var handone4 = Math.floor((Math.random()*13)+2)
        if (handone4==14) {
            handone4= "A";
            playerAce++;
            handoneValue = handoneValue+11;
        }else if (handone4==13){
            handone4= "K";
            handoneValue = handoneValue+10;
        }else if (handone4==12){
            handone4= "J";
            handoneValue = handoneValue+10;
        }else if (handone==11){
            handone4= "Q";
            handoneValue = handoneValue+10;
        }
        else{
            handoneValue = handoneValue+handone4;
        }
        document.getElementById('handone4').innerHTML = handone4;
        document.getElementById('handoneValue').innerHTML = handoneValue;
    }
    else if (n==4){
        let handonesuit5 = Math.floor((Math.random()*4))
        if (handonesuit5==1) {
            handonesuit5= "SVGs/heart.svg";
            // dealerColor=red
        }else if (handonesuit5==2){
            handonesuit5= "SVGs/spades.svg";
            // dealerColor=black
        }else if (handonesuit5==3){
            handonesuit5= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (handonesuit5==0){
            handonesuit5= "SVGs/clubs.svg";
            // handoneColor=black
        }
        document.getElementById('handonesuit5').src = handonesuit5;

        var handone5 = Math.floor((Math.random()*13)+2)
        if (handone5==14) {
            handone5= "A";
            playerAce++;
            handoneValue = handoneValue+11;
        }else if (handone5==13){
            handone5= "K";
            handoneValue = handoneValue+10;
        }else if (handone5==12){
            handone5= "J";
            handoneValue = handoneValue+10;
        }else if (handone==11){
            handone5= "Q";
            handoneValue = handoneValue+10;
        }
        else{
            handoneValue = handoneValue+handone5;
        }
        document.getElementById('handone5').innerHTML = handone5;
        document.getElementById('handoneValue').innerHTML = handoneValue;
    }
    else if (n==5){
        let handonesuit6 = Math.floor((Math.random()*4))
        if (handonesuit6==1) {
            handonesuit6= "SVGs/heart.svg";
            // dealerColor=red
        }else if (handonesuit6==2){
            handonesuit6= "SVGs/spades.svg";
            // dealerColor=black
        }else if (handonesuit6==3){
            handonesuit6= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (handonesuit6==0){
            handonesuit6= "SVGs/clubs.svg";
            // handoneColor=black
        }
        document.getElementById('handonesuit6').src = handonesuit6;

        var handone6 = Math.floor((Math.random()*13)+2)
        if (handone6==14) {
            handone6= "A";
            playerAce++;
            handoneValue = handoneValue+11;
        }else if (handone6==13){
            handone6= "K";
            handoneValue = handoneValue+10;
        }else if (handone6==12){
            handone6= "J";
            handoneValue = handoneValue+10;
        }else if (handone==11){
            handone6= "Q";
            handoneValue = handoneValue+10;
        }
        else{
            handoneValue = handoneValue+handone6;
        }
        document.getElementById('handone6').innerHTML = handone6;
        document.getElementById('handoneValue').innerHTML = handoneValue;
    }
    if (handoneValue==21){
        win();
    }else if(handoneValue>=21 && playerAce==0){
        win()
    }else if(handoneValue>21 && playerAce>0){
        handoneValue=handoneValue-10;
        document.getElementById('handoneValue').innerHTML = handoneValue;
        if (handoneValue==21){
            win();
        }
        playerAce--;
    }
}
function win(){
    if(n<50){
        if(handoneValue > 21){
            // var wl="Bust";
            n=100;
        }else if (handoneValue == 21 && blackjackpos==1){
            // var wl="Blackjack";
            cash=cash+2.5*bet
            n=100;
        }else if(dealerValue<17){
            dealer()
        }else if(dealerValue>21){
            // var wl="Dealer Bust";
            cash=cash+2*bet
            n=100;
        }else if(dealerValue==handoneValue){
            // var wl="Win";
            cash=cash+bet
            n=100;
        }else if(dealerValue<handoneValue){
            // var wl="Win";
            cash=cash+2*bet
            n=100;
        }else{
            // var wl="Lost";
            n=100;
        }
    }
        if(handoneValue > 21){
            var wl="Bust";
        }else if (handoneValue == 21 && blackjackpos==1){
            var wl="Blackjack";
        }else if(dealerValue>21){
            var wl="Dealer Bust";
        }else if(dealerValue==handoneValue){
            var wl="Win";
        }else if(dealerValue<handoneValue){
            var wl="Win";
        }else{
            var wl="Lost";
        }

    // wlReinforce()
    document.getElementById('wl').innerHTML = wl;
    document.getElementById('cash').innerHTML = cash;
}
// function wlReinforce(){
//     if(handoneValue > 21){
//         var wl="Bust";
//     }else if (handoneValue == 21 && blackjackpos==1){
//         var wl="Blackjack";
//     }else if(dealerValue>21){
//         var wl="Dealer Bust";
//     }else if(dealerValue==handoneValue){
//         var wl="Win";
//     }else if(dealerValue<handoneValue){
//         var wl="Win";
//     }else{
//         var wl="Lost";
//     }
// }
function dealer(){
    if(dealerValue<17){
        dealhit();
        dealer()
    }
    else{
        win();
    }
}

function dealhit(){
    m++;
    if (m==1){
        let dealersuit2 = Math.floor((Math.random()*4))
        if (dealersuit2==1) {
            dealersuit2= "SVGs/heart.svg";
            // dealerColor=red
        }else if (dealersuit2==2){
            dealersuit2= "SVGs/spades.svg";
            // dealerColor=black
        }else if (dealersuit2==3){
            dealersuit2= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (dealersuit2==0){
            dealersuit2= "SVGs/clubs.svg";
            // dealerColor=black
        }
        document.getElementById('dealersuit2').src = dealersuit2;


        var dealer2 = Math.floor((Math.random()*13)+2)
        if (dealer2==14) {
            dealer2= "A";
            dealerAce++;
            dealerValue = dealerValue+11;
        }else if (dealer2==13){
            dealer2= "K";
            dealerValue = dealerValue+10;
        }else if (dealer2==12){
            dealer2= "J";
            dealerValue = dealerValue+10;
        }else if (dealer==11){
            dealer2= "Q";
            dealerValue = dealerValue+10;
        }
        else{
            dealerValue = dealerValue+dealer2;
        }
        document.getElementById('dealer2').innerHTML = dealer2;
        document.getElementById('dealerValue').innerHTML = dealerValue;
        blackjackpos=1
    }else if (m==2){
        let dealersuit3 = Math.floor((Math.random()*4))
        if (dealersuit3==1) {
            dealersuit3= "SVGs/heart.svg";
            // dealerColor=red
        }else if (dealersuit3==2){
            dealersuit3= "SVGs/spades.svg";
            // dealerColor=black
        }else if (dealersuit3==3){
            dealersuit3= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (dealersuit3==0){
            dealersuit3= "SVGs/clubs.svg";
            // dealerColor=black
        }
        document.getElementById('dealersuit3').src = dealersuit3;

        var dealer3 = Math.floor((Math.random()*13)+2)
        if (dealer3==14) {
            dealer3= "A";
            dealerAce++;
            dealerValue = dealerValue+11;
        }else if (dealer3==13){
            dealer3= "K";
            dealerValue = dealerValue+10;
        }else if (dealer3==12){
            dealer3= "J";
            dealerValue = dealerValue+10;
        }else if (dealer==11){
            dealer3= "Q";
            dealerValue = dealerValue+10;
        }
        else{
            dealerValue = dealerValue+dealer3;
        }
        document.getElementById('dealer3').innerHTML = dealer3;
        document.getElementById('dealerValue').innerHTML = dealerValue;
        blackjackpos=0
    }
    else if (m==3){
        let dealersuit4 = Math.floor((Math.random()*4))
        if (dealersuit4==1) {
            dealersuit4= "SVGs/heart.svg";
            // dealerColor=red
        }else if (dealersuit4==2){
            dealersuit4= "SVGs/spades.svg";
            // dealerColor=black
        }else if (dealersuit4==3){
            dealersuit4= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (dealersuit4==0){
            dealersuit4= "SVGs/clubs.svg";
            // dealerColor=black
        }
        document.getElementById('dealersuit4').src = dealersuit4;

        var dealer4 = Math.floor((Math.random()*13)+2)
        if (dealer4==14) {
            dealer4= "A";
            dealerAce++;
            dealerValue = dealerValue+11;
        }else if (dealer4==13){
            dealer4= "K";
            dealerValue = dealerValue+10;
        }else if (dealer4==12){
            dealer4= "J";
            dealerValue = dealerValue+10;
        }else if (dealer==11){
            dealer4= "Q";
            dealerValue = dealerValue+10;
        }
        else{
            dealerValue = dealerValue+dealer4;
        }
        document.getElementById('dealer4').innerHTML = dealer4;
        document.getElementById('dealerValue').innerHTML = dealerValue;
    }
    else if (m==4){
        let dealersuit5 = Math.floor((Math.random()*4))
        if (dealersuit5==1) {
            dealersuit5= "SVGs/heart.svg";
            // dealerColor=red
        }else if (dealersuit5==2){
            dealersuit5= "SVGs/spades.svg";
            // dealerColor=black
        }else if (dealersuit5==3){
            dealersuit5= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (dealersuit5==0){
            dealersuit5= "SVGs/clubs.svg";
            // dealerColor=black
        }
        document.getElementById('dealersuit5').src = dealersuit5;

        var dealer5 = Math.floor((Math.random()*13)+2)
        if (dealer5==14) {
            dealer5= "A";
            dealerAce++;
            dealerValue = dealerValue+11;
        }else if (dealer5==13){
            dealer5= "K";
            dealerValue = dealerValue+10;
        }else if (dealer5==12){
            dealer5= "J";
            dealerValue = dealerValue+10;
        }else if (dealer==11){
            dealer5= "Q";
            dealerValue = dealerValue+10;
        }
        else{
            dealerValue = dealerValue+dealer5;
        }
        document.getElementById('dealer5').innerHTML = dealer5;
        document.getElementById('dealerValue').innerHTML = dealerValue;
    }
    else if (m==5){
        let dealersuit6 = Math.floor((Math.random()*4))
        if (dealersuit6==1) {
            dealersuit6= "SVGs/heart.svg";
            // dealerColor=red
        }else if (dealersuit6==2){
            dealersuit6= "SVGs/spades.svg";
            // dealerColor=black
        }else if (dealersuit6==3){
            dealersuit6= "SVGs/diamonds.svg";
            // dealerColor=red
        }else if (dealersuit6==0){
            dealersuit6= "SVGs/clubs.svg";
            // dealerColor=black
        }
        document.getElementById('dealersuit6').src = dealersuit6;

        var dealer6 = Math.floor((Math.random()*13)+2)
        if (dealer6==14) {
            dealer6= "A";
            dealerAce++;
            dealerValue = dealerValue+11;
        }else if (dealer6==13){
            dealer6= "K";
            dealerValue = dealerValue+10;
        }else if (dealer6==12){
            dealer6= "J";
            dealerValue = dealerValue+10;
        }else if (dealer==11){
            dealer6= "Q";
            dealerValue = dealerValue+10;
        }
        else{
            dealerValue = dealerValue+dealer6;
        }
        document.getElementById('dealer6').innerHTML = dealer6;
        document.getElementById('dealerValue').innerHTML = dealerValue;
    }
    if (dealerValue>=21 && dealerAce==0){
        win();
    }else if(dealerValue>21 && dealerAce>0){
        dealerValue=dealerValue-10;
        document.getElementById('dealerValue').innerHTML = dealerValue;
        dealerAce--;
    }
}
function navToggle() { // creates a new function named navToggle
    var x = document.getElementById("main-nav"); // creates a variable set to #main-nav
      if (x.className === "topnav") { // if #main-nav has a class of .topnav,
      x.className += " responsive";   // then add a new class
    } else {                          // if it doesn't,
      x.className = "topnav";         // set class to .topnav
    } //closes if-else
} //closes function
// function win(){
//     if(n<50){
//         if(handoneValue > 21){
//             var wl="Bust";
//         }else if (handoneValue == 21){
//             if(blackjackpos==1){
//                 var wl="blackjack";
//                 cash=cash+2.5*bet
//             }
//             else{
//                 var wl="Win";
//                 cash=cash+2*bet
//             }
//             // cash=cash+2.5*bet
//         }
//         else{
//         dealer()
//             if (dealerValue>21){
//                 if(dealerAce==0){
//                 var wl="Dealer Bust";
//                 cash=cash+bet
//                 }
//                 else{
//                     dealerValue=dealerValue-10;
//                     dealerAce=dealerAce-1;
//                     document.getElementById('dealerValue').innerHTML = dealerValue;
//                     // dealer()
//                 }
//             }
//             else{
//                 if (dealerValue > handoneValue){
//                     var wl="Loss";
//                 }else if (dealerValue == handoneValue){
//                     var wl="Push";
//                     cash=cash+bet
//                 }else {
//                     var wl="Win";
//                     cash=cash+2*bet
//                 }
//             }   
//         }
//     }else{
//         if(handoneValue > 21){
//             var wl="Bust";
//         }else if (handoneValue == 21){
//             if(blackjackpos==1){
//                 var wl="blackjack";  
//             }
//             else{
//                 var wl="Win";
//             }
//         }
//         else{
//         dealer()
//             if (dealerValue>21){
//                 var wl="Dealer Bust";
//             }
//             else{
//                 if (dealerValue > handoneValue){
//                     var wl="Loss";
//                 }else if (dealerValue == handoneValue){
//                     var wl="Push";
                    
//                 }else {
//                     var wl="Win";
                    
//                 }
//             }   
//         }
//     }
//     document.getElementById('wl').innerHTML = wl;
//     document.getElementById('cash').innerHTML = cash; 
//     n=100;
// }
// function dealer(){
//     if(dealerValue <= 17 && aceReplay==0){
//         let dealersuit2 = Math.floor((Math.random()*4))
//         if (dealersuit2==1) {
//             dealersuit2= "SVGs/heart.svg";
//             // dealerColor=red
//         }else if (dealersuit2==2){
//             dealersuit2= "SVGs/spades.svg";
//             // dealerColor=black
//         }else if (dealersuit2==3){
//             dealersuit2= "SVGs/diamonds.svg";
//             // dealerColor=red
//         }else if (dealersuit2==0){
//             dealersuit2= "SVGs/clubs.svg";
//             // dealerColor=black
//         }
//         document.getElementById('dealersuit2').src = dealersuit2;


//         var dealer2 = Math.floor((Math.random()*13)+2)
//         if (dealer2==14) {
//             dealer2= "A";
//             dealerValue = dealerValue+11;
//             dealerAce++
//         }else if (dealer2==13){
//             dealer2= "K";
//             dealerValue = dealerValue+10;
//         }else if (dealer2==12){
//             dealer2= "J";
//             dealerValue = dealerValue+10;
//         }else if (dealer==11){
//             dealer2= "Q";
//             dealerValue = dealerValue+10;
//         }
//         else{
//             dealerValue = dealerValue+dealer2;
//         }
//         document.getElementById('dealer2').innerHTML = dealer2;
//         document.getElementById('dealerValue').innerHTML = dealerValue;
//         aceReplay++
//     if (dealerValue<=17 && aceReplay==1){
//         let dealersuit3 = Math.floor((Math.random()*4))
//         if (dealersuit3==1) {
//             dealersuit3= "SVGs/heart.svg";
//             // dealerColor=red
//         }else if (dealersuit3==2){
//             dealersuit3= "SVGs/spades.svg";
//             // dealerColor=black
//         }else if (dealersuit3==3){
//             dealersuit3= "SVGs/diamonds.svg";
//             // dealerColor=red
//         }else if (dealersuit3==0){
//             dealersuit3= "SVGs/clubs.svg";
//             // dealerColor=black
//         }
//         document.getElementById('dealersuit3').src = dealersuit3;

//         var dealer3 = Math.floor((Math.random()*13)+2)
//         if (dealer3==14) {
//             dealer3= "A";
//             dealerAce++
//             dealerValue = dealerValue+11;
//         }else if (dealer3==13){
//             dealer3= "K";
//             dealerValue = dealerValue+10;
//         }else if (dealer3==12){
//             dealer3= "J";
//             dealerValue = dealerValue+10;
//         }else if (dealer==11){
//             dealer3= "Q";
//             dealerValue = dealerValue+10;
//         }
//         else{
//             dealerValue = dealerValue+dealer3;
//         }
//         document.getElementById('dealer3').innerHTML = dealer3;
//         document.getElementById('dealerValue').innerHTML = dealerValue;
//         aceReplay++
//             if (dealerValue<=17){
//             let dealersuit4 = Math.floor((Math.random()*4))
//             if (dealersuit4==1) {
//                 dealersuit4= "SVGs/heart.svg";
//                 // dealerColor=red
//             }else if (dealersuit4==2){
//                 dealersuit4= "SVGs/spades.svg";
//                 // dealerColor=black
//             }else if (dealersuit4==3){
//                 dealersuit4= "SVGs/diamonds.svg";
//                 // dealerColor=red
//             }else if (dealersuit4==0){
//                 dealersuit4= "SVGs/clubs.svg";
//                 // dealerColor=black
//             }
//             document.getElementById('dealersuit4').src = dealersuit4;

//             var dealer4 = Math.floor((Math.random()*13)+2)
//             if (dealer4==14) {
//                 dealer4= "A";
//                 dealerAce++
//                 dealerValue = dealerValue+11;
//             }else if (dealer4==13){
//                 dealer4= "K";
//                 dealerValue = dealerValue+10;
//             }else if (dealer4==12){
//                 dealer4= "J";
//                 dealerValue = dealerValue+10;
//             }else if (dealer==11){
//                 dealer4= "Q";
//                 dealerValue = dealerValue+10;
//             }
//             else{
//                 dealerValue = dealerValue+dealer4;
//             }
//             document.getElementById('dealer4').innerHTML = dealer4;
//             document.getElementById('dealerValue').innerHTML = dealerValue;
//             aceReplay++
//                 if (dealerValue<=17){
//                     let dealersuit5 = Math.floor((Math.random()*4))
//                     if (dealersuit5==1) {
//                         dealersuit5= "SVGs/heart.svg";
//                         // dealerColor=red
//                     }else if (dealersuit5==2){
//                         dealersuit5= "SVGs/spades.svg";
//                         // dealerColor=black
//                     }else if (dealersuit5==3){
//                         dealersuit5= "SVGs/diamonds.svg";
//                         // dealerColor=red
//                     }else if (dealersuit5==0){
//                         dealersuit5= "SVGs/clubs.svg";
//                         // dealerColor=black
//                     }
//                     document.getElementById('dealersuit5').src = dealersuit5;

//                     var dealer5 = Math.floor((Math.random()*13)+2)
//                     if (dealer5==14) {
//                         dealer5= "A";
//                         dealerAce++
//                         dealerValue = dealerValue+11;
//                     }else if (dealer5==13){
//                         dealer5= "K";
//                         dealerValue = dealerValue+10;
//                     }else if (dealer5==12){
//                         dealer5= "J";
//                         dealerValue = dealerValue+10;
//                     }else if (dealer==11){
//                         dealer5= "Q";
//                         dealerValue = dealerValue+10;
//                     }
//                     else{
//                         dealerValue = dealerValue+dealer5;
//                     }
//                     document.getElementById('dealer5').innerHTML = dealer5;
//                     document.getElementById('dealerValue').innerHTML = dealerValue;
//                     aceReplay++
//                     if (dealerValue<=17){
//                         let dealersuit6 = Math.floor((Math.random()*4))
//                         if (dealersuit6==1) {
//                             dealersuit6= "SVGs/heart.svg";
//                             // dealerColor=red
//                         }else if (dealersuit6==2){
//                             dealersuit6= "SVGs/spades.svg";
//                             // dealerColor=black
//                         }else if (dealersuit6==3){
//                             dealersuit6= "SVGs/diamonds.svg";
//                             // dealerColor=red
//                         }else if (dealersuit6==0){
//                             dealersuit6= "SVGs/clubs.svg";
//                             // dealerColor=black
//                         }
//                         document.getElementById('dealersuit6').src = dealersuit6;
                
//                         var dealer6 = Math.floor((Math.random()*13)+2)
//                         if (dealer6==14) {
//                             dealer6= "A";
//                             dealerAce++
//                             dealerValue = dealerValue+11;
//                         }else if (dealer6==13){
//                             dealer6= "K";
//                             dealerValue = dealerValue+10;
//                         }else if (dealer6==12){
//                             dealer6= "J";
//                             dealerValue = dealerValue+10;
//                         }else if (dealer==11){
//                             dealer6= "Q";
//                             dealerValue = dealerValue+10;
//                         }
//                         else{
//                             dealerValue = dealerValue+dealer6;
//                         }
//                         document.getElementById('dealer6').innerHTML = dealer6;
//                         document.getElementById('dealerValue').innerHTML = dealerValue;
//                         aceReplay++
//                     }
//                 }
//             }
//         }
//     }
//         if (dealerValue<=17 && aceReplay==2){
//             let dealersuit4 = Math.floor((Math.random()*4))
//             if (dealersuit4==1) {
//                 dealersuit4= "SVGs/heart.svg";
//                 // dealerColor=red
//             }else if (dealersuit4==2){
//                 dealersuit4= "SVGs/spades.svg";
//                 // dealerColor=black
//             }else if (dealersuit4==3){
//                 dealersuit4= "SVGs/diamonds.svg";
//                 // dealerColor=red
//             }else if (dealersuit4==0){
//                 dealersuit4= "SVGs/clubs.svg";
//                 // dealerColor=black
//             }
//             document.getElementById('dealersuit4').src = dealersuit4;

//             var dealer4 = Math.floor((Math.random()*13)+2)
//             if (dealer4==14) {
//                 dealer4= "A";
//                 dealerAce++
//                 dealerValue = dealerValue+11;
//             }else if (dealer4==13){
//                 dealer4= "K";
//                 dealerValue = dealerValue+10;
//             }else if (dealer4==12){
//                 dealer4= "J";
//                 dealerValue = dealerValue+10;
//             }else if (dealer==11){
//                 dealer4= "Q";
//                 dealerValue = dealerValue+10;
//             }
//             else{
//                 dealerValue = dealerValue+dealer4;
//             }
//             document.getElementById('dealer4').innerHTML = dealer4;
//             document.getElementById('dealerValue').innerHTML = dealerValue;
//             aceReplay++
//                 if (dealerValue<=17){
//                     let dealersuit5 = Math.floor((Math.random()*4))
//                     if (dealersuit5==1) {
//                         dealersuit5= "SVGs/heart.svg";
//                         // dealerColor=red
//                     }else if (dealersuit5==2){
//                         dealersuit5= "SVGs/spades.svg";
//                         // dealerColor=black
//                     }else if (dealersuit5==3){
//                         dealersuit5= "SVGs/diamonds.svg";
//                         // dealerColor=red
//                     }else if (dealersuit5==0){
//                         dealersuit5= "SVGs/clubs.svg";
//                         // dealerColor=black
//                     }
//                     document.getElementById('dealersuit5').src = dealersuit5;

//                     var dealer5 = Math.floor((Math.random()*13)+2)
//                     if (dealer5==14) {
//                         dealer5= "A";
//                         dealerAce++
//                         dealerValue = dealerValue+11;
//                     }else if (dealer5==13){
//                         dealer5= "K";
//                         dealerValue = dealerValue+10;
//                     }else if (dealer5==12){
//                         dealer5= "J";
//                         dealerValue = dealerValue+10;
//                     }else if (dealer==11){
//                         dealer5= "Q";
//                         dealerValue = dealerValue+10;
//                     }
//                     else{
//                         dealerValue = dealerValue+dealer5;
//                     }
//                     document.getElementById('dealer5').innerHTML = dealer5;
//                     document.getElementById('dealerValue').innerHTML = dealerValue;
//                     aceReplay++
//                     if (dealerValue<=17){
//                         let dealersuit6 = Math.floor((Math.random()*4))
//                         if (dealersuit6==1) {
//                             dealersuit6= "SVGs/heart.svg";
//                             // dealerColor=red
//                         }else if (dealersuit6==2){
//                             dealersuit6= "SVGs/spades.svg";
//                             // dealerColor=black
//                         }else if (dealersuit6==3){
//                             dealersuit6= "SVGs/diamonds.svg";
//                             // dealerColor=red
//                         }else if (dealersuit6==0){
//                             dealersuit6= "SVGs/clubs.svg";
//                             // dealerColor=black
//                         }
//                         document.getElementById('dealersuit6').src = dealersuit6;
                
//                         var dealer6 = Math.floor((Math.random()*13)+2)
//                         if (dealer6==14) {
//                             dealer6= "A";
//                             dealerAce++
//                             dealerValue = dealerValue+11;
//                         }else if (dealer6==13){
//                             dealer6= "K";
//                             dealerValue = dealerValue+10;
//                         }else if (dealer6==12){
//                             dealer6= "J";
//                             dealerValue = dealerValue+10;
//                         }else if (dealer==11){
//                             dealer6= "Q";
//                             dealerValue = dealerValue+10;
//                         }
//                         else{
//                             dealerValue = dealerValue+dealer6;
//                         }
//                         document.getElementById('dealer6').innerHTML = dealer6;
//                         document.getElementById('dealerValue').innerHTML = dealerValue;
//                         aceReplay++
//                     }}}



//                     if (dealerValue<=17 && aceReplay==3){
//                             if (dealerValue<=17){
//                                 let dealersuit5 = Math.floor((Math.random()*4))
//                                 if (dealersuit5==1) {
//                                     dealersuit5= "SVGs/heart.svg";
//                                     // dealerColor=red
//                                 }else if (dealersuit5==2){
//                                     dealersuit5= "SVGs/spades.svg";
//                                     // dealerColor=black
//                                 }else if (dealersuit5==3){
//                                     dealersuit5= "SVGs/diamonds.svg";
//                                     // dealerColor=red
//                                 }else if (dealersuit5==0){
//                                     dealersuit5= "SVGs/clubs.svg";
//                                     // dealerColor=black
//                                 }
//                                 document.getElementById('dealersuit5').src = dealersuit5;
            
//                                 var dealer5 = Math.floor((Math.random()*13)+2)
//                                 if (dealer5==14) {
//                                     dealer5= "A";
//                                     dealerAce++
//                                     dealerValue = dealerValue+11;
//                                 }else if (dealer5==13){
//                                     dealer5= "K";
//                                     dealerValue = dealerValue+10;
//                                 }else if (dealer5==12){
//                                     dealer5= "J";
//                                     dealerValue = dealerValue+10;
//                                 }else if (dealer==11){
//                                     dealer5= "Q";
//                                     dealerValue = dealerValue+10;
//                                 }
//                                 else{
//                                     dealerValue = dealerValue+dealer5;
//                                 }
//                                 document.getElementById('dealer5').innerHTML = dealer5;
//                                 document.getElementById('dealerValue').innerHTML = dealerValue;
//                                 aceReplay++
//                                 if (dealerValue<=17){
//                                     let dealersuit6 = Math.floor((Math.random()*4))
//                                     if (dealersuit6==1) {
//                                         dealersuit6= "SVGs/heart.svg";
//                                         // dealerColor=red
//                                     }else if (dealersuit6==2){
//                                         dealersuit6= "SVGs/spades.svg";
//                                         // dealerColor=black
//                                     }else if (dealersuit6==3){
//                                         dealersuit6= "SVGs/diamonds.svg";
//                                         // dealerColor=red
//                                     }else if (dealersuit6==0){
//                                         dealersuit6= "SVGs/clubs.svg";
//                                         // dealerColor=black
//                                     }
//                                     document.getElementById('dealersuit6').src = dealersuit6;
                            
//                                     var dealer6 = Math.floor((Math.random()*13)+2)
//                                     if (dealer6==14) {
//                                         dealer6= "A";
//                                         dealerAce++
//                                         dealerValue = dealerValue+11;
//                                     }else if (dealer6==13){
//                                         dealer6= "K";
//                                         dealerValue = dealerValue+10;
//                                     }else if (dealer6==12){
//                                         dealer6= "J";
//                                         dealerValue = dealerValue+10;
//                                     }else if (dealer==11){
//                                         dealer6= "Q";
//                                         dealerValue = dealerValue+10;
//                                     }
//                                     else{
//                                         dealerValue = dealerValue+dealer6;
//                                     }
//                                     document.getElementById('dealer6').innerHTML = dealer6;
//                                     document.getElementById('dealerValue').innerHTML = dealerValue;
//                                     aceReplay++
//                                 }}}


//                                 if (dealerValue<=17 && aceReplay==4){
//                                         if (dealerValue<=17){
//                                             let dealersuit6 = Math.floor((Math.random()*4))
//                                             if (dealersuit6==1) {
//                                                 dealersuit6= "SVGs/heart.svg";
//                                                 // dealerColor=red
//                                             }else if (dealersuit6==2){
//                                                 dealersuit6= "SVGs/spades.svg";
//                                                 // dealerColor=black
//                                             }else if (dealersuit6==3){
//                                                 dealersuit6= "SVGs/diamonds.svg";
//                                                 // dealerColor=red
//                                             }else if (dealersuit6==0){
//                                                 dealersuit6= "SVGs/clubs.svg";
//                                                 // dealerColor=black
//                                             }
//                                             document.getElementById('dealersuit6').src = dealersuit6;
                                    
//                                             var dealer6 = Math.floor((Math.random()*13)+2)
//                                             if (dealer6==14) {
//                                                 dealer6= "A";
//                                                 dealerAce++
//                                                 dealerValue = dealerValue+11;
//                                             }else if (dealer6==13){
//                                                 dealer6= "K";
//                                                 dealerValue = dealerValue+10;
//                                             }else if (dealer6==12){
//                                                 dealer6= "J";
//                                                 dealerValue = dealerValue+10;
//                                             }else if (dealer==11){
//                                                 dealer6= "Q";
//                                                 dealerValue = dealerValue+10;
//                                             }
//                                             else{
//                                                 dealerValue = dealerValue+dealer6;
//                                             }
//                                             document.getElementById('dealer6').innerHTML = dealer6;
//                                             document.getElementById('dealerValue').innerHTML = dealerValue;
//                                             aceReplay++
//                                         }}

//         if (dealerValue>=21){
//             win();
//         }

// }
// function hit(n){
//     n=n+1;
//     let suitfinder=n;
//     let valuefinder=100+n;

//     let othersuit = Math.floor((Math.random()*4))
//     if (othersuit==1) {
//         othersuit= "SVGs/heart.svg";
//     }else if (dealersuit==2){
//         othersuit= "SVGs/spades.svg";
//     }else if (othersuit==3){
//         othersuit= "SVGs/diamonds.svg";
//     }else if (othersuit==0){
//         othersuit= "SVGs/clubs.svg";
//     }
//     document.getElementById(suitfinder).src = othersuit;

//     var othercard = Math.floor((Math.random()*13)+2)
//     if (othercard ==14) {
//         othercard = "A";
//         othercardValue = 11;
//     }else if (othercard==13){
//         othercard = "K";
//         othercardValue = 10;
//     }else if (othercard==12){
//         othercard = "J";
//         othercardValue = 10;
//     }else if (othercard==11){
//         othercard = "Q";
//         othercardValue = 10;
//     }
//     else{
//         othercardValue = othercard;
//     }
//     document.getElementById(valuefinder).innerHTML = othercard;
//     document.getElementById('othercardValue').innerHTML = othercardValue;
// }