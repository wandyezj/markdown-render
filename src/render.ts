import { RenderOptions } from "./RenderOptions";
import {Tokens} from "./Tokens"
import {RenderOptionsDefault} from "./RenderOptionsDefault";


// Alternative is nodes and adding things to those nodes in order

export function render(markdown: string, options: Partial<RenderOptions> = {}): string {

    const render: RenderOptions = {
        ...RenderOptionsDefault,
        ...options
    };


    const output: string[] = [];

    // TODO: iterate through everything

    let lineStart = 0;
    do {
        let lineEnd = markdown.indexOf(Tokens.newLine, lineStart);
        if (lineEnd < 0) {
            lineEnd = markdown.length;
        }
        let currentLine = markdown.slice(lineStart, lineEnd);

        // Handle headings
        const headingTokens = [Tokens.headingOne, Tokens.headingTwo, Tokens.headingThree, Tokens.headingFour, Tokens.headingFive];
        for (let token of headingTokens) {
            if (currentLine.startsWith(token)) {
                const content = currentLine.substring(token.length, lineEnd)
                const rendered = render.headingOne(content);
                output.push(rendered);
                // can only match one token
                break;
            }
        }


        // advance
        lineStart = lineEnd + 1;
    } while( lineStart < markdown.length)


    // TODO: handle additional cases

    const rendered = output.join("\n");
    return rendered;
}
