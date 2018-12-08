export const updateGame = (history, stepNumber, xIsNext) => ({
  type: 'UPDATE_GAME',
  payload: { history, stepNumber, xIsNext }
})

export const jumpHistory = step => ({
  type: 'JUMP_HISTORY',
  payload: {
    stepNumber: step,
    xIsNext: (step % 2) === 0
  }
})

export const clickSquare = i => {
  return (dispatch, getState) => {
    const history = getState().history.slice(0, getState().stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (getState().winner || squares[i]) {
      return
    }
    squares[i] = getState().xIsNext ? 'X' : 'O'

    dispatch(updateGame(
      history.concat([{ squares: squares }]),
      history.length,
      !getState().xIsNext
    ))
  }
}
