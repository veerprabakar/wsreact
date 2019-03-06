import BaseStore from "../Base/BaseStore";

export class CppSampleStore extends BaseStore  {
    runner() {
        console.warn('Running C');
        require("webassembly")
            .load("program.wasm")
            .then((module: any) => {
                console.log("1 + 2 = " + module.exports.add(1, 2));
            });
    }
}

export default CppSampleStore;