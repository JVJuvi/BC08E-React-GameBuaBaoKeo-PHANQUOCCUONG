import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datCuoc } from '../redux/actions/GameAction';

class Player extends Component {

    renderImage = () => {
        return this.props.mangBuakeo.map((item,index) => {
            return (
                <button className="mr-2" key={index}>
                    <img src={item.hinhAnh} width={50} height={50} onClick={()=>{
                        this.props.dispatch(datCuoc(item.ma))
                    }} />
                </button>
            )
        })
    }

    render() {
        return (
            <div className="character">
                <div className="hienThi">
                    <img style={{marginTop: '18px', marginLeft: '42px'}} width={50} height={50}  src={this.props.mangBuakeo.find(item=>item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./image/gamebuabaokeo/player.png" width={200} height={200} />
                <div>
                    {this.renderImage()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangBuakeo: state.GameReducer.mangBuakeo
    }
}

export default connect(mapStateToProps)(Player)
