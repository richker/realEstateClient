import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'reactstrap';


class InputNumber extends Component {
    state = {
        isOpen: false
    };

    handleChange = (name, value, onChange) => {
        if (!isNaN(value)) onChange(name, value);
    };

    changeTooltip = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        const {isOpen} = this.state;
        const {label, value, name, onChange, maxLength, tooltipText, ...rest} = this.props;
        return (
            <div className="inputContainer">
                <div className="labelCell">
                    {label} <div className="tooltipContainer" id={name}> <FontAwesomeIcon color={"#cccccc"} style={{marginLeft: 5}} icon={faInfoCircle}/></div>
                    <Tooltip placement="right" isOpen={isOpen} target={name} toggle={this.changeTooltip}>
                        {tooltipText}
                    </Tooltip>
                </div>
                <input className="inputText"
                       type="number"
                       pattern="\d*"
                       maxLength={maxLength}
                       name={name}
                       id={name}
                       value={value}
                       onChange={e => this.handleChange(name, e.currentTarget.value, onChange)}
                       {...rest}
                />
            </div>
        );
    }
}

export default InputNumber;
