// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var h, q, d, n, p;
	var i;
if(currency >= 10000) {	
	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
} else if(currency <= 0){
	return {};
} else if((currency > 0) && (currency < 10000)) {
	
	if(currency%50 != 0) {
		h = Math.floor(currency/50);
		if(Math.floor((currency%50)%25 != 0)) {
			q = Math.floor((currency%50)/25);
			if((currency - h*50 - q*25)%10 != 0) {
				d = Math.floor((currency - h*50 - q*25)/10);
			} else {
				d = (currency - h*50 - q*25)/10;
			}
		} else {
			q = currency/25;
		}
	} else {
		h = currency/50;
	}
	
	
} 
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
};




// 9999  H = 199(50) - 9950(Остаток 49) 
// 49    Q = 1(25)   - 25  (Остаток 24)
// 24    D = 2(10)   - 20  (Остаток 4)
// 4     P = 4(1)    - 4
// 

/* h = Math.floor(currency/50);
	q = Math.floor((currency%50)/25);
	d = Math.floor((currency - h*50 - q*25)/10);
	p = currency - h*50 - q*25 - d*10;
	return {H: + h, Q: + q, D: + d, P: + p}; 
	*/