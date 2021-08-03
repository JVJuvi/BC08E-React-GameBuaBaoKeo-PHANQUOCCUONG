import { DAT_CUOC, PLAY_GAME, END_GAME } from '../types/GameType';


export const datCuoc = (ma) => {
    return {
        type: DAT_CUOC,
        ma
    }
}

export const playGame = () => {
    return {
        type: PLAY_GAME,
    }
}

export const endGame = () => {
    return {
        type: END_GAME,
    }
}