import {render, RenderOptionsHtml} from "../src/index";

export function testHtml(markdownInput: string, htmlOutputExpected: string) {
    const htmlOutput = render(markdownInput, RenderOptionsHtml);

    expect(htmlOutput).toBe(htmlOutputExpected);
}