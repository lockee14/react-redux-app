import React from "react";
import { connect } from "react-redux";


const Translated = (props) => {
    return (
    <div id="translated">
        <p>{props.language.result}:</p>
        <div id="result">{props.translate}</div>
    </div>
)};


const mapStateToProps = state => ({
    translate: state.translate.translated,
    language: state.language
});

export default connect(mapStateToProps)(Translated);