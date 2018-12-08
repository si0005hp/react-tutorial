import { connect } from 'react-redux'
import Game from '../components/Game'
import * as actions from '../actions/Game'


const mapStateToProps = (state, ownProps) => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner,
})

const mapDispatchToProps = dispatch => ({
  clickSquare(i) {
    dispatch(actions.clickSquare(i))
  },
  jumpHistory(step) {
    dispatch(actions.jumpHistory(step))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)