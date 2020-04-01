import React, {Component} from "react";
import PredictForm from "./predictForm";
import http from "../services/httpService";
import {toast} from "react-toastify";

class PredictView extends Component {
    state = {
        inputData: {
            'year_of_construction': 1999,
            'floors': 5,
            'shetachneto': 200,
            'type': {value: 'דירה בבית קומות', label: 'דירה בבית קומות'},
            'floor': {value: 1, label: 1},
            'gush': 7107,
            'soceco': 0,
            'year': 2018,
            'month': 1,
            'day': 1,
            'apartments': 1,
            'model': {value: "Random Forest", label: "Random Forest"}
        },
        resultPrice: null,
        spinner: false
    };

    handleChange = (name, value) => {
        const inputData = {...this.state.inputData};
        inputData[name] = value;
        this.setState({inputData})
    };

    handleSelect = (newValue, actionMeta) => {
        const inputData = {...this.state.inputData};
        inputData[actionMeta.name] = newValue;
        this.setState({inputData});
    };

    handleSubmit = async () => {
        this.setState({spinner: true, resultPrice: null});
        const {inputData} = this.state;
        let data = {...inputData};
        data.type = data.type.value;
        data.floor = data.floor.value;
        data.model = data.model.value;
        data.gush = data.gush.toString();
        console.log("inputData", data);
        try {
            const result = await http.post("https://realestateserver.appspot.com/", data);
            if (result.data) {
                console.log(`server result is`);
                console.log(result);
                this.setState({resultPrice: result.data, spinner: false})
            } else {
                toast.error(`Server Error, try again`)
            }
        } catch (e) {
            console.error(e.name + ': ' + e.message);
            toast.error(`Error: ${e.name}`)
        }
    };

    render() {
        const {inputData, resultPrice, spinner} = this.state;
        let price;
        if (resultPrice) {
            price = new Intl.NumberFormat({style: 'currency', currency: 'ILS'}).format(resultPrice);
        }
        return (
            <div className="view">
                <PredictForm
                    data={inputData}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                />
                <div className="buttonContainer">
                    <div className="button" onClick={this.handleSubmit}>Predict</div>
                    {spinner && <small style={{marginTop: 10}}>
                        The prediction takes a few seconds. If the result does not appear after one minute, refresh the
                        page.
                    </small>}
                </div>
                {resultPrice && <div className="resultContainer">
                    Our model predicts that the value of the property is: {price} ILS
                </div>}
            </div>
        );
    }
}

export default PredictView;
