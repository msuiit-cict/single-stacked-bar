(function( $ ) {
	$.fn.singleStack = function(data) {
		var total = 0;
		//throw error if not div element
		if(!(this.is('div'))) throw new Error('Element attached is not a div element.');
		//warn if no viewport is available
		if($('div.stat-bar-viewport').length === 0) console.warn('Warning: No viewport element is available');
		//throw error if data is not array
		if(!($.isArray(data))) throw new Error('Data inputted is not an array');
		//warn if data has no elements
		if(!($.isArray(data))) console.warn('Array inputted is not an array');
		//add styles to div
		this.addClass('single-stack-bar-container');

		//return length
		if(data.length === 0) return this;
		//get total
		for (var i = data.length - 1; i >= 0; i--) {
			total += parseFloat(data[i].value);
		}
		//append the bar
		for (var j = data.length - 1; j >= 0; j--) {
			this.append('<span class="single-stack-slice" style="width:'+((data[j].value/total)*100).toFixed(2)+'%; background-color:'+data[j].color+';">'+data[j].name+'</span>');
		}
		return this;
	};
}( jQuery ));