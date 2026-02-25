import { type State } from "./state.js";
import {getCommands} from "./GetCommand.js";


export function startREPL( state: State): void {

        state.readline.prompt();

        state.readline.on("line", async (input) => {
           const words = cleanInput(input);
           if (words.length == 0) {
               state.readline.prompt();
               return;
           }

           const commandName = words[0];

           const commands = getCommands();

           if(!commands[commandName]) {
               console.error(`${commandName} Command not found`);

               state.readline.prompt();
               return;

           }

           commands[commandName].callback(state);

           let output = state.output;

            if(output != undefined){

                if(output.length > 0 && output[0] == "exit")
                {
                    state.readline.close();
                    return;
                }
            }

            state.readline.prompt();



        });

    return ;
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


