import React, { Component } from 'react';
import './GameBuaBaoKeo.css';
import Player from './Player';
import KetQua from './KetQua';
import Computer from './Computer';

export default class GameBuaBaoKeo extends Component {
    render() {
        return (
            <div className="background-game">
               <div className="container mt-2">
                    <div className="row">
                        <div className="col-3">
                            <Player />
                        </div>
                        <div className="col-6">
                            <KetQua />
                        </div>
                        <div className="col-3">
                            <Computer />
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

