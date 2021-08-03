import { DAT_CUOC, PLAY_GAME, END_GAME } from '../types/GameType';
const stateDefault = {
    mangBuakeo: [
        {ma: 'keo', hinhAnh: './image/gamebuabaokeo/keo.png',datCuoc: true},
        {ma: 'bao', hinhAnh: './image/gamebuabaokeo/bao.png',datCuoc: false},
        {ma: 'bua', hinhAnh: './image/gamebuabaokeo/bua.png',datCuoc: false},
    ],
    ketQua: 'Game quảnh tù tì',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './image/gamebuabaokeo/keo.png',datCuoc: true}
}

const GameReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_CUOC: {
            let mangCapNhat = state.mangBuakeo.map((item,index) => {
                if(item.ma === action.ma){
                    return {...item, datCuoc: true};
                }else{
                    return {...item, datCuoc: false};
                }
            })
            state.mangBuakeo = mangCapNhat;
            return {...state};
        }
        case PLAY_GAME: {
            let soNgauNhien = Math.floor(Math.random() * 3);
            state.computer = state.mangBuakeo[soNgauNhien];
            return {...state}; 
        }
        case END_GAME: {
            state.soBanChoi += 1;
            let player = state.mangBuakeo.find(item=>item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo': {
                    if(computer.ma === 'bao'){
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng rồi bae !!!'
                    }else if(computer.ma === 'keo'){
                        state.ketQua = 'Hoà rồi bé ơi !!!'
                    }else{
                        state.ketQua = 'Thua rồi con gà !!!'
                    }
                }
                break;
                case 'bao': {
                    if(computer.ma === 'bua'){
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng rồi bae !!!'
                    }else if(computer.ma = 'bao'){
                        state.ketQua = 'Hoà rồi bé ơi !!!'
                    }else{
                        state.ketQua = 'Thua rồi con gà !!!'
                    }
                }
                break;
                case 'bua': {
                    if(computer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng rồi bae !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Hoà rồi bé ơi !!!'
                    }else{
                        state.ketQua = 'Thua rồi con gà !!!'
                    }
                }
                default: state.ketQua = 'Thắng rồi bae !!!'
            }
            return {...state};
        }
        default: return {...state};
    }
}

export default GameReducer;