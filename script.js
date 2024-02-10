//Dom Practice Project
let maintag=document.createElement("h1");
maintag.innerText="Let's Laugh Together :)";
maintag.style.display="flex";
maintag.style.alignItems="center";
maintag.style.justifyContent="center";
maintag.style.color="white";
maintag.style.fontSize="50px"
maintag.style.top="50%";
maintag.style.paddingBottom="50px";
maintag.style.paddingTop="200px";
let div=document.createElement("div");
div.style.border="5px solid white";
div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.padding="24px";
div.style.left="36%";
div.style.bottom="100%";
div.style.borderRadius="30px";
// div.innerText="Helllo";
div.style.width="25vw";
let bodyy=document.querySelector("body");
let btn=document.createElement('button');
btn.classList.add("btnClass");
btn.style.innerText="red";
btn.style.display="flex";
btn.style.alignItems="center";
btn.style.justifyContent="center";
btn.style.left="45%";
btn.style.bottom="100%";
btn.style.padding="21px";
btn.style.marginTop="50px";
btn.style.width="10vw";
btn.style.borderRadius="5px";
btn.style.fontSize="15px";
btn.style.cursor="pointer";
btn.style.border="5px solid lightblue";
btn.style.backgroundColor="white";
btn.innerText="Generate Joke";
btn.style.color="black";
bodyy.style.backgroundImage="url(scissors.png)";
const URL = "https://icanhazdadjoke.com/";

const jokes = async () => {
  let response = await fetch(URL, {
    headers: { // its an option object
      Accept: "application/json", // Specify that you want JSON
    },
  });
 // console.log(response); for  demonstartion on console window
  let dataFormat = await response.json();
  div.innerText=dataFormat.joke;
};
btn.addEventListener("click",jokes);

bodyy.append(maintag);
bodyy.after(div);
div.after(btn);
