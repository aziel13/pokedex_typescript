import * as process from "node:process";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createInterface } = require('node:readline');

const rl = createInterface({
    input: process.stdin,  // Standard input stream (keyboard)
    output: process.stdout, // Standard output stream (console)
    prompt: "Pokedex >"
});

export function startREPL(): void {

    rl.prompt();
    rl.on('line', (input: string) => {

        if (input.trim() === "") {
            rl.prompt();
        } else {

            let clean: string[] = [];

            clean = cleanInput (input);

            console.log(`Your command was: ${clean[0]}`);
            rl.prompt();
        }

    });
}

export function cleanInput(input: string): string[] {

    let output: string[] = [];

    let splitString: string[] = input.split(" ");

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].trim() === "") {continue}

        let word = splitString[i];
        word = word.toLowerCase().trim();

        output = output.concat(word);
    }

    return output;

}