import domUpdates from './domUpdates.js'

class Player {
    constructor(name, playerId) {
        this.name = name;
        this.score = 0;
        this.playerId = playerId;
    }

    addScore(scoreAmt) {
        let newScore = this.score += scoreAmt;
        domUpdates.changeScore(newScore, this.playerId);
    }

    lightningScore(scoreAmt, multiplier) {
        this.score += (scoreAmt * multiplier);
        domUpdates.changeScore(this.score, this.playerId);
    }
}

export default Player;