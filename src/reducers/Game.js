function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
}

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true,
  winner: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GAME': {
      const newHistory = action.payload.history
      const newStepNumber = action.payload.stepNumber
      return {
        history: newHistory,
        stepNumber: newStepNumber,
        xIsNext: action.payload.xIsNext,
        winner: calculateWinner(newHistory[newStepNumber].squares)
      }
    }
    case 'JUMP_HISTORY': {
      const newStepNumber = action.payload.stepNumber
      return {
        ...state,
        stepNumber: newStepNumber,
        xIsNext: action.payload.xIsNext,
        winner: calculateWinner(state.history[newStepNumber].squares)
      }
    }
    default:
      return state
  }
}