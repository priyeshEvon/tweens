export default class Cards extends Phaser.Scene{
    constructor(){
        super('Cards')
    }
    preload(){
        this.load.image('King','/assets/king.png');
        this.load.image('Ace','/assets/ace.png');
        this.load.image('Queen','/assets/queen.png');
        this.load.image('Joker','/assets/joker.png');
        this.load.image('Back','/assets/cards_back.png');
    }
    create(){

        this.add.text(50,500,'Try to find the Ace in 2 chances',{font:"32px",style:"#ffffff"})
        //cards display 
        this.flips=0;
        this.maxflips=2;
        this.chances=2;
        this.result=0;
        const { width, height } = this.scale;
        this.chanceText=this.add.text(width-110,height-550,`Chances :${this.chances}`,{font:"20px",style:"#ffffff",stroke:"#cdb911",strokeThickness:"1"})
        const cardKeys = ['King', 'Ace', 'Queen', 'Joker'];
        Phaser.Utils.Array.Shuffle(cardKeys); //shuffle the positions at every restart

        const cols = 2;
        const spacingX = 200;
        const spacingY = 200;   
        const startX = width / 2 - spacingX / 1.5;
        const startY = height / 2 - spacingY;

        for (let i = 0; i < cardKeys.length; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            const x = startX + col * spacingX;
            const y = startY + row * spacingY;

            const card = this.add.image(x, y, 'Back').setScale(0.5).setInteractive();
            card.Orignal=cardKeys[i]

            card.on('pointerdown',()=>{
                this.flipCard(card);
            });
        }
        
    }
            flipCard(card){
            this.tweens.add({
                targets:card,
                scaleX:0,
                ease:'Power2',
                duration:200,
                onComplete:()=>{
                    card.setTexture(card.Orignal)
                    this.tweens.add({
                        targets:card,
                        ease:'Linear',
                        duration:300,
                        scaleX:0.5,                       
                    })
                    this.flips++;
                    this.chances--;
                    this.chanceText.setText(`Chances: ${this.chances}`);
                    if(card.Orignal==='Ace'){
                        this.result=1;
                        this.endgame();
                        return;
                    }
                    if(this.flips>=this.maxflips){
                        this.result=0;
                        this.endgame();
                    }
                }
            });
        }
        endgame(){
            this.time.delayedCall(200,()=>{
                this.scene.start('ResultScene',{result:this.result});
            })
        }
}