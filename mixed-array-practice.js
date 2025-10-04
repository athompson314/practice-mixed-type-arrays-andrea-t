//Task 1: Create the Profile. Write code to create a profile array containing the
//required elements. Fill the array with data for one fictional user profile. Remember
//to include all the elements (user name, age, subscription status, user’s location,
//user’s hobbies).

let profileArr = ["athompson",47,true,{city:"Kansas City"},["reading","hiking","yoga","coding"]];
console.log(profileArr);

//Task 2: Access and Log Profile Details. Use console.log() to access and display
//the following:
//The user’s name.
//The second hobby from the hobbies array.

console.log(profileArr[0] + "\n" + profileArr[4][1]);

//Task 3: Modify the Profile. Make the following updates:
//Update the user’s age to a new value.
//Add a new hobby to the hobbies array.
profileArr[1]=50;
profileArr[4]=["reading","hiking","yoga","coding","cooking"];

//Task 4: Display the Updated Profile. Log the entire updated profile to verify the changes.
console.log(profileArr);