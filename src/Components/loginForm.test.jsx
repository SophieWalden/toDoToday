

function validEmail(email){
    // Valid email is any number of letters followed by @ then another set of any number of letters
    return /^(^\S+@\S+$)$/.test(email);
}

function validPassword(password){
    return /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password) && password.length > 4;
}

test('Valid Password', () => {
    expect(validPassword("test123@Uppercase")).toBeTruthy();
    expect(validPassword("test")).toBeFalsy();
    expect(validPassword("1")).toBeFalsy();
});

test('Valid Email', () => {
    expect(validEmail("test@gmail.com")).toBeTruthy();
    expect(validEmail("test@")).toBeFalsy();
    expect(validEmail("@gmail.com")).toBeFalsy();
    expect(validEmail("@")).toBeFalsy();
});