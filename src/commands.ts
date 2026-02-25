import {CLICommand, State} from "./state.js";
import {getCommands} from "./GetCommand.js";

export function commandExit(state: State) : string {

    console.log("Closing the Pokedex... Goodbye!");

    let output :  Array<string>= ['exit'];
    state.output = output;


    return 'exit';
}
export function commandHelp(state:State):  string {

    let helpText = "Welcome to the Pokedex!\nUsage:";

    let expectedRecord : Record<string, CLICommand> = getCommands() ;

    for ( const key in expectedRecord) {
        const value = expectedRecord[key];
        helpText += `${value.name}\n${value.description}\n`;
    }

    console.log(helpText);

    return helpText;
}

export function commandMap(state:State): string {

    let helpText = "Welcome to the Pokedex!\nUsage:";

    

    return helpText;
}
