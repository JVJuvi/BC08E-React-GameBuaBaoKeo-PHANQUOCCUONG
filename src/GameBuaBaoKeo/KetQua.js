import React, { Component } from 'react';
import {connect} from 'react-redux';
import { playGame, endGame } from '../redux/actions/GameAction';

class KetQua extends Component {
    render() {

        let{soBanChoi, soBanThang, ketQua} = this.props.GameReducer;
        return (
            <div className="text-center mt-2">
                <h1 className="text-warning display-4">{ketQua}</h1>
                <h1 className="text-success">Số bàn thắng: <span className="text-warning">{soBanThang}</span></h1>
                <h1 className="text-success">Số bàn chơi: <span className="text-warning">{soBanChoi}</span></h1>
                <button className="btn btn-success" onClick={()=>{
                    let count = 0
                    let itemComputer = setInterval(()=>{
                        this.props.dispatch(playGame())
                        count++;
                        if(count>10){
                            clearInterval(itemComputer)
                            this.props.dispatch(endGame())
                        }
                    },100)
                }}>Play game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        GameReducer: state.GameReducer
    }
}

export default connect(mapStateToProps)(KetQua)
