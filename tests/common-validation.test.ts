import {
    validateEmail,
    validStringLength,
    validStringMaxLength,
    validStringRangeLength,
} from '../src/helpers/common-validation';

test('validStringRangeLength', async () => {
    const successTest = validStringRangeLength('asasfdafd', 2, 20);
    const failedTest = validStringRangeLength('34', 3, 5);

    expect(successTest).toBe(true);
    expect(failedTest).toBe(false);
});

test('validStringMaxLength', async () => {
    const successTest = validStringMaxLength('asasfdafd', 20);
    const failedTest = validStringMaxLength('34eewrw',  5);

    expect(successTest).toBe(true);
    expect(failedTest).toBe(false);
});

test('validStringLength', async () => {
    const successTest = validStringLength('12edr', 5);
    const failedTest = validStringLength('aserf',  10);

    expect(successTest).toBe(true);
    expect(failedTest).toBe(false);
});

test('validateEmail', async () => {
    const successTest1 = validateEmail('jdeveloper@gmail.com');
    const successTest2 = validateEmail('jdeveloper@hotmail.com');
    const successTest3 = validateEmail('jdeveloper@yahoo.es');
    const failedTest = validateEmail('jdeveloper@test.com');

    expect(successTest1).toBe(true);
    expect(successTest2).toBe(true);
    expect(successTest3).toBe(true);
    expect(failedTest).toBe(false);
});
