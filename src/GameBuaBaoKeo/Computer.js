import React, { Component } from 'react';
import {connect} from 'react-redux';

class Computer extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 50px;}
            50% {top: -50px;}
            75% {top: 50px;}
            100% {top: 0px;}
          }`
        return (
            <div className="character">
                <div className="hienThi position-relative">
                    <style>{keyFrame}</style>
                <img style={{marginTop: '18px', marginLeft: '42px',animation: `randomItem${Date.now()} 0.3s`,position: 'absolute' }} width={50} height={50}  src={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./image/gamebuabaokeo/playerComputer.png" width={200} height={200} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.GameReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
