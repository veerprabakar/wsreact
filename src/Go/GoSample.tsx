import React from "react";
import CppSampleStore from "./GoSampleStore";

interface Props {

}

export class GoSample extends React.Component<Props, any> {
    store = new CppSampleStore();

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "wasm_exec.js";

        // script.onload = (function () {
        //     this.setState({ loaded: true })
        // }).bind(this);
    }

    render() {
        this.store.runit();
        return(
            <div>
                Go Sample
            </div>
        );
    }
}

export default GoSample;