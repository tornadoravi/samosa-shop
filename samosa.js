let samosa = {
    typesOfSamosa: [
        {
            recipes: "chole samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to chenna dal ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "chocolate samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Chocolate ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "pasta samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Pasta  ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "punjabi samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Masala ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "cauliflower samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Cauliflower Masala ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "mushroom samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Mushroom Masala",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "potato samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Potato Masala",
                step4: "Fill and Fried"
            }
        },

    ],
    sideDish: [
        {
            dish: "MINT",
            makingDish: {
                step1: "Grinding Mint, oil and Salt ",
                step2: "Cooking with add Oil and Black Mustard"
            }
        },
        {
            dish: "TOMATO SAUCE",
            makingDish: {
                step1: "Grinding fresh Tomato ",
                step2: "Adding additional incretance"
            }
        },
        {
            dish: "MAYONNAISE",
            makingDish: {
                step1: "Grinding Oil and Ginger",
                step2: "Adding incretance Vingar and Sugar"
            }
        },
    ]
}

//===============================================| Choice of Samosa |======================================================

//⬇️⬇️ Taking user input of Samosa ⬇️⬇️ 
userRecipeSelection = String(prompt(`1 : Chole Samosa\n
2 : Chocolate Samosa \n
3 : Pasta Samosa \n
4 : Punjabi Samosa \n
5 : Cauliflower Samosa \n
6 : Mushroom Samosa\n
7 : Potato Samosa\n 
ENTER THE DISH NAME`)).toLowerCase()


function seletionOfRecipe(menu, recipeChoice) {
    return menu.filter(n => n.recipes == recipeChoice);
}

//⬇️⬇️ Implementing of Samosa according to user Input in - Making of Recipe ⬇️⬇️
 makingOfRecipe(userRecipeSelection)

function makingOfRecipe(userRecipe) {
    DishSteps = []
    seletionOfRecipe(samosa.typesOfSamosa, userRecipe).forEach(recipe => {
        DishSteps.push(Object.values(recipe.makingRecipes))
    });
    setTimeout(() => {
        document.write('⌜‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌝');
        document.write("<br>")
        document.write(`   Please Wait, Your ${userRecipe} is Preparing    `)
        document.write("<br>")
        document.write('⌞____________________________________________________⌟')
        document.write("<br>")
        let counting = 0
        let intervals = setInterval(() => {
            document.write("<br>")
            document.write(`Step ${counting+1} ▶️ ${DishSteps[0][counting]}`)
            document.write("<br>")
            counting++
            if (counting == DishSteps[0].length) {
                clearInterval(intervals)
            }
        }, 4000);
    }, 3000)


}

//=================================================| Choice of Side Dish |====================================================

function seletionOfDish(menu, DishChoice) {
    return menu.filter(n => n.dish == DishChoice);
}

function choiceMint(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            document.write("<br>")
            document.write('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
            document.write("<br>")
            document.write(`   Side Dish '${userChoice}' is Preparing  `)
            document.write("<br>")
            document.write('___________________________________________')
            document.write("<br>")
            setTimeout(() => {
                document.write(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                document.write("<br>")
                setTimeout(() => {
                    document.write("<br>")
                    document.write(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                    document.write("<br>")
                }, 4000)
            }, 4000)
        }, 22000)
    });
}

function choiceTomatoSauce(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            document.write("<br>")
            document.write('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
            document.write("<br>")
            document.write(`   Side Dish '${userChoice}' is Preparing  `)
            document.write("<br>")
            document.write('___________________________________________')
            document.write("<br>")
            setTimeout(() => {
                document.write("<br>")
                document.write(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                document.write("<br>")
                setTimeout(() => {
                    document.write("<br>")
                    document.write(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                    document.write("<br>")
                }, 4000)
            }, 4000)
        }, 32000)
    });
}

function choiceMayonnaise(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            document.write('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
            document.write("<br>")
            document.write(`   Side Dish '${userChoice}' is Preparing  `)
            document.write("<br>")
            document.write('___________________________________________')
            document.write("<br>")
            setTimeout(() => {
                document.write("<br>")
                document.write(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                document.write("<br>")
                setTimeout(() => {
                    document.write("<br>")
                    document.write(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                    document.write("<br>")

                }, 4000)
            }, 4000)
        }, 42000)
    });
}

//=================================================| Choice of Yes or No |====================================================

//⬇️⬇️ Implementing of Side Dish according to user Input in - Side Dish Choice Mint ⬇️⬇️
sideDishChoiceMint(choiceMint, choiceTomatoSauce, choiceMayonnaise) 

function sideDishChoiceMint(Imint, ItomatoSauce, Imayonnaise) {
    // document.write(`Do you want ${samosa.sideDish[0].dish}? ( YES , NO )`)
    isMintNeeded = String(prompt("MINT \n ENTER THE (YES/NO)"))
    if (isMintNeeded.toLowerCase() === "yes") {
        Imint("MINT")
        sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise)
    } else if (isMintNeeded.toLowerCase() === "no") {
        sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise)
    }
}

function sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise) {
    // document.write(`Do you want ${samosa.sideDish[1].dish}? ( YES , NO )`)
    isTomatoSauceNeeded = String(prompt("TOMATOSAUCE \n ENTER THE (YES/NO)"))
    if (isTomatoSauceNeeded.toLowerCase() === "yes") {
        ItomatoSauce("TOMATO SAUCE");
        sideDishChoiceMayonnaise(Imayonnaise)
    } else if (isTomatoSauceNeeded.toLowerCase() === "no") {
        sideDishChoiceMayonnaise(Imayonnaise)
    }
}

function sideDishChoiceMayonnaise(Imayonnaise) {
    // document.write(`Do you want ${samosa.sideDish[2].dish}? ( YES , NO )`)
    isMayonnaiseNeeded =  String(prompt("MAYONNAISE  \n ENTER THE (YES/NO)"))
    if (isMayonnaiseNeeded.toLowerCase() === "yes") {
        document.write("<br>")
        document.write("_-_-_-_-_Thank You, Your Order is been Placed_-_-_-_-_")
        document.write("<br>")
        Imayonnaise("MAYONNAISE");
    } else if (isMayonnaiseNeeded.toLowerCase() === "no") {
        document.write("<br>")
        document.write("_-_-_-_-_Thank You, Your Order is been Placed_-_-_-_-_")
        document.write("<br>")
    }
}
