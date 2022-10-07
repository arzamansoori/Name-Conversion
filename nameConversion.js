//getting value
let value1 = document.getElementById("text");

//getting button
let btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {
    //CAMEL CASE
    let camelValue = document.getElementById("camel-case");
    let camelValueSplit = value1.value.split(" ");
    let camelValueJoin;
    for (let i = 1; i < camelValueSplit.length; i++) {
        camelValueSplit[i] =
            camelValueSplit[i][0].toUpperCase() + camelValueSplit[i].slice(1);
        camelValueJoin = camelValueSplit.join("");
    }
    camelValue.innerHTML = camelValueJoin;

    //PASCAL CASE
    let pascalValue = document.getElementById("pascal-case");
    let pascalSplit = value1.value.split(" ");
    let pascalJoin;

    for (let i = 0; i < pascalSplit.length; i++) {
        pascalSplit[i] = pascalSplit[i][0].toUpperCase() + pascalSplit[i].slice(1);
        pascalJoin = pascalSplit.join("");
    }
    pascalValue.innerHTML = pascalJoin;

    //SNAKE CASE
    let snakeValue = document.getElementById("snake-case");
    let snakeSplit = value1.value.split(" ");
    let snakeJoin;

    for (let i = 0; i < snakeSplit.length; i++) {
        snakeSplit[i] = snakeSplit[i][0].toLowerCase() + snakeSplit[i].slice(1);
        console.log(snakeSplit[i]);
        snakeJoin = snakeSplit.join("_");
    }
    snakeValue.innerHTML = snakeJoin;

    //SCREMING SNAKE CASE
    let scremingSnakeValue = document.getElementById("screaming-snake-case");
    let scremingSnakeSplit = value1.value.split(" ");
    let scremingSnakeJoin;

    for (let i = 0; i < scremingSnakeSplit.length; i++) {
        scremingSnakeSplit[i] = scremingSnakeSplit[i][0].toUpperCase() + scremingSnakeSplit[i].slice(1);
        console.log(scremingSnakeSplit[i]);
        scremingSnakeJoin = scremingSnakeSplit.join("_");
    }
    scremingSnakeValue.innerHTML = scremingSnakeJoin;

    //KEBAB CASE
    let kebabCaseValue = document.getElementById("kebab-case");
    let kebabCaseSplit = value1.value.split(" ");
    let kebabCaseJoin;


    for (let i = 0; i < kebabCaseSplit.length; i++) {
        kebabCaseSplit[i] = kebabCaseSplit[i][0].toLowerCase() + kebabCaseSplit[i].slice(1);
        console.log(kebabCaseSplit[i]);
        kebabCaseJoin = kebabCaseSplit.join("-");
    }
    kebabCaseValue.innerHTML = kebabCaseJoin;

    //Screming KEBAB CASE
    let scremingKebabValue = document.getElementById("screaming-kebab-case");
    let scremingKebabSplit = value1.value.split(" ");
    let scremingKebabJoin;


    for (let i = 0; i < scremingKebabSplit.length; i++) {
        scremingKebabSplit[i] = scremingKebabSplit[i][0].toUpperCase() + scremingKebabSplit[i].slice(1);
        console.log(scremingKebabSplit[i]);
        scremingKebabJoin = scremingKebabSplit.join("-");
    }
    scremingKebabValue.innerHTML = scremingKebabJoin;
})
