importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="#e集齐以下字母一组，可以兑换一个#v4170005##l#l\r\n\r\n";
			text +="#v3994071##v3994059##v3994074##v3994070##v3994063##v3994077##v3994078##v3994073##v3994076##v3994083#\r\n"
			text +="#r注意兑换的时候在背包其他栏空出至少两个空格,否则发生吞道具的情况GM概不负责\r\n";
			text +="                   #L4##r我收集了一组，给我礼物吧\r\n";
			
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(3994071, 2) && cm.haveItem(3994059, 2) && cm.haveItem(3994074, 1) && cm.haveItem(3994070, 1) && cm.haveItem(3994063, 2) && cm.haveItem(3994077, 1) && cm.haveItem(3994078, 1) && cm.haveItem(3994073, 2) && cm.haveItem(3994076, 1) && cm.haveItem(3994083, 1) && cm.haveItem(3990006, 1) && cm.haveItem(3990009, 1) &&cm.getMeso() >=1) {
                cm.haveItem(3994071,-2);
                cm.haveItem(3994059,-2);
                cm.haveItem(3994074,-1);
                cm.haveItem(3994070,-1);
				cm.haveItem(3994063,-2);
                cm.haveItem(3994077,-1);
                cm.haveItem(3994078,-1);
                cm.haveItem(3994073,-2);
                cm.haveItem(3994076,-1);
                cm.haveItem(3994083,-1);
                cm.haveItem(3990006,-1);
                cm.haveItem(3990009,-1);
                cm.gainMeso(-1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(4170005); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(4170005)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁
		//toDrop. setStr(1);//给力量
		//toDrop. setDex(1);//给敏捷 
		//toDrop. setInt(1);//给智力
		//toDrop. setLuk(1);//给运气
		//toDrop. setHp(1);//HP
        //toDrop. setMp(1);//MP
		//toDrop. setWatk(3);//攻击力    
		//toDrop. setMatk(3);//魔法力

		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("兑换#v4170005#成功！");
                cm.dispose();
            } else {
                cm.sendOk("兑换失败！材料不足!");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1113164, 1) && cm.haveItem(4001266, 50) && cm.haveItem(4000487, 50) && cm.haveItem(2210006, 5) && cm.haveItem(4003002, 5) && cm.haveItem(4003003, 5) && cm.haveItem(4000463, 1) && cm.haveItem(4011000, 10) && cm.haveItem(4011002, 10) && cm.haveItem(4011003, 10) && cm.haveItem(4011004, 10) && cm.haveItem(4011006, 10) && cm.getMeso() >=5000000) {
                cm.gainItem(1113164,-1);
				cm.gainItem(4001266,-50);
				cm.gainItem(4000487,-50);
                cm.gainItem(2210006,-5);
				cm.gainItem(4003002,-5);
				cm.gainItem(4003003,-5);
				cm.gainItem(4000463,-1);
				cm.gainItem(4011000,-10);
				cm.gainItem(4011002,-10);
				cm.gainItem(4011003,-10);
				cm.gainItem(4011004,-10);
				cm.gainItem(4011006,-10);
                cm.gainMeso(-5000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1113165); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1113165)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁
		toDrop. setStr(1);//给力量
		toDrop. setDex(1);//给敏捷 
		toDrop. setInt(1);//给智力
		toDrop. setLuk(1);//给运气
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1113165#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1113164#*1个 #v4001266#*50个 #v4000487#*50个 #v2210006#*5个 #v4003002#*5个 #v4003003#*5个 #v4000463#*1个 #v4011000#*10个 #v4011002#*10个 #v4011003#*10个 #v4011004#*10个 #v4011006#*10个 500万金币");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1113165, 1) && cm.haveItem(4001266, 100) && cm.haveItem(4000487, 100) && cm.haveItem(2210006, 8) && cm.haveItem(4003002, 10) && cm.haveItem(4003003, 10) && cm.haveItem(4000040, 5) && cm.haveItem(4000463, 3) && cm.haveItem(4021001, 10) && cm.haveItem(4021002, 10) && cm.haveItem(4021003, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021006, 10) && cm.haveItem(4021008, 10) &&cm.getMeso() >=10000000) {
                cm.gainItem(1113165,-1);
				cm.gainItem(4001266,-100);
				cm.gainItem(4000487,-100);
                cm.gainItem(2210006,-8);
				cm.gainItem(4003002,-10);
				cm.gainItem(4003003,-10);
				cm.gainItem(4000040,-5);
				cm.gainItem(4000463,-3);
				cm.gainItem(4021001,-10);
				cm.gainItem(4021002,-10);
				cm.gainItem(4021003,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021006,-10);
				cm.gainItem(4021008,-10);
                cm.gainMeso(-10000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1113166); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1113166)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁
		toDrop. setStr(1);//给力量
		toDrop. setDex(1);//给敏捷 
		toDrop. setInt(1);//给智力
		toDrop. setLuk(1);//给运气
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1113166#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1113165#*1个 #v4001266#*100个 #v4000487#*100个 #v2210006#*8个 #v4003002#*10个 #v4003003#*10个 #v4000040#*5个 #v4000463#*3个 #v4021001#*10个 #v4021002#*10个 #v4021003#*10个 #v4021005#*10个 #v4021006#*10个 #v4021008#*10个+ 1000万金币");
                cm.dispose();
            }
        } else if (selection == 4) {
            if  (cm.haveItem(3994071, 1) && cm.haveItem(3994059, 1) && cm.haveItem(3994074, 1) && cm.haveItem(3994070, 1) && cm.haveItem(3994063, 1) && cm.haveItem(3994077, 1) && cm.haveItem(3994078, 1) && cm.haveItem(3994073, 1) && cm.haveItem(3994076, 1) && cm.haveItem(3994083, 1) &&cm.getMeso() >=1) {
                cm.gainItem(3994071,-1);
                cm.gainItem(3994059,-1);
                cm.gainItem(3994074,-1);
                cm.gainItem(3994070,-1);
				cm.gainItem(3994063,-1);
                cm.gainItem(3994077,-1);
                cm.gainItem(3994078,-1);
                cm.gainItem(3994073,-1);
                cm.gainItem(3994076,-1);
                cm.gainItem(3994083,-1);
                cm.gainMeso(-1);
				cm.gainItem(4170005,1);
                cm.sendOk("兑换成功");
                cm.dispose();
            } else {
                cm.sendOk("兑换失败");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(1113167, 1) && cm.haveItem(4001266, 300) && cm.haveItem(4000487, 300) && cm.haveItem(4001006, 100) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4021009, 20) && cm.haveItem(4011007, 20) && cm.haveItem(4021010, 5) && cm.haveItem(4000257, 10) && cm.haveItem(4000463, 10) && cm.getMeso() >=30000000) {
                cm.gainItem(1113167,-1);
				cm.gainItem(4001266,-300);
				cm.gainItem(4000487,-300);
                cm.gainItem(4001006,-100);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4021009,-20);
				cm.gainItem(4011007,-20);
				cm.gainItem(4021010,-5);
				cm.gainItem(4000257,-10);
				cm.gainItem(4000463,-10);
                cm.gainMeso(-30000000);
				cm.gainItem(1113168,1);
                cm.sendOk("合成#v1113168#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1113167#*1个 #v4001266#*300个 #v4000487#*300个 #v4001006#*100个 #v4000040#*20个 #v4000176#*20个 #v4021009#*20个 #v4011007#*20个 #v4021010#*5个 #v4000257#*10个 #v4000463#*10个+ 3000万金币");
                cm.dispose();
            }
        } else if (selection == 6) {
			
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4000487,-100);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113178,1);
                cm.sendOk("合成#v1113178#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*1250个 #v1112679#*3个 #v4011004#*50个  #v4021007#*50个   #v4011006#*50个   #v4021005#*50个  #v4021002#*50个   #v4251202#*5个 #v4001083#*5个 #v4001084#*15个 #v4001085#*15个 #v4000175#*15个  #v4001126#*12500个   #v4000487#*100个  #v4002000#*500个  #v4002001#*100个 #v4002002#*25个 #v4002003#*90个 #v4031559#*50个 5000万金币");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4000487,-100);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113037,1);
                cm.sendOk("合成#v1113037#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*1250个 #v1112679#*3个 #v4011004#*50个 #v4021007#*50个 #v4011006#*50个 #v4021005#*50个 #v4021002#*50个 #v4251202#*5个  #v4001083#*5个   #v4001084#*15个   #v4001085#*15个   #v4000175#*15个  #v4001126#*12500个  #v4000487#*100个  #v4002000#*500个  #v4002001#*100个  #v4002002#*25个 #v4002003#*90个 #v4031559#*50个 5000万金币");
                cm.dispose();
            }
			}
		}
    }
    


