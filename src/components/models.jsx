import React from "react";

const Models = () => {
    return (
        <div>
            <div className="header">
                Our models
            </div>
            <div className="paragraph">
                In order to use machine learning models, we used the Scikit-learn Python library. Scikit-learn is a free
                machine learning library for Python. It features various algorithms like support vector machine, random
                forests, and k-neighbours, and it also supports Python numerical and scientific libraries like NumPy and
                SciPy.
                <br/>
                <br/>
                <u>The models we used are:</u>
                <br/>
                <b>1. Random Forest</b> - The model is the ensemble of decision trees. Each decision tree, in the ensemble,
                process the sample and predicts the output (in our case the transaction price).
                Decision trees in the ensemble are independent. Each can predict the final response.
                <br/>
                Predictions statistics random forest reggresion:
                <br/>
                <ul>
                <li>Mean Absolute Error (MAE): 281485.11</li>
                <li>Mean Squared Error (MSE): 296522581474.82</li>
                <li>Root Mean Squared Error (RMSE): 544538.87</li>
                <li>Mean Absolute Percentage Error (MAPE): 32001.85</li>
                </ul>
                <br/>
                <b>2. Random Forest</b> - without 'Soceco' feature
                <br/>
                Predictions_no_soceco statistics random forest reggresion without "soceco":
                <br/>
                <ul>
                    <li>Mean Absolute Error (MAE): 393878.64</li>
                    <li>Mean Squared Error (MSE): 440536550305.92</li>
                    <li>Root Mean Squared Error (RMSE): 663729.27</li>
                    <li>Mean Absolute Percentage Error (MAPE): 37160.08</li>
                </ul>
                <br/>
                <b>3. Linear Regression</b> - is a machine learning algorithm based on supervised learning. It performs a
                regression task. Regression models a target prediction value based on independent variables.
                <br/>
                <br/>
                <br/>
                <b><u>Feature importance:</u></b>
                <br/>
                <b>1. shetachneto:</b> 0.368715336393408<br/>
                <b>2. soceco:</b> 0.2655825738641845<br/>
                <b>3. year_of_construction:</b> 0.07772949054093595<br/>
                <b>4. year:</b> 0.0662925439619099<br/>
                <b>5. floors:</b> 0.0504937581092814<br/>
                <b>6. floor:</b> 0.03950589312307701<br/>
                <b>7. dirotbnyn:</b> 0.026526906276863646<br/>
                <b>8. day:</b> 0.014155467394533685<br/>
                <b>9. month:</b> 0.011354906753438896<br/>
                <b>10.gush_007104:</b> 0.008898016659466837
            </div>

        </div>
    );
};

export default Models;
