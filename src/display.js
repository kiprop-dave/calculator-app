import React from "react";

export default function Display(props){
    const query = props.query
    const result = props.result
    return (
        <div className="calculator--display">
            <div className="calculator--query">{query}</div>
            <div className="calculator--result">{result}</div>
        </div>
    );
}
