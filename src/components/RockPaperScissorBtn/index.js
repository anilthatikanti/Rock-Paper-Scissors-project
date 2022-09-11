import {List, Button, Image} from './styledComponents'

const RocketPaperScissorBtn = props => {
  const {choice, userSelectionUpdate} = props
  const {id, imageUrl} = choice

  const userInput = () => {
    userSelectionUpdate(id)
  }

  const processTextId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'

      case 'PAPER':
        return 'paperButton'

      case 'SCISSORS':
        return 'scissorsButton'

      default:
        return 'null'
    }
  }

  return (
    <List>
      <Button type="button" onClick={userInput} data-testid={processTextId()}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </List>
  )
}
export default RocketPaperScissorBtn
