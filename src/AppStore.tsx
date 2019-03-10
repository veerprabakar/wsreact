
export class AppStore {
    
    runit() {
        console.warn('runit>>>');
        require("webassembly")
            .load("main.wasm")
            .then((m: any) => {
                module.exports.main();
            });
    }
}

export default AppStore;