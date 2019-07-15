function myFunction() {
  const myDropdown: HTMLDivElement = document.getElementById(
    "cf"
  ) as HTMLDivElement;
  myDropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event: MouseEvent) {
  const element: HTMLElement = event.target as HTMLElement;
  if (!element.matches(".dropbtn")) {
    const dropdowns: HTMLCollectionOf<
      HTMLDivElement
    > = document.getElementsByClassName("dropdown-content") as HTMLCollectionOf<
      HTMLDivElement
    >;
    let i: number;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown: HTMLDivElement = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
