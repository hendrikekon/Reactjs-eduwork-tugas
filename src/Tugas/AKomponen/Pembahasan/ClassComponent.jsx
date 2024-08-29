import React from 'react';
import propTypes from 'prop-types';

class ClassComponents extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 0
    //     }

    //     // this.handleClickPlus = this.handleClickPlus.bind(this);
    //     // this.handleClickMinus = this.handleClickMinus.bind(this);
    //     // note: function biasa butuh bind this, arrow function tidak butuh bind this
    // }

    state = {
        value: 0
    }

    handleClickPlus = () => {
        this.setState({value: this.state.value + 1});
    }
    
    handleClickMinus = () => {
        if (this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    render() {
        return (
            <div>
                <h1>Hello Iam {this.props.nama},  I am learning Class Components</h1>
                <p>This is a class component example.</p>
                <button onClick={this.handleClickMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handleClickPlus}>+</button>
            </div>
        );
    }
}

ClassComponents.propTypes = {
    nama: propTypes.string.isRequired
}

export default ClassComponents;