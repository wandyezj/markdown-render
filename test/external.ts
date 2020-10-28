import {render, RenderOptionsHtml} from "../src/index";

function normalize(s: string): string {
    return s.replace(/\r/gm, "");
}

export function testHtml(markdownInput: string, htmlOutputExpected: string) {
    const htmlOutput = render(markdownInput, RenderOptionsHtml);

    console.log(`[${htmlO}]`)

    expect(normalize(htmlOutput)).toBe(normalize(htmlOutputExpected));
}