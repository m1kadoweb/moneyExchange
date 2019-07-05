// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {		
		var h = 0;
		var q = 0;
		var d = 0;
		var n = 0;
		var p = 0;		
		var result = {};
		
if(currency >= 10000) {	
	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
} else if(currency <= 0){
	return result;
} else if((currency > 0) && (currency < 10000)) {
	
	
		while(currency >= 50) {
			currency -= 50;
			h++;
			result["H"] = h;
		}

		while(currency >= 25) {
			currency -=25;
			q++;
			result["Q"] = q;
		}

		while(currency >= 10) {
			currency -=10;
			d++;
			result["D"] = d;
		}

		while(currency >= 5) {
			currency -=5;
			n++;
			result["N"] = n;
		}

		while(currency >= 1) {
			currency -=1;
			p++;
			result["P"] = p;
		}

		

				

	return result;
}
}; 
    