import React from "react";

const About = () => {
    return (
        <div>
            <div className="header">
                About
            </div>
            <div className="paragraph">
                In this project, we developed and evaluate the performance and the predictive power of a model
                trained and tested on data collected from Real Estate sale transactions in Israel.
                We use this model to predict the monetary value of a house located all over Israel.
                A model like this would be very valuable for a real-estate agent who could make use of the information
                provided in a daily basis.
                <br/>
                This site is a joint work of Tal Hadar and Matan Richker, B.A students in the Faculty of Management at
                Tel Aviv University as part of a real estate research seminar led by Professor Dan Ben-Shahar at 'Elrov'
                Institute of Real Estate
                Research.
                <br/>
                <br/>
                <a href="https://github.com/talhadar1/real_estate_price_forecasting/blob/master/real_estat_prediction.ipynb"
                   rel="noopener noreferrer" target="_blank">
                    The Project in Github
                </a>
                <br/>
                <br/>
                <a href="https://github.com/talhadar1" rel="noopener noreferrer" target="_blank">
                    Tal Hadar Github
                </a>
                <br/>
                <br/>
                <a href="https://github.com/richker" rel="noopener noreferrer" target="_blank">
                    Matan Richker Github
                </a>
            </div>
        </div>
    );
};

export default About;
