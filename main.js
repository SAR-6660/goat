function minus() {
	if ( players_count.value == 2 ) { players_count.value = 2; }
	else { players_count.value--; }
}

function plus() {
	if ( players_count.value == 4 ) { players_count.value=4; }
	else { players_count.value++; }
}

function button1(){
	menu.style.display = "none";
	players.style.display = "";
	player1.style.display = "";
	player2.style.display = "";
	if ( players_count.value == 3 ) { player3.style.display = ""; }
	if ( players_count.value == 4 ) { player3.style.display = ""; player4.style.display = ""; }
}

function button2(){
	players.style.display = "none";
	player1.style.display = "none";
	player2.style.display = "none";
	player3.style.display = "none";
	player4.style.display = "none";
	game.style.display = "";
	game_player1.style.display = "";
	game_player2.style.display = "";
	name1.innerHTML = plr1.value + ":";
	name2.innerHTML = plr2.value + ":";
	switch ( players_count.value )
	{
		case "3": game_player3.style.display = "";
		          name3.innerHTML = plr3.value + ":";
		break;
		case "4": game_player3.style.display = "";
				  game_player4.style.display = "";
				  name3.innerHTML = plr3.value + ":";
				  name4.innerHTML = plr4.value + ":";
		break;
	}
}

let vkl1 = false;
let	vkl2 = false;
let	vkl3 = false;
let	vkl4 = false;

function game_res(){
	if ( res1.value <= 12 &&  vkl1 == false ){
		if ( res1.value == 0 ){
			skobka1_1.innerHTML = "";
			skobka1_2.innerHTML = "";
			points1.innerHTML = 0;
			res1.value = 0;
		}
		else {
			skobka1_1.innerHTML = "(";
			skobka1_2.innerHTML = ")";
			points1.innerHTML = Number(points1.innerHTML) + Number(res1.value);
			res1.value = 0;
		}
	}
	else {
		skobka1_1.innerHTML = "";
		skobka1_2.innerHTML = "";
		points1.innerHTML = Number(points1.innerHTML) + Number(res1.value);
		res1.value = 0;
		vkl1 = true;

	}
	if ( res2.value <= 12 &&  vkl2 == false ){
		if ( res2.value == 0 ){
			skobka2_1.innerHTML = "";
			skobka2_2.innerHTML = "";
			points2.innerHTML = 0;
			res2.value = 0;
		}
		else {
			skobka2_1.innerHTML = "(";
			skobka2_2.innerHTML = ")";
			points2.innerHTML = Number(points2.innerHTML) + Number(res2.value);
			res2.value = 0;
		}
	}
	else {
		skobka2_1.innerHTML = "";
		skobka2_2.innerHTML = "";
		points2.innerHTML = Number(points2.innerHTML) + Number(res2.value);
		res2.value = 0;
		vkl2 = true;
	}

	switch( players_count.value )
	{
		case "3": if ( res3.value <= 12 &&  vkl3 == false ){
						if ( res3.value == 0 ){
							skobka3_1.innerHTML = "";
							skobka3_2.innerHTML = "";
							points3.innerHTML = 0;
							res3.value = 0;
						}
						else {
							skobka3_1.innerHTML = "(";
							skobka3_2.innerHTML = ")";
							points3.innerHTML = Number(points3.innerHTML) + Number(res3.value);
							res3.value = 0;
						}
					}
					else {
						skobka3_1.innerHTML = "";
						skobka3_2.innerHTML = "";
						points3.innerHTML = Number(points3.innerHTML) + Number(res3.value);
						res3.value = 0;
						vkl3 = true;
					}
		break;
		case "4": if ( res3.value <= 12 &&  vkl3 == false ){
						if ( res3.value == 0 ){
							skobka3_1.innerHTML = "";
							skobka3_2.innerHTML = "";
							points3.innerHTML = 0;
							res3.value = 0;
						}
						else {
							skobka3_1.innerHTML = "(";
							skobka3_2.innerHTML = ")";
							points3.innerHTML = Number(points3.innerHTML) + Number(res3.value);
							res3.value = 0;
						}
					}
					else {
						skobka3_1.innerHTML = "";
						skobka3_2.innerHTML = "";
						points3.innerHTML = Number(points3.innerHTML) + Number(res3.value);
						res3.value = 0;
						vkl3 = true;
					}
					if ( res4.value <= 12 &&  vkl4 == false ){
						if ( res4.value == 0 ){
							skobka4_1.innerHTML = "";
							skobka4_2.innerHTML = "";
							points4.innerHTML = 0;
							res4.value = 0;
						}
						else {
							skobka4_1.innerHTML = "(";
							skobka4_2.innerHTML = ")";
							points4.innerHTML = Number(points4.innerHTML) + Number(res4.value);
							res4.value = 0;
						}
					}
					else {
						skobka4_1.innerHTML = "";
						skobka4_2.innerHTML = "";
						points4.innerHTML = Number(points4.innerHTML) + Number(res4.value);
						res4.value = 0;
						vkl4 = true;
					}
		break;
	}
	game_over();
}

function reset(){
	points1.innerHTML = 0;
	points2.innerHTML = 0;
	points3.innerHTML = 0;
	points4.innerHTML = 0;
	points_game_over_1.innerHTML = 0;
	points_game_over_2.innerHTML = 0;
	points_game_over_3.innerHTML = 0;
	points_game_over_4.innerHTML = 0;
	skobka1_1.innerHTML = "";
	skobka1_2.innerHTML = "";
	skobka2_1.innerHTML = "";
	skobka2_2.innerHTML = "";
	skobka3_1.innerHTML = "";
	skobka3_2.innerHTML = "";
	skobka4_1.innerHTML = "";
	skobka4_2.innerHTML = "";
	vkl1 = false;
	vkl2 = false;
	vkl3 = false;
	vkl4 = false;
}

function start(){
	reset();
	game.style.display = "none";
	game_player1.style.display = "none";
	game_player2.style.display = "none";
	game_player3.style.display = "none";
	game_player4.style.display = "none";
	menu.style.display = "";
	players_count.value = 2;
	game_ov.style.display = "none"
	ov1.style.display = "none"
	ov2.style.display = "none"
	ov3.style.display = "none"
	ov4.style.display = "none"
}

function game_over(){
	if ( points1.innerHTML >= 101 || points2.innerHTML >= 101 || points3.innerHTML >= 101 || points4.innerHTML >= 101 )
	{
		new Audio('audio.mp3').play();
	}
	if ( points1.innerHTML >= 101 )
	{
		game.style.display = "none";
		game_player1.style.display = "none";
		game_player2.style.display = "none";
		game_player3.style.display = "none";
		game_player4.style.display = "none";
		game_ov.style.display = ""
		ov1.style.display = ""
		name_game_over_1.innerHTML = plr1.value + ":";
		points_game_over_1.innerHTML = Number(points1.innerHTML) + Number(res1.value);
	}
	if ( points2.innerHTML >= 101 )
	{
		game.style.display = "none";
		game_player1.style.display = "none";
		game_player2.style.display = "none";
		game_player3.style.display = "none";
		game_player4.style.display = "none";
		game_ov.style.display = ""
		ov2.style.display = ""
		name_game_over_2.innerHTML = plr2.value + ":";
		points_game_over_2.innerHTML = Number(points2.innerHTML) + Number(res2.value);
	}
	if ( points3.innerHTML >= 101 )
	{
		game.style.display = "none";
		game_player1.style.display = "none";
		game_player2.style.display = "none";
		game_player3.style.display = "none";
		game_player4.style.display = "none";
		game_ov.style.display = ""
		ov3.style.display = ""
		name_game_over_3.innerHTML = plr3.value + ":";
		points_game_over_3.innerHTML = Number(points3.innerHTML) + Number(res3.value);
	}
	if ( points4.innerHTML >= 101 )
	{
		game.style.display = "none";
		game_player1.style.display = "none";
		game_player2.style.display = "none";
		game_player3.style.display = "none";
		game_player4.style.display = "none";
		game_ov.style.display = ""
		ov4.style.display = ""
		name_game_over_4.innerHTML = plr4.value + ":";
		points_game_over_4.innerHTML = Number(points4.innerHTML) + Number(res4.value);
	}
}