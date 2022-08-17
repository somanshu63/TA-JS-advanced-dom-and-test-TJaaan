function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isPalindrome (value) {
    let x = value;
    let y = x.split("").reverse().join("");
    if(x == y) {
        return true;
    }
    else{
        return false;
    }
}

function getCircumfrence(r) {
    return `the circumfrence is ${Math.floor(2*3.14*r)}`;
}

function getArea(r){
    return `the area is ${Math.floor(3.14*r*r)}`;
}

module.exports = {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea
};