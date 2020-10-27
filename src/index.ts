namespace Tokens {
    export const headingOne = "# ";
    export const headingTwo = "## ";
    export const headingThree = "### ";
    export const headingFour = "#### ";
    export const headingFive = "##### ";
    export const space = ' ';
    export const newLine = '\n';
}

interface RenderOptions {
    /**
     * Handle output of a heading one
     */
    headingOne: (heading: string) => string;
}

/**
 * output nothing
 */
export const renderOptionsDefault: RenderOptions = {
    headingOne: () => ""
}

/**
 * Default is HTML
 */
export const RenderOptionsHtml: RenderOptions = {
    headingOne: (heading: string) => {
        return `<h1>${heading}</h1>`;
    }
}


// Alternative is nodes and adding things to those nodes in order

export function render(markdown: string, options: Partial<RenderOptions> = {}): string {

    const render: RenderOptions = {
        ...renderOptionsDefault,
        ...options
    };


    const output: string[] = [];

    // TODO: iterate through everything
    let lineStart = 0;
    let lineEnd = markdown.indexOf(Tokens.newLine);
    if (lineEnd < 0) {
        lineEnd = markdown.length;
    }
    let currentLine = markdown.slice(lineStart, lineEnd)
    if (currentLine.startsWith(Tokens.headingOne)) {
        const content = currentLine.substring(lineStart + Tokens.headingOne.length, lineEnd)
        const rendered = render.headingOne(content);
        output.push(rendered);
    }

    // TODO: handle additional cases

    const rendered = output.join("\n");;
    return rendered;
}


function test() {
    const md = `# test`;

    const output = render(md, RenderOptionsHtml);

    console.log(`
    ${md}
    ------------------------------------------------------
    ${output}
    `);
}

test();
