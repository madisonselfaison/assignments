//1) Turn an array of numbers into a total of all the numbers
const arr = [1,2,3]
const result = arr.reduce(function(final, num){
    final += num
    return final
})
console.log(result)



//2) Turn an array of numbers into a long string of all those numbers. 
const arr = [1,2,3]


let stringArr = arr.reduce((a,b) => a + ", " + b)
console.log(stringArr)



//3) Turn an array of voter objects into a count of how many people voted
 const voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
 }, 0)
 console.log(voteCount)
 

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let costOf = wishlist.reduce((amount,item)=> amount + item.price,0)
console.log(costOf)

//5) Given an array of arrays, flatten them into a single array?
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 function flatten(arrays){
    return arrays.reduce(function(flat, toFlatten){
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
 }
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
//6) Given an array of potential voters, return an object representing the results of the vote
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterObj = voters.reduce(function(final, voter) {
    if(voter.voted) {
        final.didVote++
    } else {
        final.didntVote++
    }
    return final
}, {didVote: 0, didnntVote: 0})

console.log(voterObj)

// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
