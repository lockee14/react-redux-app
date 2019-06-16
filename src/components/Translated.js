import React from "react";
import { connect } from "react-redux";


const Translated = (props) => { // display the translated text from the user input (props.translate)
    return (
    <div id="translated">
        <p>{props.language.result}:</p>
        <div id="result">{props.translated}</div>
    </div>
)};


const mapStateToProps = state => ({
    translated: state.translate.translated,
    language: state.language
});

export default connect(mapStateToProps)(Translated);