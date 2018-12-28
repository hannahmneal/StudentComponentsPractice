// console.log("main.js"); // Testing

//  ----------------------------------------------------------------------------------------------------------
//                     INSTRUCTIONS: 

// 1. Create a new project.
// 2. Paste the array of student objects above into your JavaScript file. // HN 12-27-18 02:40: (ARRAY PASTED IN "WORKSPACE" SECTION BELOW)
// 3. Put the h1, section, and aside functions into your JavaScript file:

        // const h1 = (style, title) => {
        //     return `<h1 class="${style}">${title}</h1>`
        // }

        // const section = (style, title) => {
        //     return `<section class="${style}">${title}</section>`
        // }

        // const aside = (style, title) => {
        //     return `<aside class="${style}">${title}</aside>`
        // }

// 4. Add the following styles to your CSS. // HN 12-27-18 02:40: PASTED INTO MAIN.CSS
// 6. Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

// ---------------------------------------------------------------------------------------------------------
//                      BEGIN WORKSPACE
// ---------------------------------------------------------------------------------------------------------
// ARRAY OF STUDENTS:

    const students = [
        {
            name: "Chris Miller",
            className: "History",
            info: "Failed last exam",
            score: 59
        },
        {
            name: "Courtney Seward",
            className: "History",
            info: "Has completed all homework",
            score: 91
        },
        {
            name: "Garrett Ward",
            className: "History",
            info: "Wonderful at helping other students",
            score: 88
        },
        {
            name: "John Dulaney",
            className: "History",
            info: "Has never missed a class or exam",
            score: 92
        },
        {
            name: "Greg Lawrence",
            className: "History",
            info: "Sub-par performance all around",
            score: 64
        },
        {
            name: "Leah Duvic",
            className: "History",
            info: "Wonderful student",
            score: 97
        },
        {
            name: "Jesse Page",
            className: "History",
            info: "Smokes too much. Distracting.",
            score: 76
        },
        {
            name: "Kevin Haggerty",
            className: "History",
            info: "Falls asleep in class",
            score: 79
        },
        {
            name: "Max Wolf",
            className: "History",
            info: "Talks too much",
            score: 83
        },
        {
            name: "Lissa Goforth",
            className: "History",
            info: "Asks pointless, unrelated questions",
            score: 78
        },
        {
            name: "Tyler Bowman",
            className: "History",
            info: "When was the last time he attended class?",
            score: 48
        },
        {
            name: "Ray Medrano",
            className: "History",
            info: "Needs to contribute to in-class discussions",
            score: 95
        }
    ]

//                  H1, SECTION, ASIDE FUNCTIONS:   
    
// const h1 = (style) => {
//     return `<h1 class= xx-large "${style}"></h1>`
// }

// const section = (style) => {
//     return `<section class="bordered dashed ${style}"></section>`
// }

// const aside = (style) => {
//     return `<aside class="${style}"></aside>`
// }
//HN 12-27-18 16:00: modified functions by removing "title" parameter and corresponding template literal.

//  ----------------------------------------------------------------------------------------------------------
//  If a student is passing, the structure should look like this:

/* <div class="student">
    <h1 class="xx-large green">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> */

//  ----------------------------------------------------------------------------------------------------------
//                  ITERATIVE FUNCTIONS:             

for (i=0; i < students.length; i++) {
    // console.log(students[i]);   // HN 12-27-18 22:20: Logs each object in the array "students" to the console independently
    console.log(students[i].score); // HN 12-27-18 22:20: Logs each score in each object in the array

    // HN 12-27-18 22:25: Call function to set formatting for h1, section and aside here

    if (students[i].score <= 60) {  
        console.log("failing");
        

    } else {
        console.log("passing");
    }   // HN 12-27-18 22:24: if/else function works as desired.
}

let createNewElements = () => {

let newElement = document.createElement(`h2`);
console.log(newElement);
}
createNewElements();



// const h1 = (style) => {
//         return `<h1 class= xx-large "${style}"></h1>`
//     }
    
//     const section = (style) => {
//         return `<section class="bordered dashed ${style}"></section>`
//     }
    
//     const aside = (style) => {
//         return `<aside class="${style}"></aside>`
//     }


// let student = (name, className, info, colorClass) => `
// <div id="student"> 
//     ${h1(name, `xx-large ${colorClass}`)}
//     ${section(className, "section--padded")}
//     ${aside(info, "pushRight")}
// </div>`

