var veikejai = [
  'Jon Snow',
  'Cersei Lannister',
  'Daenerys Targaryen',
  'Theon Greyjoy',
  'Tyrion Lannister',
  'Arya Stark',
];

console.log(veikejai[0]);
console.log(veikejai[veikejai.length - 1]);

var skaicius = prompt('Įveskite skaičių nuo 1 iki 6');
skaicius = Number(skaicius);

if (skaicius <= 6) {
  console.log(veikejai[skaicius - 1]);
}
