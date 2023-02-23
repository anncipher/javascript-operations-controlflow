// 3. CONDITIONAL STATEMENT


let scienceSubjects = 'English, Mathematics, Physics, Chemistry, Biology, Technical Drawing';
let socialscienceSubjects = 'English, Mathematics, Accounting, Commerce, Marketing, Geography';
let artSubjects = 'English, Mathematics, Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

if (studentGroup = 'ARTS') {
    console.log(artSubjects);
} else if (studentGroup = 'SOCIALSCIENCE') {
    console.log(socialscienceSubjects);
} else if (studentGroup = 'SCIENCE') {
    console.log(scienceSubjects);
} else {
    console.log(generalSubjects)
}


// 5. LOOP STATEMENT (POWER)
const num = 60;
const nearestPowerofTwo = num => {
    //positive numbers only
    if (num < 0) {
        num *= -1;
    }
    let base = 1;
    while (base < num) {
        if (num - base < Math.floor (base / 2)) {
            return base;
        };
        base *= 2;
    };
    return base;
};
console.log('"' + 'The number ' + nearestPowerofTwo(num) + ' ' + 'is the power of 2 nearest to 60.' + '"');