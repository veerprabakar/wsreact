// import * as gowasm from './wasm_exec.js';

// export const rungo = (filename) => {
//     const go = new gowasm();
//     WebAssembly.instantiateStreaming(fetch(filename), go.importObject)
//         .then((result) => {
//             go.run(result.instance);
//         });
// }