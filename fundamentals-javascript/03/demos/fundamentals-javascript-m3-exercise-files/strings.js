let firstName = "David";
let lastName = 'Tucker';
let title = `VP Engineering`;
title = `CTO`;

let fullName = firstName + " " + lastName;

//String concatenation with template literals
fullname = `${firstName} ${lastName}`;
//console.log(fullName);

//Creating multiple-line strings with \n
let bio = "line1\nLine2\nLine3";
//console.log(bio);

//Creating multi-line strings with backticks
bio = `About david tucker:
David blah blah
blah blah blah.`;
console.log(bio);

let quote = 'David said, "Javascript is great."';
quote = "David said, \"Javascript is great.\"";
quote = `JavaScript can use 'single' and "double" quotes.`;

//String length
let length = quote.length;
console.log(`Quote length: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1];
console.log(secondCharacter);

//finding indexes
let idx1 = fullName.indexOf("Dav");
console.log(idx1);

//finding nonexistent indexes
let idx2 = fullName.indexOf("xyz");
console.log(`Index 2: ${idx2}`);

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);
