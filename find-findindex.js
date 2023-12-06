/* 
accepts an array of objects, each with a key of username, and a string. 
return the first object with the key of username that matches the string passed to the function.
 If the object is not found, return undefined. 
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user){
    return user.username === username;
  });
};
 
/*
accepts an array of objects, each with a key of username, and a string. 
remove the object from the array. 
If the object is not found, return undefined. 
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  });
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
};