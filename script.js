const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
function t(teams) {
	return teams;
}
const team = t(players);
const team1 = players;
const cap1 = person;
cap1.name = "Dhoni";
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
