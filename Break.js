/*
  Loop Control
    Break
    continue
    Label
*/

let products = ["keyboard","Mouse","pen","pad","Monitor"];

let colors = ["Red", "Green", "Black"];

mainloop: for (let i = 0; i < products.length; i++){
    console.log(products[i]);
    nestloop: for (let j = 0; j < products.length; j++){
        console.log(`-${colors[j]}`);
        if (colors[j] === "Green") {
            break  nestloop;
        }
    }
}