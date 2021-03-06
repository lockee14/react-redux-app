import React from "react";
import { connect } from "react-redux";
import { setCORS } from "google-translate-api-browser";
import { translation } from "../actions/translation";
import { loading } from "../actions/loading";

// text field where a user can translate some text from english to french
const ToTranslate = (props) => (
    <div id="toTranslate">
        <p>{props.language.transHere}:</p>
        <input type="submit" value={props.language.trans} onClick={(e) => handleForm(e, props)}/>
        <br/>
        <textarea id="translate" name="story" rows="15" cols="60">
        </textarea>
    </div>
);

function handleForm(e, props) { // translate text from the user then send it to the store
    props.loading(true);
    const textArea = document.getElementById('translate');
    const translate = setCORS("http://cors-anywhere.herokuapp.com/");
    translate(textArea.value, { from: "en", to: "fr" })
        .then(res => {
            props.translation(res.text);
            props.loading(false);
        })
        .catch(err => {
            props.loading(false);
            console.error('TRANSLATE ERROR: ', err);
        });
}

const mapStateToProps = state => (
    {
        language: state.language,
    }
);

const mapDispatchToProps = dispatch => ({
    translation: (t) => dispatch(translation(t)),
    loading: (b) => dispatch(loading(b))
});


export default connect(mapStateToProps, mapDispatchToProps)(ToTranslate);
