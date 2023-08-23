if ("0"){
   console.log('Hello');
} //! Hello

let age = 0;
if (age >= 1) console.log("Bu son 1da katta");
else if (age === 0)console.log("bu son 0ga teng");
else console.log("bu son 1dan kichik");

let a = 1, b = 1;
if (a + b >= 4) {
   console.log('Bellow');
} else {
    console.log("Over");
}

let login = 'Director';
if (login == 'Employe') console.log('Hello');
else if (login == 'Director')console.log('Greetings');
else if('')console.log('No login');
else console.log('');

let browser = 'chrome';
switch (browser) {
    case 'Edge': console.log("You've got the Edge!"); break;
    case 'chrome':
    case 'firefox':
    case 'safari':
    case 'opera': console.log("Okay we support these browsers too"); break;
    default:console.log('We hope that this page looks ok!');
}

let i = 3;
while (i){
    console.log(i--);
}