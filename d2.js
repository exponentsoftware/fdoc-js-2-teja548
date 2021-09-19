//1
/*
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
];

function createArrayOfArrays(countries) {
    return countries.map(ct => [
        ct,
        ct.substr(0, 3).toUpperCase(),
        ct.length
    ]);
}

console.log(createArrayOfArrays(countries)); */

//2
/*const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

const scoresGreaterThan85 = arr => {
    const scores = [];
    for (const element of arr) {
        if (element.scores > 85) {
            scores.push(element.scores);
        }
    }
    return scores;
};


*/
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];


// Write a function which filter users who has  scoresGreaterThan85,
const names = users.filter((x) => x.scores > 85).map((x) => x.name);
console.log(names);

// Write a function which addUser  to the user array only if the user does not exist.

function addUser(users, newUser) {
    let isUser = users.find(user => user.name === newUser.name)
    if (!isUser) {
        users.push(newUser)
    }
    else {
        return `${newUser.name} name already exits in the users array`
    }
    return users

}

let userToAdd = {
    name: 'Thomas', scores: 100, skills: ['HTM', 'CSS', 'Nodejs'], age: 24
}
console.log(addUser(users, userToAdd));

// function which addUserSkill which can add skill to a user only if the user exist.
function addUserSkill(name, skillSet) {
    let gotUser = users.find(element => element.name == name);
    if (gotUser) {
        gotUser.skills.push(skillSet);
        console.log(users)
    } else {
        console.log(`user ${name} doesn't exist`)
    }
};
addUserSkill('Thomas', 'backend')

//function which editUser if the user exist in the users array.
function editUser(name, scores, skills, age) {
    let user = users.findIndex(e => e.name == name);
    if (user >= 0) {
        delete users[user];
        users[user] = [name, scores, skills, age];
        console.log(users)
    } else {
        console.log(`user ${name} doesn't exist`)
    }

}
editUser('Thomas', 25, ["Nodejs", "MongoDB"], 10)





