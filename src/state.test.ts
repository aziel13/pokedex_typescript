
import { describe, it, expect , vi ,assertType, expectTypeOf, test} from "vitest";
import {type State, initState, CLICommand} from "./state.js";
import {createInterface, ReadLineOptions} from "node:readline";
import process from "node:process";
import type {Interface} from "readline";
import {getCommands} from "./GetCommand.js";


describe('testInitState', () => {

   // const expected = `Welcome to the Pokedex!\nUsage:\nhelp: Displays a help message\nexit: Exit the Pokedex`

    it('initializes state', () => {

        let expectedCommands : Record<string, CLICommand> = getCommands() ;

        const options : ReadLineOptions = {
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >"
        }

        const thisRl: Interface = createInterface(options);
        let output = undefined;
        let expected: State = {readline: thisRl, commands: expectedCommands, output};

        const actual = initState();

        expectTypeOf(actual).toEqualTypeOf<State>();

        expect(actual.commands.length).equal(expected.commands.length);

        expect(actual.commands.toString()).equal(expected.commands.toString());
        //expect(actual).equal(expected);
       // expect(actual.rl.)
    })

});

