const address = 'andorkilla';
const part = address.slice(2, 5);
// console.log(part);



const sentence =`I am a good and hardworking person`;
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendStr = 'Rahim,Kahim,Dahim,Lahim,Fahim,Sahim';
const friend = friendStr.split(',')
console.log(friend)
const realFriend = [ 'Rahim', 'Kahim', 'Dahim', 'Lahim', 'Fahim', 'Sahim' ];
// console.log(realFriend.join());
// console.log(realFriend.join('|'));
console.log(realFriend.join('-'));