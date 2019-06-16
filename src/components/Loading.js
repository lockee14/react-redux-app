import React from "react";
import { connect } from "react-redux";
import "./loading.css"

const Loading = (props) => { // display the loading state of a translation
    const loadSpinner = (
    <div id="Loading">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        <div className="lds-inner-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    );
    return (
    <div>
        {props.loading ? loadSpinner : null}
    </div>
)};

const mapStateToProps = state => ({loading: state.translate.loading});

export default connect(mapStateToProps)(Loading);