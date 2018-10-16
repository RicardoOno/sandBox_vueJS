new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.turns = [];
        },
        attack: function() {
            let max = 10;
            let min = 3;
            let damage = this.calculateDamage(min, max); //setting a random num: 3~10
            this.monsterHP -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            if(this.checkWin()){
                return;
            }

            this.monsterAttack();

        },
        specialAttack: function() {
            let damage = this.calculateDamage(15, 10);
            this.monsterHP -=  damage;
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits special attack Monster for ' + damage
            });

            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        heal: function() {
            if(this.playerHP < 91){
                this.playerHP +=10;
            } else {
                this.playerHP = 100;
            }
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal for ' + 10
            });

            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;

        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max)  + 1, min);
        },
        checkWin: function() {
             if(this.monsterHP <= 0) {
                if(confirm('You Won! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;    
                }
                return true;
            } else if(this.playerHP <= 0) {
                if(confirm('You lost! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;    
                }
                return true;
            }
        },
        monsterAttack: function(){
            max = 12;
            min = 5;
            damage = this.calculateDamage(min, max);
            this.playerHP -= damage;

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        }
    }

})