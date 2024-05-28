/* eslint-disable linebreak-style */
import React from "react";
import TexView from "./TextView";
import Inputs from "./Inputs";

function ChallangePage() {
    return (
        <div className="block div-form">
            <div className="block">
                <TexView />
            </div>
            <div className="block">
                <Inputs />
            </div>
        </div>
    );
}

export default ChallangePage;