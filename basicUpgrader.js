module.exports = {
	go(util){
		var upgrader = Game.creeps["upgrader"]
		if (upgrader == null || upgrader.ticksToLive < 1) {
			util.spawnCreep("upgrader", {m:2,w:1,c:1}, {}, "Spawn1-1")
		} else {
			this.run(upgrader, util)
		}
	},
	run(creep, util){
		var status = util.getCreepStorageStatus(creep)
		
		if (status == "EMPTY") {
			creep.memory.action = "GATHER"
		}
		
		if (status == "FULL") {
			creep.memory.action == "WORK"
		}
		
		if (creep.memory.action == "GATHER") {
			util.gatherFromEnergy(creep)
		} else if (creep.memory.action == "WORK") {
			var controller = creep.room.controller
			if (creep.pos.getRangeTo(controller) > 3) {
				creep.moveTo(controller)
			} else {
				creep.upgradeController(controller)
			}
		}
	}
}