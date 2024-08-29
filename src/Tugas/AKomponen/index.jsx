import React from "react";
import ClassComponents from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionComponents";

class AKomponen extends React.Component {

    render(){
        return(
            <div>
                <ClassComponents nama="Hendrik"/>
                <FunctionalComponent nama="Nurdianto"/>
            </div>
        )
    }
}

export default AKomponen;