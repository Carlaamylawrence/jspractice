fetch("https://randomuser.me/api?results=100")
  .then((response) => response.json())
  .then((data) => {
    const people = data.results;
    console.log(data);

    people.forEach((person) => {
      console.log(person);
      if (person.dob.age >= 18 && person.dob.age <= 25) {
        document.querySelector("#users").innerHTML += `
            <img src=${person.picture.large}>
            <h3>${person.name.first} ${person.name.last}</h3>
            <p>Age: ${person.dob.age}</p>
        `;
      }
    });
  });
