const bcrypt = require('bcrypt');


let plainPass = 'abc123456';


let hashedPass = bcrypt.hashSync(plainPass, 10);


console.log(hashedPass);


let check = bcrypt.compareSync('abc1234',hashedPass);

console.log(check)