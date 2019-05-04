import React, {Component} from 'react';
import {connect}from 'react-redux'
import {changeAddress} from '../redux/userReducer'
class AddressComponent extends Component {

    static defaultProps = {
        address : 'default Address'
    }

    render() {
        return <div>
                    {this.props.address}
                    <button onClick={this.props.changeAddress}>change Address</button>
                </div>    
    }
}
const mapStateToProps = (state) => {
    return  {
        address: state.user.address
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAddress : () => dispatch(changeAddress('new Address'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent);