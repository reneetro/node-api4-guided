// function someProcedure(a){
//     if(a === 1){
//         return 5;
//     } else if (a === 2){
//         return 10;
//     }

//     throw new Error("a should be 1 or 2");
// }


// try {
//     console.log('my result is:', someProcedure(1))
// } catch(error){
//     console.log('I got an exception', error.message);
// }
require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 9000 

server.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`)
})