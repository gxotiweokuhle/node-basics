
/*const greet = (Firstname) => {
    console.log(`Please work, ${Firstname}`)
}
greet('liyabona');
*/

//Global object
/*console.log(global)
global.setTimeout(() => {
    console.log('in the timeout')
}, 3000);
const int = setInterval(() => {
    console.log('in the interval')
}, 1000);*/

//console.log(__dirname);
//console.log(__filename);

const people = ['lolly', 'nathi', 'khosi', 'endi', 'likho', 'mbalz', 'viggie'];
//console.log(people)
const ages = [17, 15, 2, 13, 12, 15, 13]

//module.exports = people;gives the empty object a value
//how to export multiple values

module.exports = {
    //people: people ,key-value pair for one
    people, ages
};
