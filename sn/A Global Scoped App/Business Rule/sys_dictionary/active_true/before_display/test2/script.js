/* 
 * Application : A Global Scoped App
 * ClassName   : sys_script
 * Created On  : 2019-10-22 12:20:11
 * Created By  : admin
 * Updated On  : 2019-10-22 12:31:48
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=2652e05bdb680010fcf417803996197a
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	// Add your code here
	
	// hide all UI actions
	current.canCreate = function () {
		return false;
	};
	current.canRead = function () {
		return false;
	};
	current.canWrite = function () {
		return false;
	};
	current.canDelete = function () {
		return false;
	};
	
})(current, previous);
