import {commandExit, commandHelp, commandMap} from "./commands.js";

import { describe, it, expect , vi } from "vitest";
import {CLICommand, initState, State} from "./state.js";
import {getCommands} from "./GetCommand.js";



describe('testHelpCommand', () => {


    let state: State = initState();

    let expected = "Welcome to the Pokedex!\nUsage:";
    //  let commands :  Array<CLICommand> = new Array<CLICommand>();

    let expectedRecord : Record<string, CLICommand> = getCommands() ;

    for ( const key in expectedRecord) {
        const value = expectedRecord[key];
        expected +=  `${value.name}\n${value.description}\n`;
    }

    it('shows the help message', () => {

        const commandHelpSpy = vi.spyOn(console, "log");
        commandHelp(state);

        expect(commandHelpSpy).toHaveBeenCalledOnce();
        expect(commandHelpSpy).toHaveBeenCalledWith(expected)


    })

});

describe('testExitCommand', () => {

    const expected = `exit`
    let state: State = initState();

    it('tests the exit message', () => {

        const actual = commandExit(state);

        expect(actual).equal(expected);

    })

});



describe('testHelpCommandConsoleOutput', () => {


    let state: State = initState();

    let expected = "Closing the Pokedex... Goodbye!";
    //  let commands :  Array<CLICommand> = new Array<CLICommand>();


    it('shows the help message', () => {

        const commandHelpSpy = vi.spyOn(console, "log");
        commandExit(state);

        expect(commandHelpSpy).toHaveBeenCalledOnce();
        expect(commandHelpSpy).toHaveBeenCalledWith(expected)


    })

});


describe('testMapCommandConsoleOutput', () => {


    let state: State = initState();

    let expected = "";
    //  let commands :  Array<CLICommand> = new Array<CLICommand>();


    it('shows the help message', () => {

        const commandHelpSpy = vi.spyOn(console, "log");
        commandMap(state);

        expect(commandHelpSpy).toHaveBeenCalledOnce();
        expect(commandHelpSpy).toHaveBeenCalledWith(expected)


    })

});
