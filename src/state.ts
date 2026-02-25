import { createRequire } from 'module';


import process from "node:process";
import {getCommands} from "./GetCommand.js";
import {Interface} from "readline";
import {createInterface} from "node:readline";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
     readline: Interface;
     commands: Record<string, CLICommand>;
     output:   Array<string> | undefined;
}

export function initState() :State   {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    let output = undefined;

    return {readline: rl, commands: getCommands(),output};

}