
export default class ResultScene extends Phaser.Scene {
  constructor() {
    super('ResultScene');
  }

  init(data) {
    this.result = data.result; 
  }

  create() {
    const { width, height } = this.scale;

    const message = this.result === 1 ? '🎉 You Win!' : '😢 You Lose!';

    this.add.text(width / 2, height / 2 - 40, message, {
      font: '32px Arial',
      color: '#ffffff'
    }).setOrigin(0.5);

    const playAgain = this.add.text(width / 2, height / 2 + 40, '🔁 Play Again', {
      font: '24px Arial',
      color: '#00ff00',
      backgroundColor: '#222',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive();

    playAgain.on('pointerdown', () => {
      this.scene.start('Cards');
    });
  }
}
