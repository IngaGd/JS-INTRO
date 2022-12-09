const hi = 'labas';
console.log(hi);

const morning = "rytas";
console.log(morning);

const sentence = 'labas rytas';
console.log(sentence);

const combo1 = hi + morning;
console.log(combo1);

const combo2 = hi + ' ' +morning;
console.log(combo2);

const combo3 = hi + " " +morning;
console.log(combo3);

const user = 'John';

const kabute1 = "Vienguba kabute (')";
console.log(kabute1);

const kabute2 = 'Dviguba kabute (")';
console.log(kabute2);

//escape
const kabute3 = 'Vienguba kabute (\') ir dviguba kabute (")';
console.log(kabute3);

const kabute4 = "Vienguba kabute (') ir dviguba kabute (\")";
console.log(kabute4);

const kabute5 = 'Vienguba kabute (\') ir dviguba kabute (\")';
console.log(kabute5);

const kabutesBacktick = `Vienguba kabute (') id dviguba kabute (")`;
console.log(kabutesBacktick);

const vienguba = "'";
const dviguba = '"';
const kabuciuSakinys = 'Vienguba kabute ('+vienguba+') ir dviguba kabute ('+dviguba+').'
console.log(kabuciuSakinys);

// placeholder
const backtickSakinys = `Vienguba kabute (${vienguba}) ir dviguba kabute (${dviguba})`;
console.log(backtickSakinys);

// Hi, John!
const userHi = 'Hi, '+user+'!';
const combo = hi + morning;
console.log(userHi);

const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);
