import {getCommands} from "./GetCommand.js";

vi.mock('./myModule', () => ({
    startREPL: vi.fn().mockReturnValue('mocked startREPL function'), // Set return value here
}));

import {cleanInput, startREPL} from "./repl.js";

import {describe, expect, expectTypeOf, it, test, vi} from "vitest";
import {CLICommand, initState, State} from "./state.js";

import * as readline from 'node:readline/promises';
import process from "node:process";


describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "  One  tWo thRee typEscript ",
        expected: ["one", "two", "three","typescript"],
    },
    // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        // TODO: call cleanInput with the input here
        let actual = cleanInput(input);
        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});



describe('test startREPL', () => {

    // const expected = `Welcome to the Pokedex!\nUsage:\nhelp: Displays a help message\nexit: Exit the Pokedex`
    vi.mock ('node:readline/promises', () => {
        return {

            createInterface: vi.fn(() => ({
                question: vi.fn(),
                close: vi.fn(),
            })),
        };
    });

    it('test startREPL', async () => {
        const mockedInput = 'exit';

        const mockQuestion = vi.fn().mockResolvedValue(mockedInput);

        const mockInterface = {
            question: mockQuestion,
            close: vi.fn(),

        }

        vi.spyOn(readline, 'createInterface').mockReturnValue(mockInterface as any);

        let commands :  Array<CLICommand> = new Array<CLICommand>();

        let expectedRecord : Record<string, CLICommand> = getCommands() ;

        for ( const key in expectedRecord) {
            const value = expectedRecord[key];
            commands.push(value);
        }

        let expected = 'exit'

        const state =  initState();

        const actual = await startREPL(state);

        expect(actual).equal(mockedInput);



        expect(actual).toEqual(expected);

        vi.restoreAllMocks()
    })

});
