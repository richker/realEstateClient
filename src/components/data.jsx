import React, {Component} from "react";
import spearmanImg from '../assets/img/spearmanImg.png';
import pearsomImg from '../assets/img/pearsomImg.png';
import dataTable from '../assets/img/dataTable.jpeg';

class Data extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    About the Data
                </div>
                <div className="paragraph">
                    Real estate transaction dataset used in this project comes from Prof. Danny Ben-Shahar and
                    originates from the 'Elrov' Institute of Real Estate Research at the Faculty of Management at Tel
                    Aviv University,

                    This data was collected in between January 2008 to September 2019 and each of the 600,000 entries
                    represents aggregate information about 10 features of homes from various cities and their suburbs in
                    Israel.
                    <br/>
                    <br/>
                    The features can be summarized as follows:
                    <ul>
                        <li><b>Year of Construction:</b> The year the property was built.</li>
                        <li><b>Floors:</b> Number of floors in the building. In a private home, '0' should be marked.
                        </li>
                        <li><b>Net area:</b> Property area in square meters</li>
                        <li><b>Floor:</b> The floor where the property is located in the building</li>
                        <li><b>Type:</b> Property Type</li>
                        <li><b>Gush:</b> The property block, if you do not know you can search the block on the
                            government mapping site by address
                        </li>
                        <li><b>Soceco:</b> A socio-economic index of the population of local authorities - based on data
                            from administrative sources.
                        </li>
                        <li><b>Day:</b> The day of the transaction</li>
                        <li><b>Month:</b> The month of the transaction</li>
                        <li><b>Year:</b> Year of the transaction</li>
                    </ul>
                    <br/>
                    This is an overview of the original dataset, with its original features:
                    <br/>
                    <img alt="" src={dataTable} width={"100%"} />
                    <small>The prices, addresses, property area, transaction dates and addresses in this table do not
                        contain any real information from the database. All data in this table was entered manually by
                        us so as not to violate the confidentiality and of the database.
                    </small>
                    <br/>
                    <br/>
                    <div style={{textAlign:"center"}}><b>Features Correlation matrix</b></div>
                    <br/>
                    <div style={{display:"flex"}}>
                        <img alt="" src={pearsomImg} width={"50%"} />
                        <img alt="" src={spearmanImg} width={"50%"} />
                    </div>
                    <br/>
                    <br/>
                    <a href="https://alrov.tau.ac.il/" target="_blank" rel="noopener noreferrer">
                        Elrov Institute, Tel-Aviv university
                    </a>
                </div>
            </div>
        );
    }
}

export default Data;
