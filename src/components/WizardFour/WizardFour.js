import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFound } from '../../ducks/reducer'
import { connect } from 'react-redux'

class WizardFour extends Component {
    render(){
        const { updateFound } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={(e)=>updateFound(e.target.value)} value="Yes" >Yes</button></Link>
                        <Link to="/wFive"><button onClick={(e)=>updateFound(e.target.value)}value="No" >No</button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    let { found } = state;
    return {
        found
    }
}

export default connect(mapStateToProps, { updateFound })(WizardFour);