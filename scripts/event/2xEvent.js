/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var year,month,day,weekday,hour,cal,date,timestamp;function init(){scheduleChange()}function scheduleChange(){cal=java.util.Calendar.getInstance();weekday=cal.get(java.util.Calendar.DAY_OF_WEEK);hour=cal.get(java.util.Calendar.HOUR_OF_DAY);refreshDates(cal);if(1==weekday||7==weekday)16<hour&&18>hour?startEvent():16>hour?(a=year+"-"+month+"-"+day+" 16:00:00.0",a=java.sql.Timestamp.valueOf(a).getTime(),setupTask=em.scheduleAtTimestamp("startEvent",a)):19<hour&&(7==weekday?(cal.set(java.util.Calendar.DATE,cal.get(java.util.Calendar.DATE)+1),refreshDates(cal),a=year+"-"+month+"-"+day+" 16:00:00.0",a=java.sql.Timestamp.valueOf(a).getTime(),setupTask=em.scheduleAtTimestamp("startEvent",a)):1==weekday&&(cal.set(java.util.Calendar.DATE,cal.get(java.util.Calendar.DATE)+6),refreshDates(cal),a=year+"-"+month+"-"+day+" 16:00:00.0",a=java.sql.Timestamp.valueOf(a).getTime(),setupTask=em.scheduleAtTimestamp("startEvent",a)));else{cal.set(java.util.Calendar.DATE,cal.get(java.util.Calendar.DATE)+(7-weekday));refreshDates(cal);var a=year+"-"+month+"-"+day+" 16:00:00.0",a=java.sql.Timestamp.valueOf(a).getTime();setupTask=em.scheduleAtTimestamp("startEvent",a)}}function finishEvent(){em.DoubleRateEvent(!1);scheduleChange()}function startEvent(){refreshDates(cal);date=year+"-"+month+"-"+day+" 20:00:00.0";timeStamp=java.sql.Timestamp.valueOf(date).getTime();setupTask=em.scheduleAtTimestamp("finishEvent",timeStamp)}function changeRates(){em.DoubleRateEvent(!0);em.broadcastServerMsg(5120014,"2\u500d\u7ecf\u9a8c\u548c2\u500d\u7206\u7387\u4e8b\u4ef6\u5df2\u542f\u52a8!",!0)}function refreshDates(a){year=a.get(java.util.Calendar.YEAR);month=a.get(java.util.Calendar.MONTH)+1;0==Math.floor(month/10)&&(month="0"+month);day=a.get(java.util.Calendar.DATE);0==Math.floor(day/10)&&(day="0"+day)}function cancelSchedule(){setupTask.cancel(!0)};