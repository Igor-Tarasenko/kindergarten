jQuery(function($){
		url1 = 'http://invest7.justclick.ru/subscribe/process/?rid[0]=1521230124.4783656327&doneurl=http%3A%2F%2Finvest-experts.ru%2Factivate&activation=1&doneurl2=http%3A%2F%2Finvest-experts.ru%2Fa%2Fsuccess&quick=1&';	// Ссылка до заданного времени
		url2 = 'http://invest7.justclick.ru/subscribe/process/?rid[0]=1521230151.4156878949&doneurl=http%3A%2F%2Finvest-experts.ru%2Factivate&activation=1&doneurl2=http%3A%2F%2Finvest-experts.ru%2Fa%2Fsuccess&quick=1&';	// Ссылка после заданного времени
		url3 = 'http://invest7.justclick.ru/subscribe/process/?rid[0]=1521230178.5479956727&doneurl=http%3A%2F%2Finvest-experts.ru%2Factivate&activation=1&doneurl2=http%3A%2F%2Finvest-experts.ru%2Fa%2Fsuccess&quick=1&';	// Ссылка после заданного времени

	var date_now = new Date(),
		date_now = date_now.setUTCHours(date_now.getUTCHours() + 3),
		date_setting1 = new Date().setUTCHours(00, 00),
		date_setting2 = new Date().setUTCHours(18, 59),
		date_setting3 = new Date().setUTCHours(19, 00),
		date_setting4 = new Date().setUTCHours(19, 59),
		date_setting5 = new Date().setUTCHours(20, 00),
		date_setting6 = new Date().setUTCHours(23, 59),


		iframe = $('form.podp'), a_data;
		a_data = url3;

	if(date_now >= date_setting1 && date_now <= date_setting2) a_data = url1;
	if(date_now >= date_setting3 && date_now <= date_setting4) a_data = url2;
	if(date_now >= date_setting5 && date_now <= date_setting6) a_data = url3;

	iframe.attr('action', a_data);
});
