import React, {Component} from "react";
import Select from "react-select";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip} from "reactstrap";


class Selector extends Component {
    state = {
        isOpen: false
    };

    changeTooltip = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        const {isOpen} = this.state;
        const {label, name, value, options, onChange, tooltipText, ...rest} = this.props;
        return (
            <div className="inputContainer">
                <div className="labelCell">{label}
                {name !== "type" &&
                <React.Fragment>
                    <div className="tooltipContainer" id={name}>
                        <FontAwesomeIcon color={"#cccccc"} style={{marginLeft: 5}} icon={faInfoCircle}/>
                    </div>
                    <Tooltip placement="right" isOpen={isOpen} target={name} toggle={this.changeTooltip}>
                        {tooltipText}
                    </Tooltip>
                </React.Fragment>
                }
                </div>
                <Select className="basic-select" {...rest} options={options} name={name}
                        value={value} onChange={onChange}/>
            </div>
        );
    }
}


export default Selector;
