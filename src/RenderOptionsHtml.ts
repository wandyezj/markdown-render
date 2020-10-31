import { RenderOptions } from "./RenderOptions";

/**
 * Default is HTML
 */
export const RenderOptionsHtml: RenderOptions = {
    headingOne: (heading: string) => htmlHeading(heading, '1'),
    headingTwo: (heading: string) => htmlHeading(heading, '2'),
    headingThree: (heading: string) => htmlHeading(heading, '3'),
    headingFour: (heading: string) => htmlHeading(heading, '4'),
    headingFive: (heading: string) => htmlHeading(heading, '5'),
}

function htmlHeading(contents: string, level: '1'|'2'|'3'|'4'|'5'): string {
    return `<h${level}>${contents}</h${level}>`
}