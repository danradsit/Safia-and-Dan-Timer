const startDate = new Date(2017, 10, 11, 17, 00);

window.setInterval(function() {
	let currentTime = new Date();
	let difference = currentTime - startDate;
	let diffInDays = (difference) / (1000 * 60 * 60 * 24);
	let roundedDays = Math.round(diffInDays);
	console.log(roundedDays);
	const div = document.getElementById("timer");
	div.innerHTML = "<span id='dayCount'>" + roundedDays + "</span><span id='daysText'> days</span>";
}, 1000);
