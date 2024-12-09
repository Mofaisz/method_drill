let got = require("./data.js");

function countAllPeople() {
  let count = 0;
  housesDetails = got.houses;
  housesDetails.forEach((element) => {
    return (count += element.people.length);
  });
  return count;
}

function peopleByHouses() {
  housesDetails = got.houses;

  let result = housesDetails.reduce((accumulator, element) => {
    count = 0;
    count += element.people.length;
    let name = element.name;
    accumulator.push({ name: name, count: count });
    return accumulator;
  }, []);
  result.sort((a, b) => a.name.localeCompare(b.name));

  let sortedResult = result.reduce((accumulator, value) => {
    if (!accumulator[value.name]) {
      accumulator[value.name] = value.count;
    }
    return accumulator;
  }, {});
  return sortedResult;
}

function everyone(got) {
  housesDetails = got.houses;
  const result = housesDetails.reduce((accumulator, value) => {
    value.people.forEach((val) => {
      accumulator.push(val.name);
    });
    return accumulator;
  }, []);
  return result;
}

function nameWithS(got) {
  housesDetails = got.houses;
  const result = housesDetails.reduce((accumulator, value) => {
    value.people.forEach((val) => {
      if (val.name.includes("s") || val.name.includes("S")) {
        accumulator.push(val.name);
      }
    });
    return accumulator;
  }, []);

  return result;
}

function nameWithA(got) {
  // your code goes here
  housesDetails = got.houses;
  let result = housesDetails.reduce((accumulator, value) => {
    value.people.forEach((val) => {
      if (val.name.includes("a") || val.name.includes("A")) {
        accumulator.push(val.name);
      }
    });
    return accumulator;
  }, []);
  return result;
}

function surnameWithS(got) {
  // your code goes here
  let housesDetails = got.houses;
  const result = housesDetails.reduce((accumulator, value) => {
    value.people.forEach((val) => {
      splittedName = val.name.split(" ");

      if (splittedName[splittedName.length - 1].startsWith("S")) {
        accumulator.push(val.name);
      }
    });
    return accumulator;
  }, []);
  return result;
}

function surnameWithA() {
  // your code goes here
  let housesDetails = got.houses;
  const result = housesDetails.reduce((accumulator, value) => {
    value.people.forEach((element) => {
      splittedName = element.name.split(" ");
      if (splittedName[splittedName.length - 1].startsWith("A")) {
        accumulator.push(element.name);
      }
    });
    return accumulator;
  }, []);
  return result;
}

function peopleNameOfAllHouses() {
  // your code goes here
  let housesDetails = got.houses.sort((a, b) => a.name.localeCompare(b.name));
  const result = housesDetails.reduce((accumulator, value) => {
    let people = value.people.map((val) => {
      return val.name;
    });
    if (!accumulator[value.name]) {
      accumulator[value.name] = people;
    }
    return accumulator;
  }, {});

  return result;
}

// Testing your result after writing your function
console.log(countAllPeople(got));
// Output should be 33

console.log(peopleByHouses(got));
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone(got));
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(got), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA(got));
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(got), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA(got));
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses(got));
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
