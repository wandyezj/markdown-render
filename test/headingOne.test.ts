import {testHtml} from "./external";
test('headingOne', () => {

    const input =`# test`;

    const expected = `<h1>test</h1>`;

    testHtml(input, expected);
 
});
