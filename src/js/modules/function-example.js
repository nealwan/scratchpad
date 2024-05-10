export function functionExample(el) {
  if (el.textContent.length > 0) {
    console.log(
      `Contents of title from functional component: ${el.textContent}`
    );
  }
}
