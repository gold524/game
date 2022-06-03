let MC_main = document.querySelector(".MC-main");
let loc1_div = document.querySelector(".loc1-div");
let loc2_div = document.querySelector(".loc2-div");
let loc3_div = document.querySelector(".loc3-div");
let loc_main = document.querySelector(".main");
let loc1 = document.querySelector(".loc1");
let prob = document.querySelector(".problem");
let ans1 = document.querySelector(".answer1");
let ans2 = document.querySelector(".answer2");
let ans3 = document.querySelector(".answer3");
let ans4 = document.querySelector(".answer4");
let ans5 = document.querySelector(".answer5");
let ans6 = document.querySelector(".answer6");
let safe = document.querySelector(".safe");
let note = document.querySelector(".note");
let art1 = document.querySelector(".artifact1");
let loc2 = document.querySelector(".loc2");
let poem = document.querySelector(".poem");
let bookshelf = document.querySelector(".bookshelf");
let book1 = document.querySelector(".book1");
let book2 = document.querySelector(".book2");
let book3 = document.querySelector(".book3");
let book4 = document.querySelector(".book4");
let book5 = document.querySelector(".book5");
let book6 = document.querySelector(".book6");
let book7 = document.querySelector(".book7");
let book8 = document.querySelector(".book8");
let book9 = document.querySelector(".book9");
let book10 = document.querySelector(".book10");
let book11 = document.querySelector(".book11");
let book12 = document.querySelector(".book12");
let book13 = document.querySelector(".book13");
let book14 = document.querySelector(".book14");
let book15 = document.querySelector(".book15");
let book16 = document.querySelector(".book16");
let rhyme1 = document.querySelector(".rhyme1");
let rhyme2 = document.querySelector(".rhyme2");
let rhyme3 = document.querySelector(".rhyme3");
let rhyme4 = document.querySelector(".rhyme4");
let score_loc2 = 0;
let art2 = document.querySelector(".artifact2");
let loc3 = document.querySelector(".loc3");
let tile_box = document.querySelector(".tile-box");
let tile1 = document.querySelector(".tile1");
let tile2 = document.querySelector(".tile2");
let tile3 = document.querySelector(".tile3");
let tile4 = document.querySelector(".tile4");
let tile5 = document.querySelector(".tile5");
let tile6 = document.querySelector(".tile6");
let tile7 = document.querySelector(".tile7");
let tile8 = document.querySelector(".tile8");
let tile9 = document.querySelector(".tile9");
let tile10 = document.querySelector(".tile10");
let tile11 = document.querySelector(".tile11");
let tile12 = document.querySelector(".tile12");
let tile13 = document.querySelector(".tile13");
let tile14 = document.querySelector(".tile14");
let tile15 = document.querySelector(".tile15");
let tile16 = document.querySelector(".tile16");
let petri = document.querySelector(".petri");
let red1 = document.querySelector(".red1");
let blue1 = document.querySelector(".blue1");
let green1 = document.querySelector(".green1");
let purple1 = document.querySelector(".purple1");
let pink1 = document.querySelector(".pink1");
let cyan1 = document.querySelector(".cyan1");
let orange1 = document.querySelector(".orange1");
let yellow1 = document.querySelector(".yellow1");
let red2 = document.querySelector(".red2");
let blue2 = document.querySelector(".blue2");
let green2 = document.querySelector(".green2");
let purple2 = document.querySelector(".purple2");
let pink2 = document.querySelector(".pink2");
let cyan2 = document.querySelector(".cyan2");
let orange2 = document.querySelector(".orange2");
let yellow2 = document.querySelector(".yellow2");
let coins = document.querySelector(".coins");
let red_scr = 0;
let blue_scr = 0;
let green_scr = 0;
let purple_scr = 0;
let pink_scr = 0;
let cyan_scr = 0;
let orange_scr = 0;
let yellow_scr = 0;
let score_loc3 = 0;
let art3 = document.querySelector(".artifact3");
let ending_div = document.querySelector(".ending-div");
let ending_door = document.querySelector(".ending-door");
let pied1 = document.querySelector(".pied1");
let pied2 = document.querySelector(".pied2");
let pied3 = document.querySelector(".pied3");
let art1_door = document.querySelector(".art1-door");
let art2_door = document.querySelector(".art2-door");
let art3_door = document.querySelector(".art3-door");
let loc4 = document.querySelector(".loc4");
let debug = document.querySelector(".debug");
let isLoc1 = false;
let isLoc2 = false;
let isLoc3 = false;
let isUsed1 = false;
let isUsed2 = false;
let isUsed3 = false;
loc1_div.onclick = function() {
	function change_loc1() {
		loc_main.style.display = "none";
		loc1.style.display = "block";
		MC_main.style.display = "none";
	}
	MC_main.style.left = 150 + "px";
	MC_main.style.top = 100 + "px";
	setTimeout(change_loc1, 1000);
	prob.style.display = "block";
	ans1.style.display = "block";
	ans2.style.display = "block";
	ans3.style.display = "block";
	ans4.style.display = "block";
	ans5.style.display = "block";
	ans6.style.display = "block";
	safe.style.display = "block";
	note.style.display = "block";
	function shuffle() {
		ans1.innerHTML = "";
		ans1.style.left = 300 + "px";
		ans1.style.top = 200 + "px";
		ans2.innerHTML = "";
		ans2.style.left = 0 + "px";
		ans2.style.top = 200 + "px";
		ans3.innerHTML = "";
		ans3.style.left = 600 + "px";
		ans3.style.top = 200 + "px";
		ans4.innerHTML = "";
		ans4.style.left = 600 + "px";
		ans4.style.top = 0 + "px";
		ans5.innerHTML = "";
		ans5.style.left = 0 + "px";
		ans5.style.top = 0 + "px";
		ans6.innerHTML = "";
		ans6.style.left = 300 + "px";
		ans6.style.top = 0 + "px";
	}
	setTimeout(shuffle, 2000);
	ans1.onclick = function() {
		function showAns() {
			ans1.innerHTML = "lorem";
		}
		function password() {
			alert('вы ввели пароль');
			function showArt1() {
				art1.style.display = "block";
			}
			function unShowArt2() {
				art1.style.display = "none";
			}
			function exitLoc1() {
				alert('артефакт в вашем инвентаре');
				prob.style.display = "none";
				ans1.style.display = "none";
				ans2.style.display = "none";
				ans3.style.display = "none";
				ans4.style.display = "none";
				ans5.style.display = "none";
				ans6.style.display = "none";
				safe.style.display = "none";
				note.style.display = "none";
				loc_main.style.display = "block";
				loc1.style.display = "none";
				MC_main.style.display = "block";
				isLoc1 = true;
				MC_main.style.left = 500 + "px";
				MC_main.style.top = 435 + "px";
			}
			setTimeout(showArt1, 2000);
			setTimeout(unShowArt2, 3000);
			setTimeout(exitLoc1, 4000);
		}		setTimeout(showAns, 0);
		setTimeout(password, 1000);
	}
}
loc2_div.onclick = function() {
	function change_loc2() {
		loc_main.style.display = "none";
		loc2.style.display = "block";
		MC_main.style.display = "none";
	}
	MC_main.style.top = 400 + "px";
	MC_main.style.left = 150 + "px";
	setTimeout(change_loc2, 1000);
	bookshelf.style.display = "block";
	book1.style.display = "block";
	book2.style.display = "block";
	book3.style.display = "block";
	book4.style.display = "block";
	book5.style.display = "block";
	book6.style.display = "block";
	book7.style.display = "block";
	book8.style.display = "block";
	book9.style.display = "block";
	book10.style.display = "block";
	book11.style.display = "block";
	book12.style.display = "block";
	book13.style.display = "block";
	book14.style.display = "block";
	book15.style.display = "block";
	book16.style.display = "block";
	poem.style.display = "block";
	book4.onclick = function() {
		rhyme1.style.textDecoration = "line-through";
		book4.style.display = "none";
		score_loc2 +=1;
		if (score_loc2==4) {
			function showArt2() {
				art2.style.display = "block";
			}
			function unShowArt2() {
				art2.style.display = "none";
			}
			function exitLoc2() {
				alert('артефакт в вашем инвентаре');
				bookshelf.style.display = "none";
				book1.style.display = "none";
				book2.style.display = "none";
				book3.style.display = "none";
				book4.style.display = "none";
				book5.style.display = "none";
				book6.style.display = "none";
				book7.style.display = "none";
				book8.style.display = "none";
				book9.style.display = "none";
				book10.style.display = "none";
				book11.style.display = "none";
				book12.style.display = "none";
				book13.style.display = "none";
				book14.style.display = "none";
				book15.style.display = "none";
				book16.style.display = "none";
				loc_main.style.display = "block";
				loc2.style.display = "none";
				MC_main.style.display = "block";
				poem.style.display = "none";
				isLoc2 = true;
				MC_main.style.left = 500 + "px";
				MC_main.style.top = 435 + "px";
			}
			setTimeout(showArt2, 1000);
			setTimeout(unShowArt2, 2000);
			setTimeout(exitLoc2, 3000);
		}
	}
	book7.onclick = function() {
		rhyme2.style.textDecoration = "line-through";
		book7.style.display = "none";
		score_loc2 +=1;
		if (score_loc2==4) {
			function showArt2() {
				art2.style.display = "block";
			}
			function unShowArt2() {
				art2.style.display = "none";
			}
			function exitLoc2() {
				alert('артефакт в вашем инвентаре');
				bookshelf.style.display = "none";
				book1.style.display = "none";
				book2.style.display = "none";
				book3.style.display = "none";
				book4.style.display = "none";
				book5.style.display = "none";
				book6.style.display = "none";
				book7.style.display = "none";
				book8.style.display = "none";
				book9.style.display = "none";
				book10.style.display = "none";
				book11.style.display = "none";
				book12.style.display = "none";
				book13.style.display = "none";
				book14.style.display = "none";
				book15.style.display = "none";
				book16.style.display = "none";
				loc_main.style.display = "block";
				loc2.style.display = "none";
				MC_main.style.display = "block";
				poem.style.display = "none";
				isLoc2 = true;
				MC_main.style.left = 500 + "px";
				MC_main.style.top = 435 + "px";
			}
			setTimeout(showArt2, 1000);
			setTimeout(unShowArt2, 2000);
			setTimeout(exitLoc2, 3000);
		}
	}
	book11.onclick = function() {
		rhyme3.style.textDecoration = "line-through";
		book11.style.display = "none";
		score_loc2 +=1;
		if (score_loc2==4) {
			function showArt2() {
				art2.style.display = "block";
			}
			function unShowArt2() {
				art2.style.display = "none";	
			}
			function exitLoc2() {
				alert('артефакт в вашем инвентаре');
				bookshelf.style.display = "none";
				book1.style.display = "none";
				book2.style.display = "none";
				book3.style.display = "none";
				book4.style.display = "none";
				book5.style.display = "none";
				book6.style.display = "none";
				book7.style.display = "none";
				book8.style.display = "none";
				book9.style.display = "none";
				book10.style.display = "none";
				book11.style.display = "none";
				book12.style.display = "none";
				book13.style.display = "none";
				book14.style.display = "none";
				book15.style.display = "none";
				book16.style.display = "none";
				loc_main.style.display = "block";
				loc2.style.display = "none";
				MC_main.style.display = "block";
				poem.style.display = "none";
				isLoc2 = true;
				MC_main.style.left = 500 + "px";
				MC_main.style.top = 435 + "px";
			}
			setTimeout(showArt2, 1000);
			setTimeout(unShowArt2, 2000);
			setTimeout(exitLoc2, 3000);
		}
	}
	book14.onclick = function() {
		rhyme4.style.textDecoration = "line-through";
		book14.style.display = "none";
		score_loc2 +=1;
		if (score_loc2==4) {
			function showArt2() {
				art2.style.display = "block";
			}
			function unShowArt2() {
				art2.style.display = "none";
			}
			function exitLoc2() {
				alert('артефакт в вашем инвентаре');
				bookshelf.style.display = "none";
				book1.style.display = "none";
				book2.style.display = "none";
				book3.style.display = "none";
				book4.style.display = "none";
				book5.style.display = "none";
				book6.style.display = "none";
				book7.style.display = "none";
				book8.style.display = "none";
				book9.style.display = "none";
				book10.style.display = "none";
				book11.style.display = "none";
				book12.style.display = "none";
				book13.style.display = "none";
				book14.style.display = "none";
				book15.style.display = "none";
				book16.style.display = "none";
				loc_main.style.display = "block";
				loc2.style.display = "none";
				MC_main.style.display = "block";
				poem.style.display = "none";
				isLoc2 = true;
				MC_main.style.left = 500 + "px";
				MC_main.style.top = 435 + "px";
			}
			setTimeout(showArt2, 1000);
			setTimeout(unShowArt2, 2000);
			setTimeout(exitLoc2, 3000);
		}
	}
}
loc3_div.onclick = function() {
	function change_loc3() {
		loc_main.style.display = "none";
		loc3.style.display = "block";
		MC_main.style.display = "none";
	}
	MC_main.style.left = 1110 + "px";
	MC_main.style.top = 100 + "px";
	setTimeout(change_loc3, 1000);
	tile_box.style.display = "block";
	tile1.style.display = "block";
	tile2.style.display = "block";
	tile3.style.display = "block";
	tile4.style.display = "block";
	tile5.style.display = "block";
	tile6.style.display = "block";
	tile7.style.display = "block";
	tile8.style.display = "block";
	tile9.style.display = "block";
	tile10.style.display = "block";
	tile11.style.display = "block";
	tile12.style.display = "block";
	tile13.style.display = "block";
	tile14.style.display = "block";
	tile15.style.display = "block";
	tile16.style.display = "block";
	petri.style.display = "block";
	red1.onclick = function() {
		tile1.style.width = 105 + "px";
		tile1.style.height = 105 + "px";
		red_scr += 1;
		if (red_scr == 2) {
			red2.style.display = "none";
			red1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	red2.onclick = function() {
		tile5.style.width = 105 + "px";
		tile5.style.height = 105 + "px";
		red_scr += 1;
		if (red_scr == 2) {
			red2.style.display = "none";
			red1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	orange1.onclick = function() {
		tile6.style.width = 105 + "px";
		tile6.style.height = 105 + "px";
		orange_scr += 1;
		if (orange_scr == 2) {
			orange2.style.display = "none";
			orange1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	orange2.onclick = function() {
		tile8.style.width = 105 + "px";
		tile8.style.height = 105 + "px";
		orange_scr += 1;
		if (orange_scr == 2) {
			orange2.style.display = "none";
			orange1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	blue1.onclick = function() {
		tile14.style.width = 105 + "px";
		tile14.style.height = 105 + "px";
		blue_scr += 1;
		if (blue_scr == 2) {
			blue2.style.display = "none";
			blue1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	blue2.onclick = function() {
		tile10.style.width = 105 + "px";
		tile10.style.height = 105 + "px";
		blue_scr += 1;
		if (blue_scr == 2) {
			blue2.style.display = "none";
			blue1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
				}
			}
		}
	}
	yellow1.onclick = function() {
		tile7.style.width = 105 + "px";
		tile7.style.height = 105 + "px";
		yellow_scr += 1;
		if (yellow_scr == 2) {
			yellow2.style.display = "none";
			yellow1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	yellow2.onclick = function() {
		tile12.style.width = 105 + "px";
		tile12.style.height = 105 + "px";
		yellow_scr += 1;
		if (yellow_scr == 2) {
			yellow2.style.display = "none";
			yellow1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	green1.onclick = function() {
		tile3.style.width = 105 + "px";
		tile3.style.height = 105 + "px";
		green_scr += 1;
		if (green_scr == 2) {
			green2.style.display = "none";
			green1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	green2.onclick = function() {
		tile11.style.width = 105 + "px";
		tile11.style.height = 105 + "px";
		green_scr += 1;
		if (green_scr == 2) {
			green2.style.display = "none";
			green1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	cyan1.onclick = function() {
		tile2.style.width = 105 + "px";
		tile2.style.height = 105 + "px";
		cyan_scr += 1;
		if (cyan_scr == 2) {
			cyan2.style.display = "none";
			cyan1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	cyan2.onclick = function() {
		tile15.style.width = 105 + "px";
		tile15.style.height = 105 + "px";
		cyan_scr += 1;
		if (cyan_scr == 2) {
			cyan2.style.display = "none";
			cyan1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	purple1.onclick = function() {
		tile4.style.width = 105 + "px";
		tile4.style.height = 105 + "px";
		purple_scr += 1;
		if (purple_scr == 2) {
			purple2.style.display = "none";
			purple1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	purple2.onclick = function() {
		tile13.style.width = 105 + "px";
		tile13.style.height = 105 + "px";
		purple_scr += 1;
		if (purple_scr == 2) {
			purple2.style.display = "none";
			purple1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	pink1.onclick = function() {
		tile9.style.width = 105 + "px";
		tile9.style.height = 105 + "px";
		pink_scr += 1;
		if (pink_scr == 2) {
			pink2.style.display = "none";
			pink1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
	pink2.onclick = function() {
		tile16.style.width = 105 + "px";
		tile16.style.height = 105 + "px";
		pink_scr += 1;
		if (pink_scr == 2) {
			pink2.style.display = "none";
			pink1.style.display = "none";
			score_loc3 += 1;
			if (score_loc3==8) {
				function showArt3() {
					art3.style.display = "block";
				}
				function unShowArt3() {
					art3.style.display = "none";
				}
				function exitLoc3() {
					alert('артефакт в вашем инвентаре');
					loc_main.style.display = "block";
					loc3.style.display = "none";
					MC_main.style.display = "block";
					tile_box.style.display = "none";
					isLoc3 = true;
					MC_main.style.left = 500 + "px";
					MC_main.style.top = 435 + "px";
				}
				setTimeout(showArt3, 1000);
				setTimeout(unShowArt3, 2000);
				setTimeout(exitLoc3, 3000);
			}
		}
	}
ending_div.onclick = function() {
	if (isLoc1 == true && isLoc2 == true && isLoc3 == true) {
		MC_main.style.left = 1110 + "px";
		MC_main.style.top = 400 + "px";
		ending_door.style.display = "block";
		function enterTheSecret() {
			loc_main.style.display = "none";
			ending_door.style.display = "none";
			pied1.style.display = "none";
			pied2.style.display = "none";
			pied3.style.display = "none";
			art1_door.style.display = "none";
			art2_door.style.display = "none";
			art3_door.style.display = "none";
			loc4.style.display = "block";
			coins.style.display = "block";
		}
		function say() {
			alert('Вот где хранятся деньги, которые мы вкладываем на шторы')
		}
		setTimeout(enterTheSecret, 1000);
		setTimeout(say, 2000);
	}else{
		function move_MC_in() {
			MC_main.style.left = 920 + "px";
			MC_main.style.top = 400 + "px";
		}
		function move_MC_out() {
			alert('Hе все артефакты собраны!');
			MC_main.style.left = 500 + "px";
			MC_main.style.top = 435 + "px";
		}
		setTimeout(move_MC_in, 0);
		setTimeout(move_MC_out, 1000);
	}
}
debug.onclick = function() {
	isLoc1 = true;
	isLoc2 = true;
	isLoc3 = true;
}