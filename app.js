const hero = {
	name: 'Batman',
	health: 100,
	heatEnemy: function heatEnemy(enemy) {
		enemy.health = enemy.health - 10
		return enemy.health
	},
}
const enemy = {
	name: 'Joker',
	health: 100,
	heatHero: function heatHero(hero) {
		hero.health = hero.health - 10
		return hero.health
	},
}


function startGame(heroPlayer, enemyPlayer){
	function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  while(heroPlayer.health > 0 && enemyPlayer.health > 0){
    getRandomNumberInRange(0, 1) === 0 ? heroPlayer.heatEnemy(enemyPlayer) 
		: enemyPlayer.heatHero(heroPlayer)
		// console.log(
		// 	`${heroPlayer.name}: ${heroPlayer.health}; ${enemyPlayer.name}: ${enemyPlayer.health} `
		// )
  }
	heroPlayer.health > 0
		? alert(`Победил - ${heroPlayer.name}: ${heroPlayer.health}`)
		: alert(`Победил - ${enemyPlayer.name}: ${enemyPlayer.health}`)
}

startGame(hero, enemy)
