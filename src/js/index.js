/* Feel free to delete the below and add
 * your own code.
 * A functional and classical module import
 * example are provided.
 * */
import { functionExample } from "./modules/function-example.js";
import { ClassExample } from "./modules/class-example.js";

const title = document.querySelector("h1");

if (title) {
  functionExample(title);
  new ClassExample(title);
}


document.getElementById("t-shirt-form").addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const size = document.querySelector('input[name="size"]:checked').value;
  const shirtType = document.getElementById("shirt-type").value;

  if(name.trim() === '' || !quantity || shirtType.trim() === '') {
    alert("Please fill in all fields.");
    return;
  }

  const summary = document.getElementById("summary");
  if(summary.classList.contains("hide")) {
    summary.classList.remove("hide");
    summary.classList.add("show");
  } else {
    summary.classList.remove("show");
    summary.classList.add("hide");
  }
  
  const output = summary.textContent;
  summary.innerHTML = `
    <div class="display-output">
      <p><b>Hello ${name}!</b> You want ${quantity} ${size} ${shirtType} ${(quantity > 1) ? 'shirts' : 'shirt'}.
    </div>
  `;
});