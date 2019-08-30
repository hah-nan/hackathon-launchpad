import * as PIXI from 'pixi.js';
const pixiParticles = require('pixi-particles');

function flameEmitter({startPos, stage, particles = ['https://pixijs.io/pixi-particles-editor/assets/images/particle.png', 'https://pixijs.io/pixi-particles-editor/assets/images/Fire.png'], startEmitting = true}) {
  var emitter = new pixiParticles.Emitter(
    stage,
    particles.map(p => PIXI.Texture.from(p)),
    {
    	"alpha": {
    		"start": 0.62,
    		"end": 0
    	},
    	"scale": {
    		"start": 0.25,
    		"end": 0.75,
    		"minimumScaleMultiplier": 1
    	},
    	"color": {
    		"start": "#fff191",
    		"end": "#ff622c"
    	},
    	"speed": {
    		"start": 200,
    		"end": 200,
    		"minimumSpeedMultiplier": 1
    	},
    	"acceleration": {
    		"x": 0,
    		"y": 0
    	},
    	"maxSpeed": 0,
    	"startRotation": {
    		"min": 265,
    		"max": 275
    	},
    	"noRotation": false,
    	"rotationSpeed": {
    		"min": 50,
    		"max": 50
    	},
    	"lifetime": {
    		"min": 0.01,
    		"max": 0.1
    	},
    	"blendMode": "normal",
    	"frequency": 0.001,
    	"emitterLifetime": -1,
    	"maxParticles": 1000,
    	"pos": {
    		"x": startPos.x,
    		"y": startPos.y,
    	},
    	"addAtBack": false,
    	"spawnType": "circle",
    	"spawnCircle": {
    		"x": 0,
    		"y": 0,
    		"r": 10
    	}
    }
  );

  if (startEmitting) {
    emitter.emit = true
  }

  return emitter;
}


export {
  flameEmitter,
}
