// console.log("main.js"); // Testing

// 1. Create a new project.
// 2. Paste the array of student objects above into your JavaScript file. // HN 12-27-18 02:40: GIVEN ARRAY PASTED BELOW:

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
// 3. Put the h1, section, and aside functions into your JavaScript file. // HN 12-27-18 02:40: DONE

    // h1 Function:

const h1 = (style, title) => {
    return `<h1 class="${style}">${title}</h1>`
}

document.querySelector("#container").innerHTML = `
${h1("xx-large", "FirstName LastName")}`

    // section Function:

    const section = (style, title) => {
        return `<section class="${style}">${title}</section>`
    }




    // aside Function:

    const aside = (style, title) => {
        return `<aside class="${style}">${title}</aside>`
    }



// 4. Add the following styles to your CSS. // HN 12-27-18 02:40: PASTED INTO MAIN.CSS