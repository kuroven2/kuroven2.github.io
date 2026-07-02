/*
break eternity functions:
abs, neg, round, floor, ceil, trunc, add, sub, mul, div, recip, mod, cmp, cmpabs, 
max, min, maxabs, minabs, log, log10, ln, pow, root, factorial, gamma, exp, sqrt, 
tetrate, iteratedexp, iteratedlog, layeradd10, layeradd, slog, ssqrt, lambertw, 
linear_sroot, pentate, penta_log, linear_penta_root


x = new Decimal(123.4567);
y = new Decimal("123456.7e-3");
z = new Decimal(x);
x.equals(y) && y.equals(z) && x.equals(z); // true

*/
// don't question my way of coding pls
const array2 = ["Something is preventing you from using power...", "You hear a voice...", "???: 'Why do you try this again when you DEEPLY know in your soul it won't work?'", "You: 'Who are you?? And why are you preventing me from using the power button in the first place??'", "???: 'Blame it to my brother, i.'", "You: 'Who is i?'", "???: 'Well... If you raise your counters to 1.001 with a calculator you'll probably figure out who they are.'", "You: 'There's no such thing as a calculator...'", "???: '...'", "???: 'Well, the superior being who's watching us knows what to do.'", "You: 'What?'"] //
, inf = new Decimal('1.8e308')
, zero = new Decimal(0)
, one = new Decimal(1)

let bgst = 0
, tgl = -1
, counter = zero // what should I name this other than "counter"?
, prestigecounter = zero // same here
, powercounter = zero // 
, cgen0 = zero // counter/s
, cost1 = one // first price of upgrade 1
, cost2 = new Decimal(10) // first price of upgrade 2
, cost3 = new Decimal(200) // first price of upgrade 3 (unused)
, cost8 = one // first price of upgrade 8
, tps = 20 // update rate. default is 20 (which is 50ms. I already added a slider but the problem is that setInterval only reads the interval once, which leads to inaccurate tick calcs. the slider won't work until I find a solution to this)
, upg2b = one // upgrade 2 buff (add buff)
, upg8b = new Decimal(1.01) // upgrade 8 buff (multi buff)
, unlockedmulti = false // basically tells if multiplying is unlocked or not
, unlockedpower = false // same thing here
, infinities = zero // COUNT, not counter
, ach1s = false //
, ach2s = false //
, secretach1s = false //
, array = [20, 30, 60, 120, 240] // this is supposed to be used for the update rate slider
, firstinfreached = false // 
, glowtoggle = false // glowing text
, unlockedprestigetab = false // tells if prestige tab is unlocked or not
, unlockedcountergens = false // read above
, cgen1 = zero // 1st counter generator
, cgen2 = zero // 2nd
, cgen3 = zero // 3rd
, cgen4 = zero // 4th
, cgen5 = zero // 5th
, cgen6 = zero // 6th
, cgen7 = zero // 7th
, cgen8 = zero // 8th
, cgen9 = zero // 9th
, cgen1cost = new Decimal(20) // 1st counter generator price
, cgen2cost = new Decimal(200) // 2nd
, cgen3cost = new Decimal(2e4) // 3rd
, cgen4cost = new Decimal(2e7) // 4th
, cgen5cost = new Decimal(2e14) // 5th
, cgen6cost = new Decimal(2e21) // 6th
, cgen7cost = new Decimal(2e31) // 7th
, cgen8cost = new Decimal(2e60) // 8th
, cgen9cost = new Decimal(2e120) // 9th
, cgen1multi = one // 1st counter generator
, cgen2multi = one // 2nd
, cgen3multi = one // 3rd
, cgen4multi = one // 4th
, cgen5multi = one // 5th
, cgen6multi = one // 6th
, cgen7multi = one // 7th
, cgen8multi = one // 8th
, cgen9multi = one // 9th
, autoprestigetoggle = false
, unlockedautoprestige = false
, llv = new Audio('audio/Llv-Chnl-n.mp3')
, msc = 0

alert("v0.1.0a update:\
  Added music (find it at the bottom of the page). Fixed power prestige.\
  ")
/*
console.log("DON'T PASTE OR TYPE CODE THAT YOU'RE NOT SURE OF! \
IF SOMEONE TOLD YOU TO PUT CODE HERE, DON'T TRUST THEM, THEY'RE LYING. \
IT MAY HARM YOUR DEVICE OR DO OTHER DANGEROUS STUFF! \
OTHERWISE DO WHATEVER YOU WANT.") 
*/

// add button
function add() {
 ach1s = true
 document.getElementById("ach1").textContent = "First counter (nice you did it)" 
 counter = counter.add(upg2b)
}

// multi button
function multi() {
 if (unlockedmulti == true) {
  counter = counter.mul(upg8b)
 }
}

// power button
function power() {
 if (unlockedpower == true) {
 if (counter.greaterThan(0)) {
  counter = counter.pow(1.001)
 }
 else {
 // that one conversation u have when u try power with negative counters
 tgl = tgl + 1
 if (tgl == 12) {
 tgl = 0
 }
 document.getElementById("imgn").textContent = array2[tgl]
  }
 }
}


function music() {
  msc = Number(document.getElementById("musicselect").options[document.getElementById("musicselect").selectedIndex].value)
  if (msc === 0) llv.pause();
  if (msc === 1) {llv.play(); llv.currentTime = 0}
}

setInterval(function musicloop() {
  // yes I know llv.loop = true exists but I want the music to return to a certain point instead of restarting
  if (msc === 1 && llv.currentTime >= 207.32) llv.currentTime = 15.2;

},1e3/30)


// that one button that changes the background color
function bgcbtn() {
 let bgcv = Number(document.getElementById("bgcselect").options[document.getElementById("bgcselect").selectedIndex].value)
 , bg = document.getElementById("bg")
 , bgbtn = document.getElementById("bgbtn")
 
 if (bgcv == 13) {
 bg.style = "background: #ddd"
 if (glowtoggle == false) {
 // def not copy pasted from somewhere else
 $('a').css('color', '#000');
  }
 else {
 $('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 12) {
 bg.style = "background: #000"
 if (glowtoggle == false) {
 $('a').css('a', '#ddd');
  }
 else {
 $('a').css('a', '#ddd;', 'text-shadow', '0 0 10px #ddd');
  }
 }
 if (bgcv == 11) {
 bg.style = "background: linear-gradient(#000058, #000027)"
 if (glowtoggle == false) {
 //$('a').css('color', '#ddd');
  }
 else {
 //$('a').css('color', '#ddd;', 'text-shadow', '0 0 10px #ddd');
  }
 }
 if (bgcv == 10) {
 bg.style = "background: linear-gradient(#ff6731, #aa2400)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 9) {
 bg.style = "background: linear-gradient(#12ffaa, #00aa58)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 8) {
 bg.style = "background: linear-gradient(#4ac2ff, #3265aa)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 7) {
 bg.style = "background: linear-gradient(#97ff00, #42aa00)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 6) {
 bg.style = "background: linear-gradient(#8903cc, #510086)"
 if (glowtoggle == false) {
 $("a").css('color', '#000');
  }
 else {
 $("a").css("color", "#000;", "text-shadow", "0 0 10px #656565");
  }
 }
 if (bgcv == 5) {
 bg.style = "background: linear-gradient(#32ffff, #00aaaa)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 4) {
 bg.style = "background: linear-gradient(#ff7cf6, #aa00aa)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 3) {
 bg.style = "background: linear-gradient(#ddda6d, #aaaa00)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 2) {
 bg.style = "background: linear-gradient(#0032ff, #0000aa)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 1) {
 bg.style = "background: linear-gradient(#59d760, #00aa00)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
 if (bgcv == 0) {
 bg.style = "background: linear-gradient(#ff0000, #aa0000)"
 if (glowtoggle == false) {
 //$('a').css('color', '#000');
  }
 else {
 //$('a').css('color', '#000;', 'text-shadow', '0 0 10px #656565');
  }
 }
}

// glowing text
function glow() {
if (glowtoggle == false) {
 glowtoggle = true
 document.getElementById("glow").textContent = "Text glow: on"
 if (bgst == 12 || bgst == 13) {
 $('a').css('color', '#000;', 'text-shadow', '0 0 10px #ddd');
 }
 else {
 $('a').css('color', '#000;', 'text-shadow', '0 0 10px #000');
  }
 }
 else {
 document.getElementById("glow").textContent = "Text glow: off"
 glowtoggle = false
 if (bgst == 12 || bgst == 13) {
 $('a').css('color', '#ddd');
 }
 else {
 $('a').css('color', '#000');
  }
 }
}

// prestige
function prestige() {
 if (counter.equals(10) || counter.greaterThan(10)) {
  if (counter.lessThan(inf) || firstinfreached == true) {
  prestigecounter = prestigecounter.add(counter.divide(10))
  counter = counter.sub(counter)
  ach2s = true
  document.getElementById("ach2").textContent = "Every incremetnal has this (nice you did it)"
  if (unlockedprestigetab == false) {
  unlockedprestigetab = true
  document.getElementById("prestigetab").classList = "show"
   }
   }
  }
 }

// power prestige
function powerprestige() {
  if (counter.greaterThan(inf) || counter.equals(inf)) {
    powercounter = powercounter.add(((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2))
    infinities = infinities.add(((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2))
    counter = zero
    prestigecounter = zero
    firstinfreached = true
    cgen0 = zero
    upg2b = one
    unlockedmulti = false
    unlockedcountergens = false
    unlockedprestigetab = false
    document.getElementById("multi").classList = "fullhide"
    document.getElementById("multitab").classList = "fullhide"
    document.getElementById("powertab").classList = ""
    document.getElementById("prestigetab").classList = "fullhide"
    document.getElementById("cgentab").classList = "fullhide"
    document.getElementById("cgenunlockbtn").classList = ""
    document.getElementById("b").textContent = "+1 counter/s (costs 1 prestige counter)"
    document.getElementById("c").textContent = "Buff add button and counter/s by 1 (costs 10 prestige counters)"
    document.getElementById("a2").classList = ""
    document.getElementById("a2").textContent = "Unlock MULTIPLYING (costs 50000000000 prestige counters)"
    cgen1 = zero
    cgen2 = zero
    cgen3 = zero
    cgen4 = zero
    cgen5 = zero
    cgen6 = zero
    cgen7 = zero
    cgen8 = zero
    cgen9 = zero
    cgen1cost = new Decimal(20)
    cgen2cost = new Decimal(200)
    cgen3cost = new Decimal(2e4)
    cgen4cost = new Decimal(2e7)
    cgen5cost = new Decimal(2e14)
    cgen6cost = new Decimal(2e21)
    cgen7cost = new Decimal(2e31)
    cgen8cost = new Decimal(2e60)
    cgen9cost = new Decimal(2e120)
    document.getElementById("gen1btn").textContent = "Add 1 first generator (costs " + cgen1cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen2btn").textContent = "Add 1 second generator (costs " + cgen2cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen3btn").textContent = "Add 1 third generator (costs " + cgen3cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen4btn").textContent = "Add 1 fourth generator (costs " + cgen4cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen5btn").textContent = "Add 1 fifth generator (costs " + cgen5cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen6btn").textContent = "Add 1 sixth generator (costs " + cgen6cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen7btn").textContent = "Add 1 seventh generator (costs " + cgen7cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen8btn").textContent = "Add 1 eighth generator (costs " + cgen8cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    document.getElementById("gen9btn").textContent = "Add 1 ninth generator (costs " + cgen9cost.toStringWithDecimalPlaces(2) + " prestige counters)"
    cost1 = one
    cost2 = new Decimal(10)
    cost3 = new Decimal(200)
    cost8 = one
  }
}

// upgrades

function upgrade1() {
 if (prestigecounter.equals(cost1) || prestigecounter.greaterThan(cost1)) {
  prestigecounter = prestigecounter.sub(cost1)
  cost1 = cost1.mul(2)
  cgen0 = cgen0.add(1)
  if (cost1.greaterThan('1e1000')) {
  document.getElementById("b").textContent = "+1 counter/s (costs "  + cost1.toStringWithDecimalPlaces(3) + " prestige counters"
  }
  else {
  document.getElementById("b").textContent = "+1 counter/s (costs "  + cost1.toStringWithDecimalPlaces(2) + " prestige counters"
  }
 }
}

function upgrade2() {
 if (prestigecounter.equals(cost2) || prestigecounter.greaterThan(cost2)) {
  prestigecounter = prestigecounter.sub(cost2)
  cost2 = cost2.mul(1.5)
  upg2b = upg2b.add(1)
  if (cost2.greaterThan('1e1000')) {
  document.getElementById("c").textContent = "Buff add button and counter/s by 1 (costs "  + cost2.toStringWithDecimalPlaces(3) + " prestige counters"
  }
  else {
  document.getElementById("c").textContent = "Buff add button and counter/s by 1 (costs "  + cost2.toStringWithDecimalPlaces(2) + " prestige counters"
  }
  document.getElementById("add").textContent = "+" + upg2b
 }
}

function upgrade3() {
// unused
}

function upgrade8() {
 if (powercounter.greaterThan(cost8) || powercounter.equals(cost8)) {
 powercounter = powercounter.sub(cost8)
 upg8b = upg8b.mul(1.08)
 if (cost8.lessThan(5)) {
 cost8 = cost8.add(1)
 }
 else {
 cost8 = cost8.mul(2)
 }
 if (cost8.greaterThan('1e1000')) {
 document.getElementById("t").textContent = "Multiply multiplying button by 1.08 (costs " + cost8.toStringWithDecimalPlaces(3) + " power counters)"
 }
 else {
 document.getElementById("t").textContent = "Multiply multiplying button by 1.08 (costs " + cost8.toStringWithDecimalPlaces(2) + " power counters)"
  }
 document.getElementById("multi").textContent = "*" + upg8b
 }
}

setInterval(function autoprestige() {
if (autoprestigetoggle === true) {
prestige()
 }
}, 1e3)

function toggleautoprestige() {
  if (autoprestigetoggle === true) {
    autoprestigetoggle = false
    document.getElementById("toggleautoprestige").textContent = "Auto prestige: OFF"
  }

  else {
    autoprestigetoggle = true
    document.getElementById("toggleautoprestige").textContent = "Auto prestige: ON"
  }
}

// upgrades end here

// unlocks (in order of first appearance)

// def not taken from antimatter dimensions (counter generators)
function unlockcountergens() {
 if (unlockedcountergens == false) {
 if (prestigecounter.greaterThan(100) || prestigecounter.equals(100)) {
  prestigecounter = prestigecounter.sub(100)
  unlockedcountergens = true
  document.getElementById("cgentab").classList = "show"
  document.getElementById("cgenunlockbtn").classList = "fullhide"
  document.getElementById("multitab").classList = "show"
  document.getElementById("ach3").textContent = "Definitely original feature and not taken from another game (nice you did it)"
  }
 }
}

function unlockautoprestige() {
  if (unlockedautoprestige === false && (powercounter.greaterThan(1) || powercounter.equals(1))) {
    powercounter = powercounter.sub(1)
    autoprestigetoggle = true
    unlockedautoprestige = true
    document.getElementById("autoprestige").classList = "fullhide"
    document.getElementById("autoprestigeresetrate").classList = ""
    document.getElementById("toggleautoprestige").classList = ""
  }
}

// multiplying unlock
function unlockmulti() {
 if (unlockedmulti == false) {
 if (prestigecounter.greaterThan(5e10) || prestigecounter.equals(5e10)) {
 prestigecounter = prestigecounter.sub(5e10)
 unlockedmulti = true
 document.getElementById("a2").textContent = "Multiplying unlocked"
 document.getElementById("multi").classList = ""
  }
 }
}

// unlocks end here

// counter generators
function gen1purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen1cost) || prestigecounter.greaterThan(cgen1cost)) {
   prestigecounter = prestigecounter.sub(cgen1cost);
   cgen1 = cgen1.add(1)
   cgen1cost = cgen1cost.mul(cgen1cost.log(9))
   cgen1multi = cgen1multi.mul(2)
   document.getElementById("gen1btn").textContent = "Add 1 first generator (costs " + cgen1cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen2purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen2cost) || prestigecounter.greaterThan(cgen2cost)) {
   prestigecounter = prestigecounter.sub(cgen2cost);
   cgen2 = cgen2.add(1)
   cgen2cost = cgen2cost.mul(cgen2cost.log(9))
   cgen2multi = cgen2multi.mul(2)
   document.getElementById("gen2btn").textContent = "Add 1 second generator (costs " + cgen2cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen3purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen3cost) || prestigecounter.greaterThan(cgen3cost)) {
   prestigecounter = prestigecounter.sub(cgen3cost);
   cgen3 = cgen3.add(1)
   cgen3cost = cgen3cost.mul(cgen3cost.log(9))
   cgen3multi = cgen3multi.mul(2)
   document.getElementById("gen3btn").textContent = "Add 1 third generator (costs " + cgen3cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen4purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen4cost) || prestigecounter.greaterThan(cgen4cost)) {
   prestigecounter = prestigecounter.sub(cgen4cost);
   cgen4 = cgen4.add(1)
   cgen4cost = cgen4cost.mul(cgen4cost.log(9))
   cgen4multi = cgen4multi.mul(2)
   document.getElementById("gen4btn").textContent = "Add 1 fourth generator (costs " + cgen4cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen5purchase() {
 if (prestigecounter.equals(cgen5cost) || prestigecounter.greaterThan(cgen5cost)) {
  prestigecounter = prestigecounter.sub(cgen5cost);
  cgen5 = cgen5.add(1)
  cgen5cost = cgen5cost.mul(cgen5cost.log(9))
  cgen5multi = cgen5multi.mul(2)
  document.getElementById("gen5btn").textContent = "Add 1 fifth generator (costs " + cgen5cost.toStringWithDecimalPlaces(2) + " prestige counters)"
 }
}

function gen6purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen6cost) || prestigecounter.greaterThan(cgen6cost)) {
   prestigecounter = prestigecounter.sub(cgen6cost);
   cgen6 = cgen6.add(1)
   cgen6cost = cgen6cost.mul(cgen6cost.log(9))
   cgen6multi = cgen6multi.mul(2)
   document.getElementById("gen6btn").textContent = "Add 1 sixth generator (costs " + cgen6cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen7purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen7cost) || prestigecounter.greaterThan(cgen7cost)) {
   prestigecounter = prestigecounter.sub(cgen7cost);
   cgen7 = cgen7.add(1)
   cgen7cost = cgen7cost.mul(cgen7cost.log(9))
   cgen7multi = cgen7multi.mul(2)
   document.getElementById("gen7btn").textContent = "Add 1 seventh generator (costs " + cgen7cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen8purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen8cost) || prestigecounter.greaterThan(cgen8cost)) {
   prestigecounter = prestigecounter.sub(cgen8cost);
   cgen8 = cgen8.add(1)
   cgen8cost = cgen8cost.mul(cgen8cost.log(9))
   cgen8multi = cgen8multi.mul(2)
   document.getElementById("gen8btn").textContent = "Add 1 eighth generator (costs " + cgen8cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen9purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen9cost) || prestigecounter.greaterThan(cgen9cost)) {
   prestigecounter = prestigecounter.sub(cgen9cost);
   cgen9 = cgen9.add(1)
   cgen9cost = cgen9cost.mul(cgen9cost.log(9))
   cgen9multi = cgen9multi.mul(2)
   document.getElementById("gen9btn").textContent = "Add 1 ninth generator (costs " + cgen9cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

// tick calculation
setInterval(function tick() {
  let c = document.getElementById("counter")
  , p = document.getElementById("prestigecounter")
  , p2 = document.getElementById("powercounter")

  // counter/s
  counter = counter.add((cgen0.divide(tps).mul(upg2b)).add(cgen1.divide(tps).mul(cgen1multi/2)))
  // 
  if ((counter.greaterThan(inf) || counter.equals(inf)) && firstinfreached === false) {
  document.getElementById("maxmsg").textContent = "It seems like you have reached infinity. Power prestige to break infinity!"
  counter = inf
   }
  else
   {
  document.getElementById("maxmsg").textContent = null
   }

  if (prestigecounter == 1) {
  p.textContent = prestigecounter + ".00 prestige counter"
  }
  else {
  if (prestigecounter.greaterThan('1e1000')) {
  p.textContent = prestigecounter.toStringWithDecimalPlaces(3) + " prestige counters"
   }
  else {
  p.textContent = prestigecounter.toStringWithDecimalPlaces(2) + " prestige counters"
   }
  }

  if (counter.equals(1)) {
  c.textContent = counter + ".00 counter"
  }
  else {
  if (counter.greaterThan('1e1000')) {
  c.textContent = counter.toStringWithDecimalPlaces(3) + " counters"
  }
  else {
  c.textContent = counter.toStringWithDecimalPlaces(2) + " counters"
   }

  if (powercounter.equals(1)) {
  p2.textContent = powercounter + ".00 power counter"
  }
  else {
  if (counter.greaterThan('1e1000')) {
  p2.textContent = powercounter.toStringWithDecimalPlaces(3) + " power counters"
  }
  else {
  p2.textContent = powercounter.toStringWithDecimalPlaces(2) + " power counters"
   }
  
  }


  if (counter < 0) {
  document.getElementById("achi").textContent = "Negative? (nice you did it)"
  }


  // inf% calc
  // current endgame is 1.79e308 (still need to add a lot of stuff)

  if (counter.lessThan(1) || counter.equals(1)) {
  document.getElementById("inf%").textContent = 0 + "%"
  }
  else {
   if (counter.lessThan(inf)) {
   if (counter.lessThan(0)) {
   document.getElementById("inf%").textContent = "???%" // "-" + ((((counter.abs()).log(10)).divide(inf.log(10))).mul(100)).toStringWithDecimalPlaces(2) + "%"
   document.getElementById("inf%2").textContent = "% to infinity:" // "???"
   }
   else {
   document.getElementById("inf%").textContent = (((counter.log(10)).divide(inf.log(10))).mul(100)).toStringWithDecimalPlaces(2) + "%"
   document.getElementById("inf%2").textContent = "% to infinity:"
    if (firstinfreached == false) {
    document.getElementById("powerprestige").textContent = "Requires infinite counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
    }
    else {
    document.getElementById("powerprestige").textContent = "Requires 1.8e308 counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
    }
   }
   }
   else {
    if (firstinfreached == false) {
    document.getElementById("inf%").textContent = 100 + "%"
    c.textContent = "Infinite counters (capped)"
    document.getElementById("powerprestige").textContent = "Reset ALL progress to add 1 POWER COUNTER"
    document.getElementById("powerprestige").style = "border-color: #fffaad; background: linear-gradient(to right bottom, #fffa6d, #bfbd52)"
    document.getElementById("ach9").textContent= "The limit (nice you did it)"
    }
    else {
    document.getElementById("inf%").textContent = ((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2)
    document.getElementById("inf%2").textContent = "Infinities gained on power prestige:"
   }
  }
 }

if (firstinfreached == true) {
  if (counter.greaterThan(inf)) {
    document.getElementById("powerprestige").textContent = "Reset all progress to gain " + ((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2) + " infinities and "+ ((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2) +" power counter(s)"
    document.getElementById("powerprestige").style = "border-color: #fffaad; background: linear-gradient(to right bottom, #fffa6d, #bfbd52)" 
  }
  else {
    document.getElementById("powerprestige").textContent = "Requires 1.8e308 counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
  }
}
 // updates the prestige button
 let a = document.getElementById("a")
 if (counter.equals(10)) {
  a.textContent = "Reset counter to add 1 prestige counter"
  a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
  }
 else {
  if (counter.lessThan(10)) {
  a.textContent = "Requires 10 counters"
  a.style = "background: linear-gradient(to right bottom, #aaaaaa, #767676);"
  }
  else {
   if (counter.greaterThan('1.79e308') && firstinfreached == false) {
   a.textContent = "You have too many counters to prestige"
   a.style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
   }
   else {
    if (counter.greaterThan('1e1000')) {
    a.textContent = "Reset counter to add "  + counter.divide(10).toStringWithDecimalPlaces(3) +  " prestige counters"
    a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
     }
    else {
     a.textContent = "Reset counter to add "  + counter.divide(10).toStringWithDecimalPlaces(2) +  " prestige counters"
     a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
   }
    }
  }
 }

 // counter gens
 cgen1 = cgen1.add((cgen2.divide(tps).divide(20)).mul(cgen2multi))
 cgen2 = cgen2.add(cgen3.divide(tps).divide(20).mul(cgen3multi))
 cgen3 = cgen3.add(cgen4.divide(tps).divide(20).mul(cgen4multi))
 cgen4 = cgen4.add(cgen5.divide(tps).divide(20).mul(cgen5multi))
 cgen5 = cgen5.add(cgen6.divide(tps).divide(20).mul(cgen6multi))
 cgen6 = cgen6.add(cgen7.divide(tps).divide(20).mul(cgen7multi))
 cgen7 = cgen7.add(cgen8.divide(tps).divide(20).mul(cgen8multi))
 cgen8 = cgen8.add(cgen9.divide(tps).divide(20).mul(cgen9multi))
 document.getElementById("gen1t").textContent = cgen1.toStringWithDecimalPlaces(2) + " first generators (×" + cgen1multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen2t").textContent = cgen2.toStringWithDecimalPlaces(2) + " second generators (×" + cgen2multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen3t").textContent = cgen3.toStringWithDecimalPlaces(2) + " third generators (×" + cgen3multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen4t").textContent = cgen4.toStringWithDecimalPlaces(2) + " fourth generators (×" + cgen4multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen5t").textContent = cgen5.toStringWithDecimalPlaces(2) + " fifth generators (×" + cgen5multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen6t").textContent = cgen6.toStringWithDecimalPlaces(2) + " sixth generators (×" + cgen6multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen7t").textContent = cgen7.toStringWithDecimalPlaces(2) + " seventh generators (×" + cgen7multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen8t").textContent = cgen8.toStringWithDecimalPlaces(2) + " eighth generators (×" + cgen8multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen9t").textContent = cgen9.toStringWithDecimalPlaces(2) + " ninth generators (×" + cgen9multi.toStringWithDecimalPlaces(2) + ")"

 // hides the js disabled msg
 document.getElementById("jsdisabled").textContent = null
 
 // that one conversation u have when u try power with negative counters
 if (counter.greaterThan(0)) {
 tgl = -1
 document.getElementById("imgn").textContent = ""
 }
}
}, 1e3/tps)

function secretach1() {
secretach1s = true
document.getElementById("sach1").textContent = "But it's so choppy... (nice you did it)"
}
