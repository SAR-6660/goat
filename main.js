function minus() {
	if ( out.value == 2 ) { out.value = 2; }
	else { out.value--; }
}

function plus() {
	if ( out.value == 6 ) { out.value=6; }
	else { out.value++; }
}

function vvod1(){
	switch(out.value)
	{
		case "2": 	menu.style.display = "none";
					menu_but.style.display = "none";
					vvod_but.style.display = "";
					p2.style.display = "";
		break;
		case "3": 	menu.style.display = "none";
					menu_but.style.display = "none";
					vvod_but.style.display = "";
					p3.style.display = "";
		break;
		case "4": 	menu.style.display = "none";
					menu_but.style.display = "none";
					vvod_but.style.display = "";
					p4.style.display = "";
		break;
		case "5": 	menu.style.display = "none";
					menu_but.style.display = "none";
					vvod_but.style.display = "";
					p5.style.display = "";
		break;
		case "6":	menu.style.display = "none";
					menu_but.style.display = "none";
					vvod_but.style.display = "";
					p6.style.display = "";
		break;
	}  
}

function vvod2(){
	vvod_but.style.display = "none";
	switch(out.value)
	{
		case "2": 	p2.style.display = "none";
		
					g2.style.display = "";
					buttons.style.display = "";
					name2_1.innerHTML = plr2_1.value + ":";
					name2_2.innerHTML = plr2_2.value + ":";
		break;
		case "3": 	p3.style.display = "none";
					g3.style.display = "";
					buttons.style.display = "";
					name3_1.innerHTML = plr3_1.value + ":";
					name3_2.innerHTML = plr3_2.value + ":";
					name3_3.innerHTML = plr3_3.value + ":";
		break;
		case "4": 	p4.style.display = "none";
					g4.style.display = "";
					buttons.style.display = "";
					name4_1.innerHTML = plr4_1.value + ":";
					name4_2.innerHTML = plr4_2.value + ":";
					name4_3.innerHTML = plr4_3.value + ":";
					name4_4.innerHTML = plr4_4.value + ":";
		break;
		case "5": 	p5.style.display = "none";
					g5.style.display = "";
					buttons.style.display = "";
					name5_1.innerHTML = plr5_1.value + ":";
					name5_2.innerHTML = plr5_2.value + ":";
					name5_3.innerHTML = plr5_3.value + ":";
					name5_4.innerHTML = plr5_4.value + ":";
					name5_5.innerHTML = plr5_5.value + ":";
		break;
		case "6": 	p6.style.display = "none";
					g6.style.display = "";
					buttons.style.display = "";
					name6_1.innerHTML = plr6_1.value + ":";
					name6_2.innerHTML = plr6_2.value + ":";
					name6_3.innerHTML = plr6_3.value + ":";
					name6_4.innerHTML = plr6_4.value + ":";
					name6_5.innerHTML = plr6_5.value + ":";
					name6_6.innerHTML = plr6_6.value + ":";
		break;
	}
}

let vkl2_1 = false;
let	vkl2_2 = false;

let	vkl3_1 = false;
let	vkl3_2 = false;
let	vkl3_3 = false;

let	vkl4_1 = false;
let	vkl4_2 = false;
let	vkl4_3 = false;
let	vkl4_4 = false;

let	vkl5_1 = false;
let	vkl5_2 = false;
let	vkl5_3 = false;
let	vkl5_4 = false;
let	vkl5_5 = false;
	
let	vkl6_1 = false;
let	vkl6_2 = false;
let	vkl6_3 = false;
let	vkl6_4 = false;
let	vkl6_5 = false;
let	vkl6_6 = false;
	

function game_res(){
	switch(out.value)
	{
		case "2":	if ( res2_1.value <= 12 &&  vkl2_1 == false ){
						if ( res2_1.value == 0 ){
							skobka1.innerHTML = "";
							skobka2.innerHTML = "";
							points2_1.innerHTML = 0;
							res2_1.value = 0;
						}
						else {
							skobka1.innerHTML = "(";
							skobka2.innerHTML = ")";
							points2_1.innerHTML = Number(points2_1.innerHTML) + Number(res2_1.value);
							res2_1.value = 0;
						}

					}
					else {
						skobka1.innerHTML = "";
						skobka2.innerHTML = "";
						points2_1.innerHTML = Number(points2_1.innerHTML) + Number(res2_1.value);
						res2_1.value = 0;
						vkl2_1 = true;

					}
					if ( res2_2.value <= 12 &&  vkl2_2 == false ){
						if ( res2_2.value == 0 ){
							skobka3.innerHTML = "";
							skobka4.innerHTML = "";
							points2_2.innerHTML = 0;
							res2_2.value = 0;
						}
						else {
							skobka3.innerHTML = "(";
							skobka4.innerHTML = ")";
							points2_2.innerHTML = Number(points2_2.innerHTML) + Number(res2_2.value);
							res2_2.value = 0;
						}
					}
					else {
						skobka3.innerHTML = "";
						skobka4.innerHTML = "";
						points2_2.innerHTML = Number(points2_2.innerHTML) + Number(res2_2.value);
						res2_2.value = 0;
						vkl2_2 = true;
					}
		break;
		case "3":	if ( res3_1.value <= 12 &&  vkl3_1 == false ){
						if ( res3_1.value == 0 ){
							skobka5.innerHTML = "";
							skobka6.innerHTML = "";
							points3_1.innerHTML = 0;
							res3_1.value = 0;
						}
						else {
						skobka5.innerHTML = "(";
						skobka6.innerHTML = ")";
						points3_1.innerHTML = Number(points3_1.innerHTML) + Number(res3_1.value);
						res3_1.value = 0;
						}
					}
					else {
						skobka5.innerHTML = "";
						skobka6.innerHTML = "";
						points3_1.innerHTML = Number(points3_1.innerHTML) + Number(res3_1.value);
						res3_1.value = 0;
						vkl3_1 = true;

					}
					if ( res3_2.value <= 12 &&  vkl3_2 == false ){
						if ( res3_2.value == 0 ){
							skobka7.innerHTML = "";
							skobka8.innerHTML = "";
							points3_2.innerHTML = 0;
							res3_2.value = 0;
						}
						else {
							skobka7.innerHTML = "(";
							skobka8.innerHTML = ")";
							points3_2.innerHTML = Number(points3_2.innerHTML) + Number(res3_2.value);
							res3_2.value = 0;
						}
					}
					else {
						skobka7.innerHTML = "";
						skobka8.innerHTML = "";
						points3_2.innerHTML = Number(points3_2.innerHTML) + Number(res3_2.value);
						res3_2.value = 0;
						vkl3_2 = true;
					}
					if ( res3_3.value <= 12 &&  vkl3_3 == false ){
						if ( res3_3.value == 0 ){
							skobka9.innerHTML = "";
							skobka10.innerHTML = "";
							points3_3.innerHTML = 0;
							res3_3.value = 0;
						}
						else {
							skobka9.innerHTML = "(";
							skobka10.innerHTML = ")";
							points3_3.innerHTML = Number(points3_3.innerHTML) + Number(res3_3.value);
							res3_3.value = 0;
						}
					}
					else {
						skobka9.innerHTML = "";
						skobka10.innerHTML = "";
						points3_3.innerHTML = Number(points3_3.innerHTML) + Number(res3_3.value);
						res3_3.value = 0;
						vkl3_3 = true;
					}
		break;
		case "4":	if ( res4_1.value <= 12 &&  vkl4_1 == false ){
						if ( res4_1.value == 0 ){
							skobka11.innerHTML = "";
							skobka12.innerHTML = "";
							points4_1.innerHTML = 0;
							res4_1.value = 0;
						}
						else {
							skobka11.innerHTML = "(";
							skobka12.innerHTML = ")";
							points4_1.innerHTML = Number(points4_1.innerHTML) + Number(res4_1.value);
							res4_1.value = 0;
						}
					}
					else {
						skobka11.innerHTML = "";
						skobka12.innerHTML = "";
						points4_1.innerHTML = Number(points4_1.innerHTML) + Number(res4_1.value);
						res4_1.value = 0;
						vkl4_1 = true;
					}
					if ( res4_2.value <= 12 &&  vkl4_2 == false ){
						if ( res4_2.value == 0 ){
							skobka13.innerHTML = "";
							skobka14.innerHTML = "";
							points4_2.innerHTML = 0;
							res4_2.value = 0;
						}
						else {
							skobka13.innerHTML = "(";
							skobka14.innerHTML = ")";
							points4_2.innerHTML = Number(points4_2.innerHTML) + Number(res4_2.value);
							res4_2.value = 0;
						}
					}
					else {
						skobka13.innerHTML = "";
						skobka14.innerHTML = "";
						points4_2.innerHTML = Number(points4_2.innerHTML) + Number(res4_2.value);
						res4_2.value = 0;
						vkl4_2 = true;
					}
					if ( res4_3.value <= 12 &&  vkl4_3 == false ){
						if ( res4_3.value == 0 ){
							skobka15.innerHTML = "";
							skobka16.innerHTML = "";
							points4_3.innerHTML = 0;
							res4_3.value = 0;
						}
						else {
						skobka15.innerHTML = "(";
						skobka16.innerHTML = ")";
						points4_3.innerHTML = Number(points4_3.innerHTML) + Number(res4_3.value);
						res4_3.value = 0;
						}
					}
					else {
						skobka15.innerHTML = "";
						skobka16.innerHTML = "";
						points4_3.innerHTML = Number(points4_3.innerHTML) + Number(res4_3.value);
						res4_3.value = 0;
						vkl4_3 = true;
					}
					if ( res4_4.value <= 12 &&  vkl4_4 == false ){
						if ( res4_4.value == 0 ){
							skobka17.innerHTML = "";
							skobka18.innerHTML = "";
							points4_4.innerHTML = 0;
							res4_4.value = 0;
						}
						else {
							skobka17.innerHTML = "(";
							skobka18.innerHTML = ")";
							points4_4.innerHTML = Number(points4_4.innerHTML) + Number(res4_4.value);
							res4_4.value = 0;
						}
					}
					else {
						skobka17.innerHTML = "";
						skobka18.innerHTML = "";
						points4_4.innerHTML = Number(points4_4.innerHTML) + Number(res4_4.value);
						res4_4.value = 0;
						vkl4_4 = true;
					}
		break;
		case "5":	if ( res5_1.value <= 12 &&  vkl5_1 == false ){
						if ( res5_1.value == 0 ){
							skobka19.innerHTML = "";
							skobka20.innerHTML = "";
							points5_1.innerHTML = 0;
							res5_1.value = 0;
						}
						else {
							skobka19.innerHTML = "(";
							skobka20.innerHTML = ")";
							points5_1.innerHTML = Number(points5_1.innerHTML) + Number(res5_1.value);
							res5_1.value = 0;
						}
					}
					else {
						skobka19.innerHTML = "";
						skobka20.innerHTML = "";
						points5_1.innerHTML = Number(points5_1.innerHTML) + Number(res5_1.value);
						res5_1.value = 0;
						vkl5_1 = true;
					}
					if ( res5_2.value <= 12 &&  vkl5_2 == false ){
						if ( res5_2.value == 0 ){
							skobka21.innerHTML = "";
							skobka22.innerHTML = "";
							points5_2.innerHTML = 0;
							res5_2.value = 0;
						}
						else {
							skobka21.innerHTML = "(";
							skobka22.innerHTML = ")";
							points5_2.innerHTML = Number(points5_2.innerHTML) + Number(res5_2.value);
							res5_2.value = 0;
						}
					}
					else {
						skobka21.innerHTML = "";
						skobka22.innerHTML = "";
						points5_2.innerHTML = Number(points5_2.innerHTML) + Number(res5_2.value);
						res5_2.value = 0;
						vkl5_2 = true;
					}
					if ( res5_3.value <= 12 &&  vkl5_3 == false ){
						if ( res5_3.value == 0 ){
							skobka23.innerHTML = "";
							skobka24.innerHTML = "";
							points5_3.innerHTML = 0;
							res5_3.value = 0;
						}
						else {
							skobka23.innerHTML = "(";
							skobka24.innerHTML = ")";
							points5_3.innerHTML = Number(points5_3.innerHTML) + Number(res5_3.value);
							res5_3.value = 0;
						}
					}
					else {
						skobka23.innerHTML = "";
						skobka24.innerHTML = "";
						points5_3.innerHTML = Number(points5_3.innerHTML) + Number(res5_3.value);
						res5_3.value = 0;
						vkl5_3 = true;
					}
					if ( res5_4.value <= 12 &&  vkl5_4 == false ){
						if ( res5_4.value == 0 ){
							skobka25.innerHTML = "";
							skobka26.innerHTML = "";
							points5_4.innerHTML = 0;
							res5_4.value = 0;
						}
						else {
							skobka25.innerHTML = "(";
							skobka26.innerHTML = ")";
							points5_4.innerHTML = Number(points5_4.innerHTML) + Number(res5_4.value);
							res5_4.value = 0;
						}
					}
					else {
						skobka25.innerHTML = "";
						skobka26.innerHTML = "";
						points5_4.innerHTML = Number(points5_4.innerHTML) + Number(res5_4.value);
						res5_4.value = 0;
						vkl5_4 = true;
					}
					if ( res5_5.value <= 12 &&  vkl5_5 == false ){
						if ( res5_5.value == 0 ){
							skobka27.innerHTML = "";
							skobka28.innerHTML = "";
							points5_5.innerHTML = 0;
							res5_5.value = 0;
						}
						else {
							skobka27.innerHTML = "(";
							skobka28.innerHTML = ")";
							points5_5.innerHTML = Number(points5_5.innerHTML) + Number(res5_5.value);
							res5_5.value = 0;
						}
					}
					else {
						skobka27.innerHTML = "";
						skobka28.innerHTML = "";
						points5_5.innerHTML = Number(points5_5.innerHTML) + Number(res5_5.value);
						res5_5.value = 0;
						vkl5_5 = true;
					}
		break;
		case "6":	if ( res6_1.value <= 12 &&  vkl6_1 == false ){
						if ( res6_1.value == 0 ){
							skobka29.innerHTML = "";
							skobka30.innerHTML = "";
							points6_1.innerHTML = 0;
							res6_1.value = 0;
						}
						else {
							skobka29.innerHTML = "(";
							skobka30.innerHTML = ")";
							points6_1.innerHTML = Number(points6_1.innerHTML) + Number(res6_1.value);
							res6_1.value = 0;
						}
					}
					else {
						skobka29.innerHTML = "";
						skobka30.innerHTML = "";
						points6_1.innerHTML = Number(points6_1.innerHTML) + Number(res6_1.value);
						res6_1.value = 0;
						vkl6_1 = true;
					}
					if ( res6_2.value <= 12 &&  vkl6_2 == false ){
						if ( res6_2.value == 0 ){
							skobka31.innerHTML = "";
							skobka32.innerHTML = "";
							points6_2.innerHTML = 0;
							res6_2.value = 0;
						}
						else {
							skobka31.innerHTML = "(";
							skobka32.innerHTML = ")";
							points6_2.innerHTML = Number(points6_2.innerHTML) + Number(res6_2.value);
							res6_2.value = 0;
						}
					}
					else {
						skobka31.innerHTML = "";
						skobka32.innerHTML = "";
						points6_2.innerHTML = Number(points6_2.innerHTML) + Number(res6_2.value);
						res6_2.value = 0;
						vkl6_2 = true;
					}
					if ( res6_3.value <= 12 &&  vkl6_3 == false ){
						if ( res6_3.value == 0 ){
							skobka33.innerHTML = "";
							skobka34.innerHTML = "";
							points6_3.innerHTML = 0;
							res6_3.value = 0;
						}
						else{
							skobka33.innerHTML = "(";
							skobka34.innerHTML = ")";
							points6_3.innerHTML = Number(points6_3.innerHTML) + Number(res6_3.value);
							res6_3.value = 0;
						}
					}
					else {
						skobka33.innerHTML = "";
						skobka34.innerHTML = "";
						points6_3.innerHTML = Number(points6_3.innerHTML) + Number(res6_3.value);
						res6_3.value = 0;
						vkl6_3 = true;
					}
					if ( res6_4.value <= 12 &&  vkl6_4 == false ){
						if ( res6_4.value == 0 ){
							skobka35.innerHTML = "";
							skobka36.innerHTML = "";
							points6_4.innerHTML = 0;
							res6_4.value = 0;
						}
						else {
							skobka35.innerHTML = "(";
							skobka36.innerHTML = ")";
							points6_4.innerHTML = Number(points6_4.innerHTML) + Number(res6_4.value);
							res6_4.value = 0;
						}
					}
					else {
						skobka35.innerHTML = "";
						skobka36.innerHTML = "";
						points6_4.innerHTML = Number(points6_4.innerHTML) + Number(res6_4.value);
						res6_4.value = 0;
						vkl6_4 = true;
					}
					if ( res6_5.value <= 12 &&  vkl6_5 == false ){
						if ( res6_5.value == 0 ){
							skobka37.innerHTML = "";
							skobka38.innerHTML = "";
							points6_5.innerHTML = 0;
							res6_5.value = 0;
						}
						else {
							skobka37.innerHTML = "(";
							skobka38.innerHTML = ")";
							points6_5.innerHTML = Number(points6_5.innerHTML) + Number(res6_5.value);
							res6_5.value = 0;
						}
					}
					else {
						skobka37.innerHTML = "";
						skobka38.innerHTML = "";
						points6_5.innerHTML = Number(points6_5.innerHTML) + Number(res6_5.value);
						res6_5.value = 0;
						vkl6_5 = true;
					}
					if ( res6_6.value <= 12 &&  vkl6_6 == false ){
						if ( res6_6.value == 0 ){
							skobka39.innerHTML = "";
							skobka40.innerHTML = "";
							points6_6.innerHTML = 0;
							res6_6.value = 0;
						}
						else {
							skobka39.innerHTML = "(";
							skobka40.innerHTML = ")";
							points6_6.innerHTML = Number(points6_6.innerHTML) + Number(res6_6.value);
							res6_6.value = 0;
						}
					}
					else {
						skobka39.innerHTML = "";
						skobka40.innerHTML = "";
						points6_6.innerHTML = Number(points6_6.innerHTML) + Number(res6_6.value);
						res6_6.value = 0;
						vkl6_6 = true;
					}
		break;
	}
}

function reset(){
	switch(out.value){
		case "2": 	points2_1.innerHTML = 0;
					points2_2.innerHTML = 0;
					skobka1.innerHTML = "";
					skobka2.innerHTML = "";
					skobka3.innerHTML = "";
					skobka4.innerHTML = "";
					vkl2_1 = false;
					vkl2_2 = false;
		break;
		case "3": 	points3_1.innerHTML = 0;
					points3_2.innerHTML = 0;
					points3_3.innerHTML = 0;
					skobka5.innerHTML = "";
					skobka6.innerHTML = "";
					skobka7.innerHTML = "";
					skobka8.innerHTML = "";
					skobka9.innerHTML = "";
					skobka10.innerHTML = "";
					vkl3_1 = false;
					vkl3_2 = false;
					vkl3_3 = false;
		break;
		case "4": 	points4_1.innerHTML = 0;
					points4_2.innerHTML = 0;
					points4_3.innerHTML = 0;
					points4_4.innerHTML = 0;
					skobka11.innerHTML = "";
					skobka12.innerHTML = "";
					skobka13.innerHTML = "";
					skobka14.innerHTML = "";
					skobka15.innerHTML = "";
					skobka16.innerHTML = "";
					skobka17.innerHTML = "";
					skobka18.innerHTML = "";
					vkl4_1 = false;
					vkl4_2 = false;
					vkl4_3 = false;
					vkl4_4 = false;
		break;
		case "5": 	points5_1.innerHTML = 0;
					points5_2.innerHTML = 0;
					points5_3.innerHTML = 0;
					points5_4.innerHTML = 0;
					points5_5.innerHTML = 0;
					skobka19.innerHTML = "";
					skobka20.innerHTML = "";
					skobka21.innerHTML = "";
					skobka22.innerHTML = "";
					skobka23.innerHTML = "";
					skobka24.innerHTML = "";
					skobka25.innerHTML = "";
					skobka26.innerHTML = "";
					skobka27.innerHTML = "";
					skobka28.innerHTML = "";
					vkl5_1 = false;
					vkl5_2 = false;
					vkl5_3 = false;
					vkl5_4 = false;
					vkl5_5 = false;
		break;
		case "6": 	points6_1.innerHTML = 0;
					points6_2.innerHTML = 0;
					points6_3.innerHTML = 0;
					points6_4.innerHTML = 0;
					points6_5.innerHTML = 0;
					points6_6.innerHTML = 0;
					skobka29.innerHTML = "";
					skobka30.innerHTML = "";
					skobka31.innerHTML = "";
					skobka32.innerHTML = "";
					skobka33.innerHTML = "";
					skobka34.innerHTML = "";
					skobka35.innerHTML = "";
					skobka36.innerHTML = "";
					skobka37.innerHTML = "";
					skobka38.innerHTML = "";
					skobka39.innerHTML = "";
					skobka40.innerHTML = "";
					vkl6_1 = false;
					vkl6_2 = false;
					vkl6_3 = false;
					vkl6_4 = false;
					vkl6_5 = false;
					vkl6_6 = false;
		break;
	}
}

function start(){
	g2.style.display = "none";
	g3.style.display = "none";
	g4.style.display = "none";
	g5.style.display = "none";
	g6.style.display = "none";
	buttons.style.display = "none";
	menu.style.display = "";
	menu_but.style.display = "";
	out.value = 2;
}
