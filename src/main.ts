// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState, type State } from "./state.js";
async function main() {

    const state =  initState() ;
    //console.log("Hello, world!");

    startREPL(state);

    let output = state.output;

    if(output != undefined){

        if(output.length > 0 && output[0] == "exit")
        {

            process.exit(0);

        }
    }



}

main();