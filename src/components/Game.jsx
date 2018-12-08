import React from 'react'
import Board from './Board'


class Game extends React.Component {

  render() {
    const history = this.props.history
    const current = history[this.props.stepNumber]

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpHistory(move)}>{desc}</button>
        </li>
      )
    })

    let status
    if (this.props.winner) {
      status = 'Winner: ' + this.props.winner
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.props.clickSquare(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game