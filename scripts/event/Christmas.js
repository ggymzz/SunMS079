/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){}function setup(a){var b=em.newInstance("Christmas"+a);b.setProperty("stage","0");b.setProperty("ok","0");b.setProperty("mode",a);var c=b.setInstanceMap(889100001+10*parseInt(a));c.resetFully();a=em.getMonster(9400326+5*parseInt(a));b.registerMonster(a);c.spawnMonsterOnGroundBelow(a,new java.awt.Point(-189,30));b.startEventTimer(6E5);return b}function playerEntry(a,b){var c=a.getMapInstance(0);b.changeMap(c,c.getPortal(0))}function changedMap(a,b,c){889100001!=c&&889100011!=c&&889100021!=c&&playerExit(a,b)}function playerDisconnected(a,b){return 0}function scheduledTimeout(a){if(a.getProperty("stage").equals("1"))allMonstersDead(a);else{a.setProperty("stage","1");a.setProperty("ok","1");a.getMapInstance(0).killAllMonsters(!0);var b=em.getMonster(9400319+parseInt(a.getProperty("mode")));a.restartEventTimer(6E5);a.registerMonster(b);map.spawnMonsterOnGroundBelow(b,new java.awt.Point(-189,30));a.setProperty("ok","0")}}function monsterValue(a,b){9400322!=b&&9400327!=b&&9400332!=b||a.getProperty("ok").equals("1")||allMonstersDead(a);return 1}function playerExit(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0")}function allMonstersDead(a){a.disposeIfPlayerBelow(100,889100002+10*parseInt(a.getProperty("mode")))}function playerRevive(a,b){return!1}function clearPQ(a){}function leftParty(a,b){}function disbandParty(a){}function playerDead(a,b){}function cancelSchedule(){};