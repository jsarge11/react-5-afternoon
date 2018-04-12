import React,  { Component } from 'react';
import {updateCredit} from '../../ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class WizardSeven extends Component {

    render(){
        let {updateCredit} = this.props;

        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e)=>updateCredit(e.target.value)} value="Excellent" >Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit(e.target.value)} value="Good" >Good</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit(e.target.value)} value="Fair">Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit(e.target.value)}  value="Poor">Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { credit } = state;
    return {
     credit
    }
}

export default connect(mapStateToProps, { updateCredit })(WizardSeven);