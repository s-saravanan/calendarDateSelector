//Javascript file

var DateSelector = {
	init : function() {
		console.log("init")
	},
	showCalendar : function(idCalendar, isCalledFromOverlay) {
		this.sCalledFor;
		if (isCalledFromOverlay) {
			sCalledFor = 'calendar_date_selector_field';
		}
		calendarComponent_Init(sCalledFor);
		calendarComponent_Show(idCalendar, sCalledFor);
	},
	updateInitial : function(sCont, sVal) {
		if (sCont == 'A') {
			document.getElementById('calendar_date_selector_field_instance0').value = sVal.value;
		} else {
			document.getElementById('calendar_date_selector_field_instance1').value = sVal.value;
		}
	},
	siv_currentDate : function() {
		dateObj = new Date();
		currentD = DateSelector.siv_formatDate(dateObj);
		return currentD;
	},
	siv_formatDate : function(date) {
		month = date.getUTCMonth() + 1;
		day = date.getUTCDate();
		year = date.getUTCFullYear();
		ddmmyyy = day + "/" + month + "/" + year;
		return ddmmyyy;
	},
	siv_formatDateN : function(date) {
		var dd = date.getDate();
		var mm = date.getMonth() + 1;
		var y = date.getFullYear();
		return dd + "/" + mm + "/" + y;
	},
	siv_YesterDay : function() {
		d = new Date();
		yday = d.setDate(d.getDate() - 1);
		ydate = DateSelector.siv_formatDate(new Date(yday));
		return ydate;
	},
	LastSevenDay : function() {
		d = new Date();
		yday = d.setDate(d.getDate() - 7);
		ldate = DateSelector.siv_formatDate(new Date(yday));
		return ldate;
	},
	LastMonthStart : function() {
		date = new Date(), y = date.getFullYear(), m = date.getMonth() - 1;
		firstDay = new Date(y, m, 1);
		lmsdate = DateSelector.siv_formatDateN(firstDay);
		return lmsdate;
	},
	LastMonthEnd : function() {
		date = new Date(), y = date.getFullYear(), m = date.getMonth() - 1;
		lastDay = new Date(y, m + 1, 0);
		lmedate = DateSelector.siv_formatDateN(lastDay);
		return lmedate;
	},
	LastWeekStart : function() {
		date = new Date();
		lwstart = DateSelector.siv_formatDate(new Date(new Date(date.getTime()
				- ((6 + date.getDay()) * 24 * 60 * 60 * 1000))));
		return lwstart;
	},
	LatWeekEnd : function() {
		d = new Date()
		to = d.setTime(d.getTime() - (d.getDay() ? d.getDay() : 7) * 24 * 60
				* 60 * 1000);
		lwedate = DateSelector.siv_formatDate(new Date(to));
		return lwedate;
	},
	Last30Days : function() {
		d = new Date();
		yday = d.setDate(d.getDate() - 30);
		lddate = DateSelector.siv_formatDate(new Date(yday));
		return lddate;
	},
	setCalenderDate : function(from, to) {
		document.getElementById("calendar_date_selector_field_instance0").value = from;
		document.getElementById("calendar_date_selector_field_instance1").value = to;
	},
	selectFromToDates : function() {
		dateSelected = document.getElementById('selectDatesId').value;
		switch (dateSelected) {
		case "0":
			DateSelector.setCalenderDate(DateSelector.siv_currentDate(),
					DateSelector.siv_currentDate());
			break;
		case "1":
			DateSelector.setCalenderDate(DateSelector.siv_YesterDay(),
					DateSelector.siv_YesterDay());
			break;
		case "2":
			DateSelector.setCalenderDate(DateSelector.LastWeekStart(),
					DateSelector.LatWeekEnd());
			break;
		case "3":
			DateSelector.setCalenderDate(DateSelector.LastMonthStart(),
					DateSelector.LastMonthEnd());
			break;
		case "4":
			DateSelector.setCalenderDate(DateSelector.LastSevenDay(),
					DateSelector.siv_currentDate());
			break;
		case "5":
			DateSelector.setCalenderDate(DateSelector.Last30Days(),
					DateSelector.siv_currentDate());
			break;
		default:
		}
	}
}