"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Tom
   Date: 12/31/19
   
   Filename: hg_report.js
	
*/
//Displays all game info and summary in the article of the html
var gameReport = "<h1>" + itemTitle + "</h1> \
				  <h2>By:" + itemManufacturer + "</h2> \
				  <img src='hg_10551.png' alt='id' id='gameImg' /> \
				  <table> \
				  <tr><th>Product ID</th><td>" + itemID + "</td></tr> \
				  <tr><th>List Price</th><td>" + itemPrice + "</td></tr> \
				  <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> \
				  <tr><th>ESRB</th><td>" + itemESRB + "</td></tr> \
				  <tr><th>Condition</th><td>" + itemCondition + "</td></tr> \
				  <tr><th>Release</th><td>" + itemRelease + "</td></tr> \
				  </table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//calculate the average rating of the game
var ratingsSum = 0;

var ratingsCount = ratings.length;
//caluclate average star rating
for(var i = 0; i < ratings.length; i++) {
	ratingsSum = ratingsSum + ratings[i];
}

//calculates average rating
var ratingsAvg = ratingsSum / ratingsCount;

//turns rating number into a number with two decimal places
ratingsAvg = ratingsAvg.toFixed(2);

//display customer reviews
var ratingReport = "<h1>Customer Reviews</h1> \
					<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + ")</h2>";

//loop to display 3 reviews from people
for(var i = 0; i < 3; i++) {
	ratingReport += "<div class='review'>\
					 <h1>" + ratingTitles[i] + "</h1> \
					 <table> \
					 <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> \
					 <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> \
					 <tr><th>Rating</th><td>";

//loop to display stars for ratings
	for(var x = 1; x <= ratings[i]; x++) {
		ratingReport += "<img src='hg_star.png' />";
	}

	ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";

	
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
