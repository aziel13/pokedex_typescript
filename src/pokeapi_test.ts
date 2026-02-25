import {describe, expect, it, vi} from "vitest";
import {initState, State} from "./state.js";
import {commandMap} from "./commands.js";


describe('testPokeApiFetchLocations', () => {

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


describe('testPokeApiFetchLocation', () => {

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