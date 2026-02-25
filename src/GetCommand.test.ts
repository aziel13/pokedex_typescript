
import { describe, it, expect , vi ,assertType, expectTypeOf, test} from "vitest";
import {getCommands} from "./GetCommand.js";
import {CLICommand, State} from "./state.js";



describe('testGetCommands', () => {


    it('tests the getCommands function return', () => {

        const actualRecord  = getCommands();
        expectTypeOf(actualRecord).toEqualTypeOf<Record<string, CLICommand>>();

     //   expect(actualRecord).
    })

});
