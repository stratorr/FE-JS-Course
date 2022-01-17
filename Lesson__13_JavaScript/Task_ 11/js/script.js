// 1
let selected = document.querySelector("#genres");
console.log(selected.value);
console.log(selected[genres.selectedIndex].textContent);

// 2
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3
newOption.selected = true;
