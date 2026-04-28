"use strict";
let hasPassword = true;
let hasUsername = true;
//let canLogin = hasPassword && hasUsername;
//console.log("Can login:", canLogin);
if (hasPassword && hasUsername) {
    console.log("Login in");
}
else {
    console.log("can't login in");
}
