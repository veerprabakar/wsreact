import BaseStore from "../Base/BaseStore";

const errCodes: Map<number, string> = new Map();
errCodes.set(0, 'Nullptr');
errCodes.set(1, 'DebugMsg');
errCodes.set(2, 'ValueNotFound');

export class CppSampleStore extends BaseStore  {
    

    async runner() {
        console.warn('Running C');
        // require("webassembly")
        //     .load("fibo.wasm")
        //     .then((m: any) => {
        //         console.warn(m.fibo(1000));
        //     });

        // fetch('main.wasm').then(response =>
        // response.arrayBuffer()
        // ).then(bytes =>
        //    this.WebAssembly.instantiate(bytes, importObject)
        // ).then(results => {
        //     results.instance.exports.exported_func();
        // });

        await this.instantiateWasm("naive.wasm");
        // let instance;
        // let content;
        // fetch('fibo.wasm').then(response =>
        //     response.arrayBuffer()
        // ).then(bytes => WebAssembly.instantiate(bytes, importObject)).then(results => {
        //     instance = results.instance;
        //     console.warn(instance);
        //     content = instance.exports.main();
        // }).catch(console.error);
        // console.warn(content);
    }

    private async instantiateWasm(url: string) {
        // fetch the wasm file
        const wasmFile = await fetch(url);

        // convert it into a binary array
        const buffer = await wasmFile.arrayBuffer();
        const binary = new Uint8Array(buffer);

        // create module arguments 
        // including the wasm-file
        const moduleArgs = {
            wasmBinary: binary,
            onRuntimeInitialized: () => {
                // TODO
            }
        };

        const importObject = {
            env: {
                memoryBase: 0,
                tableBase: 0,
                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
                _acosf: Math.acos,
                _sinf: Math.sin,
                _fmodf: function (a, b) { return a % b; }
            },
            abortStackOverflow: () => { throw new Error('overflow'); },
            abort: alert
        };

        console.warn(buffer);
        let result = WebAssembly.instantiate(buffer, importObject);
        console.warn(result);
        
        // instantiate the module
        // this.module = Module(moduleArgs);
    }
}
    
export default CppSampleStore;