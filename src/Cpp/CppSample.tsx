import React from "react";
import CppSampleStore from "./CppSampleStore";

interface Props {

}

export class CppSample extends React.Component<Props, any> {
    store = new CppSampleStore();

    render() {
        
        this.store.runner();

        return(
            <div>
                cpp sample
            </div>
        );
    }
}