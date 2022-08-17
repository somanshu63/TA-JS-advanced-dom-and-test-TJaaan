const {getFullName, isPalindrome, getCircumfrence, getArea} = require('./index');

test("fullname som+ grover is equal to som grover", () => {
    expect(getFullName("som", "grover")).toMatch("som grover");
});
test("fullname joh + karn is equal to john karn", () => {
    expect(getFullName("john", "karn")).toMatch("john karn");
});
test("fullname kiara+ bose is equal to kiara bose", () => {
    expect(getFullName("kiara", "bose")).toMatch("kiara bose");
});

test("fullname som + grover is not equal to som grover", () => {
    expect(getFullName("som", "grover")).not.toMatch("somgrover");
});
test("fullname john + karn is not equal to john karn", () => {
    expect(getFullName("john", "karn")).not.toMatch("johnkarn");
});
test("fullname kiara + bose is not equal to kiara bose", () => {
    expect(getFullName("kiara", "bose")).not.toMatch("kiarabose");
});





test("value is palindrome", () => {
    expect(isPalindrome("samas")).toBe(true);
});
test("value is palindrome", () => {
    expect(isPalindrome("samassamas")).toBe(true);
});
test("value is palindrome", () => {
    expect(isPalindrome("sastytsas")).toBe(true);
});

test("value is palindrome", () => {
    expect(isPalindrome("samsdfgas")).not.toBe(true);
});
test("value is palindrome", () => {
    expect(isPalindrome("samaghjkssamas")).not.toBe(true);
});
test("value is palindrome", () => {
    expect(isPalindrome("sastyhjk,tsas")).not.toBe(true);
});




test("get circumfrence", () => {
    expect(getCircumfrence(5)).toBe("the circumfrence is 31");
});
test("get circumfrence", () => {
    expect(getCircumfrence(15)).toBe("the circumfrence is 94");
});
test("get circumfrence", () => {
    expect(getCircumfrence(25)).toBe("the circumfrence is 157");
});

test("get circumfrence", () => {
    expect(getCircumfrence(5)).not.toBe("the circumfrence is 531");
});
test("get circumfrence", () => {
    expect(getCircumfrence(15)).not.toBe("the circumfrence is 594");
});
test("get circumfrence", () => {
    expect(getCircumfrence(25)).not.toBe("the circumfrence is 5157");
});




test("get area", () => {
    expect(getArea(10)).toBe("the area is 314");
});
test("get area", () => {
    expect(getArea(20)).toBe("the area is 1256");
});
test("get area", () => {
    expect(getArea(5)).toBe("the area is 78");
});

test("get area", () => {
    expect(getArea(10)).not.toBe("the area is 54314");
});
test("get area", () => {
    expect(getArea(20)).not.toBe("the area is 541256");
});
test("get area", () => {
    expect(getArea(5)).not.toBe("the area is 5478");
});