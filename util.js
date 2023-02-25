var _ = require('lodash')

module.exports = {
	getBodyArray(body){
		var array = []
		var addParts = function(arr, part, times){
			for (var i = 0; i < times; i++) {
				arr.push(part)
			}
		}
		
		addParts(array, MOVE, body.m)
		addParts(array, WORK, body.w)
		addParts(array, CARRY, body.c)
		addParts(array, ATTACK, body.a)
		addParts(array, RANGED_ATTACK, body.r)
		addParts(array, HEAL, body.h)
		addParts(array, CLAIM, body.claim)
		addParts(array, TOUGH, body.t)
		
		return array
	},
	spawnCreep(name, body, mem, spawn) {
		var body = this.getBodyArray(body)
		console.log(spawn + " " + body + " " + name + " " + mem)
		console.log(Game.spawns[spawn].spawnCreep(body, name, mem))
	},
	getCreepStorageStatus(creep) {
		if (creep.store.getFreeCapacity() == 0) {
			return "FULL"
		} else if (creep.store.getFreeCapacity() == creep.store.getCapacity()){
			return "EMPTY"
		} else {
			return "MID"
		}
	},
	gatherFromEnergy(creep) {
		var energy = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)
		if (creep.pos.getRangeTo(energy) > 1) {
			creep.moveTo(energy)
		} else {
			creep.harvest(energy)
		}
	}
	
	
}