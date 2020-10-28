import {testHtml} from "./external";
describe("headingOne", () => {
    test('single', () => {

        const input =`# test`;
    
        const expected = `<h1>test</h1>`;
    
        testHtml(input, expected);
     
    });

    
    test('multiple', () => {

        const input =`# one
        # two`;

        const expected = `<h1>one</h1>
<h1>two</h1>`;

        testHtml(input, expected);
    
    });
})


