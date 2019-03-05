
export class AppStore {
    
    runit() {
        console.warn('runit>>>');
        require("webassembly")
            .load("program.wasm")
            .then((m: any) => {
                console.warn("1 + 2 = " + m.exports.add(1, 2));
            });
    }
}

export default AppStore;