// product search and filter // 09/07/2026
// Format a nested user object into values that are easier to show in an interface or return from an API. The final summary should collect the smaller pieces.

const user = {
    id: 42,
    firstName: 'Ava',
    lastName: 'Stone',
    email: 'ava@example.com',
    phone: null,
    address: {
        city: 'London',
        country: 'UK',
    },
    account: {
        status: 'active',
        plan: 'pro',
    },
};

function getDisplayName(user) {
    // returns the first and last name as a string
    return `${user.firstName} ${user.lastName}`
}

function getLocation(user) {
    // return city, country
    return `${user.address.city}, ${user.address.country}`
}

function getContactSummary(user) {
    // return obj with email and phone
    return {
        email: user.email,
        phone: user.phone
    }
}

function isAccountActive(user) {
    // return true when account status is active
    return user.account.status === 'active';
    return false;
}

function createProfileSummary(user) {
    // return displayname, location, contact, active and plan
    return {
        name: getDisplayName(user), 
        location: getLocation(user), 
        contactSummary: getContactSummary(user), 
        active: isAccountActive(user), 
        plan: user.account.plan}
}


console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));


// DOM - comment section out if testing in just JS
const myConsole = document.querySelector('.console');
const newP = document.createElement('p');

newP.textContent = JSON.stringify(createProfileSummary(user));
myConsole.appendChild(newP);