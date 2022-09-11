import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreNav,
  Heading,
  Score,
  UnList,
  Image,
  ResultsContainer,
  Results,
  Button,
  RulesContainer,
} from './styledComponents'

import RocketPaperScissorBtn from '../RockPaperScissorBtn'
import './index.css'

class GamePage extends Component {
  state = {userSelect: '', opponentSelect: '', score: 0, status: ''}

  userSelectionUpdate = Id => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    console.log(index)
    const opponentChoice = choicesList[index].id
    this.setState(
      {userSelect: Id, opponentSelect: opponentChoice},
      this.resultsMsg,
    )
  }

  initialImages = () => {
    const {choicesList} = this.props

    return (
      <UnList>
        {choicesList.map(eachList => (
          <RocketPaperScissorBtn
            choice={eachList}
            key={eachList.id}
            userSelectionUpdate={this.userSelectionUpdate}
          />
        ))}
      </UnList>
    )
  }

  // -------------------------------------------------

  winningMsg = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
    this.setState({status: 'YOU WON'})
  }

  lostMsg = () => {
    this.setState(prevState => ({
      score: prevState.score - 1,
    }))
    this.setState({status: 'YOU LOSE'})
  }

  drawMsg = () => {
    this.setState({status: 'IT IS DRAW'})
  }

  // -----------------------------------------------------

  resultsMsg = () => {
    const {userSelect, opponentSelect} = this.state
    if (userSelect === 'ROCK') {
      switch (opponentSelect) {
        case 'SCISSORS':
          this.winningMsg()
          break
        case 'PAPER':
          this.lostMsg()
          break
        default:
          this.drawMsg()
      }
    } else if (userSelect === 'PAPER') {
      switch (opponentSelect) {
        case 'ROCK':
          this.winningMsg()
          break
        case 'SCISSORS':
          this.lostMsg()
          break
        default:
          this.drawMsg()
      }
    } else if (userSelect === 'SCISSORS') {
      switch (opponentSelect) {
        case 'PAPER':
          this.winningMsg()
          break
        case 'ROCK':
          this.lostMsg()
          break
        default:
          this.drawMsg()
      }
    }
  }

  //------------------------------------------------------------

  restartGame = () => {
    this.setState({userSelect: '', opponentSelect: '', status: ''})
  }

  // ---------------------------------------------------------

  resultImage = () => {
    const {userSelect, opponentSelect, status} = this.state
    const {choicesList} = this.props
    const userImage = choicesList.filter(Each => Each.id === userSelect)
    const opponentImage = choicesList.filter(Each => Each.id === opponentSelect)
    console.log(status)

    return (
      <Results>
        <ResultsContainer>
          <Image src={userImage[0].imageUrl} alt="your choice" />
          <Image src={opponentImage[0].imageUrl} alt="opponent choice" />
        </ResultsContainer>
        <p>{status}</p>
        <Button type="button" onClick={this.restartGame}>
          Play again
        </Button>
      </Results>
    )
  }

  //------------------------------------------------------------------

  render() {
    const {score, userSelect, opponentSelect, status} = this.state
    console.log(score, userSelect, opponentSelect, status)
    const isTrue = userSelect.length !== 0 && opponentSelect.length !== 0

    return (
      <MainContainer>
        <div>
          <ScoreNav>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
            <Score>
              Score <br />
              {score}
            </Score>
          </ScoreNav>
        </div>
        {isTrue ? this.resultImage() : this.initialImages()}
        <RulesContainer>
          <div>
            <Popup
              modal
              className="popup-content"
              trigger={<Button>Rules</Button>}
            >
              {close => (
                <div className="buttonContainer">
                  <button
                    className="closeBtn"
                    type="button"
                    onClick={() => close()}
                  >
                    <RiCloseLine size={20} />
                  </button>

                  <div className="rulesPopupImageContainer">
                    <img
                      className="rulesImage"
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="Rules"
                    />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </RulesContainer>
      </MainContainer>
    )
  }
}
export default GamePage
