import Phaser from 'phaser';
import Cards from './scenes/Cards';
import ResultScene from './scenes/ResultScene';
const config = {
  type:Phaser.AUTO,
  height :600,
  width:720,
    physics: {
    default: 'arcade',
    arcade: {
      gravity:{y:0},
      debug: false
    }
  },
  scene:[Cards,ResultScene],
  backgroundColor:"#000000"
}
new Phaser.Game(config);