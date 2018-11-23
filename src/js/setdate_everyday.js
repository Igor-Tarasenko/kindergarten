jQuery(function($){
	function getEuroDay(date) {
		var day = date.getDay();
		if(day == 0) day = 7;

		return day;
	}

	var hours, day, dayofweek, month,
		days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		monthes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
		monthes_mobile = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
		block_date = $('.date'),
		block_date_mobile = $('.date_mobile'),
		hours_start = 20,		// Начальные часы
		date_now = new Date();	// Дата сейчас

	// Устанавливаем GMT+3 (Москва)
	hours = date_now.getUTCHours(date_now.setUTCHours(date_now.getUTCHours() + 3));

	// Если наступило 15 часов, то прибавляем 1 день
	if(hours >= hours_start) date_now.setDate(date_now.getDate() + 1);

	day = date_now.getUTCDate();
	dayofweek = days[date_now.getUTCDay()];
	month = monthes[date_now.getUTCMonth()];
	month_mobile = monthes_mobile[date_now.getUTCMonth()];

	// выводим дату
	block_date.find('.date_month').text(month);
	block_date.find('.date_day').text(day);
	block_date.find('.date_dayofweek').text(dayofweek);
	block_date_mobile.find('.date_month').text(month_mobile);
	block_date_mobile.find('.date_day').text(day);
	block_date_mobile.find('.date_dayofweek').text(dayofweek);


	var block_total = $('.total');

	// Начальное время 20:00
	var mday_now = hours,									// Час сейчас
		mday_start = 20,		// Время начала отсчета
		//Начальное количество мест
		start_seats = 200;
		mday_diff = (mday_now - mday_start);
		d7 = start_seats/23;

	if (mday_now < 20) {
		mday_diff = hours+4;
	} else {
		mday_diff = (mday_now - mday_start);
	}
	date_diff = mday_diff;

	total = Math.round(start_seats - (date_diff * d7));

	// Выводим места
	block_total.text(total);

});
