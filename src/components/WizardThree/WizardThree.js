import React,  { Component } from 'react';
import {updateProperty} from '../../ducks/reducer'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class WizardThree extends Component {
    render(){
        const {updateProperty} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={(e)=>updateProperty(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={(e)=>updateProperty(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={(e)=>updateProperty(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}
function mapStateToProps(state) {
    //why aren't we assigning values to the city
    const { propToBeUsedOn } = state;
    return {
        propToBeUsedOn
    }
}

export default connect(mapStateToProps, {updateProperty})(WizardThree); 
