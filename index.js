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

function addTwoNumbers(a, b) {
  return parseInt(a) + parseInt(b);
}

const num1 = prompt("Insert First number");
const num2 = prompt("Insert Second number");

alert(addTwoNumbers(num1, num2));

const projects = [
  {
    desc: "This resturant page was made with Bootstrap, HTML and CSS. The aim was to see how close we could get to a template design",
    image: "https://i.postimg.cc/TYgkxxsW/resturantsnip.png",
    github: "https://github.com/Carlaamylawrence/Resturant.git",
    live: "https://mytakeondelicious.netlify.app",
  },
  {
    desc: "This gym landing page was made with Bootstrap, HTML and CSS. This was a personal project to practice my skills.",
    image: "https://i.postimg.cc/1znVxmWk/gymsnap.png",
    github: "https://github.com/Carlaamylawrence/gym.git",
    live: "https://hugegym.netlify.app",
  },
  {
    desc: "This grpoup project was created with HTML and CSS. I was responsible for the landing page",
    image: "https://i.postimg.cc/gJWWmpyS/bakerysnip.png",
    github: "https://github.com/Carlaamylawrence/Company_portfolio.git",
    live: "https://sweetheavenconfectionery.netlify.app/",
  },
];

for (let i = 0; i < projects.length; i++) {
  document.querySelector("#projects").innerHTML += `
  <img onClick="toggleActive('#project${i}')" src=${projects[i].image}>
  <div class="modal" id="project${i}">
  <button onClick="toggleActive('#project${i}')"> x </button>
  ${projects[i].desc}
  </div>
  `;
}

function toggleActive(el) {
  document.querySelector(el).classList.toggle("active");
}

for (i = 0; i <= 20; i++) {
  console.log(i);
  if (i % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
