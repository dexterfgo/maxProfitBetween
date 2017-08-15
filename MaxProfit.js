/*

interview quiz where I was asked how to get the maxProfit you could get by buying and selling a Product over a period of time (array length). I didn't get to answer this during the interview but I figured it out after I left lol.

To run:
 > node MaxProfit.js

*/

function computeMaxProfit()
{
	var length = 70; // length of array/number of capture points
	var max = 250.00; // max price
	var min = 5.00 // min price

	var maxPriceIndex = 0;
	var minPriceBeforePeakIndex = 0;
	var maxProfit = 0.00;

	// var stockArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

	// randomly generated N = 40 length array 0 <= A[N] <= 39
	var stockArray = Array.from({length}, () => Math.floor(Math.random() * (max - min) + min));

	// Find maxIndex which is the maximum value - when you ideally sell - first.
	// Reason is we want to know when is the last time we can sell best.
	for (index = 0; index < stockArray.length; index++)
	{
		console.log("stockArray[" + index + "] = $" + stockArray[index])
		if (stockArray[index] > stockArray[maxPriceIndex])
		{
			maxPriceIndex = index;
		}
	}

	console.log("maxPrice = $ " + stockArray[maxPriceIndex] + " maxPriceIndex = " + maxPriceIndex);

	// Now check the lowest point best time to buy - before the max last time we want to sell)
	for (index = 0; index < maxPriceIndex; index++)
	{
		
		if (stockArray[index] < stockArray[minPriceBeforePeakIndex])
			minPriceBeforePeakIndex = index;
	}

	console.log("\nminPriceBeforePeak = $ " + stockArray[minPriceBeforePeakIndex] + " minPriceBeforePeakIndex = " + maxPriceIndex);

	maxProfit = stockArray[maxPriceIndex] - stockArray[minPriceBeforePeakIndex];

	console.log("\nmaxProfit = $ " + maxProfit);
}

computeMaxProfit();