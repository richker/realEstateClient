import React, {Component} from "react";
import InputNumber from "./common/inputNumber";
import Selector from "./common/selector";

class PredictForm extends Component {

    typeOptions = [
        {value: "בית בודד", label: "בית בודד"},
        {value: "דירה בבית קומות", label: "דירה בבית קומות"},
        {value: "דירת גג", label: "דירת גג"},
        {value: "דירת גן", label: "דירת גן"},
        {value: "דירת דופלקס", label: "דירת דופלקס"},
        {value: "קוטג' דו-משפחתי", label: "קוטג' דו-משפחתי"},
        {value: "קוטג' טורי", label: "קוטג' טורי"}
    ];

    modelOptions = [
        {value: "Random Forest", label: "Random Forest"},
        {value: "Random Forest - No Soceco", label: "Random Forest - No Soceco"},
        {value: "Linear Regression", label: "Linear Regression"}
    ];

    render() {
        const {data} = this.props;
        const floorOptions = [];
        for (let i = 0; i <= data["floors"]; i++) {
            floorOptions.push({value: i, label: i});
        }
        return (
            <React.Fragment>
                <div className="fullRow" style={{marginBottom: "12px"}}>
                    <Selector
                        options={this.modelOptions}
                        label="Model"
                        value={data["model"]}
                        onChange={this.props.onSelect}
                        name="model"
                        tooltipText="The floor where the property is located in the building"
                    />
                </div>
                <div className="fullRow">
                    <InputNumber
                        label="Year of Construction"
                        name="year_of_construction"
                        value={data["year_of_construction"]}
                        onChange={this.props.onChange}
                        maxLength={4}
                        tooltipText="The year the property was built."
                        min={1900}
                    />
                    <InputNumber
                        label="Floors"
                        name="floors"
                        value={data["floors"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        tooltipText="Number of floors in the building. In a private home, '0' should be marked."
                    />
                    <InputNumber
                        label="Net area"
                        name="shetachneto"
                        value={data["shetachneto"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        tooltipText="(שטח נטו) Property area in square meters"
                        min={0}
                    />
                    <Selector
                        options={floorOptions}
                        label="Floor"
                        value={data["floor"]}
                        onChange={this.props.onSelect}
                        name="floor"
                        tooltipText="The floor where the property is located in the building"
                    />
                    <Selector
                        options={this.typeOptions}
                        label="Property Type"
                        value={data["type"]}
                        onChange={this.props.onSelect}
                        name="type"
                    />
                </div>
                <div className="fullRow" style={{marginTop: 10}}>
                    <InputNumber
                        label="Soceco"
                        name="soceco"
                        value={data["soceco"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        disabled={data["model"].value === "Random Forest - No Soceco"}
                        tooltipText="A socio-economic index of the population of local authorities - based on data from administrative sources."
                    />
                    <InputNumber
                        label="Day"
                        name="day"
                        value={data["day"]}
                        onChange={this.props.onChange}
                        maxLength={4}
                        tooltipText="The day of the transaction."
                        min={1}
                        max={31}
                    />
                    <InputNumber
                        label="Month"
                        name="month"
                        value={data["month"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        tooltipText="The month of the transaction."
                        min={1}
                        max={12}
                    />
                    <InputNumber
                        label="Year"
                        name="year"
                        value={data["year"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        tooltipText="Year of the transaction."
                        min={1900}
                    />
                    <div>
                        <InputNumber
                            label="Gush"
                            name="gush"
                            value={data["gush"]}
                            onChange={this.props.onChange}
                            maxLength={6}
                            minLength={6}
                            tooltipText="The property block, if you do not know you can search the block on the government mapping site by address"
                        />
                        <a href="https://www.mapi.gov.il/Pages/LotAddressLocator.aspx" rel="noopener noreferrer"
                           target="_blank">
                            Find 'Gush' by address
                        </a>
                    </div>
                </div>
                <div className="fullRow">
                    <InputNumber
                        label="Apartments"
                        name="apartments"
                        value={data["apartments"]}
                        onChange={this.props.onChange}
                        maxLength={2}
                        tooltipText="Number of Apartments in the building"
                        min={1}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default PredictForm;
