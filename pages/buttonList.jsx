import Button from '../components/Atoms/Button';
import { COLOR } from '../constants'

const ButtonList = () => {
  return (
    <>
      <Button>デフォルトボタン</Button>
      <Button
        width='150px'
        borderRadius='20px'
        backgroundColor={COLOR.GREEN}
        padding='2rem'
        onClick={() => window.alert('GREEN')}
      >
        ボタン
      </Button>
      <Button
        width='125px'
        borderRadius='15px'
        backgroundColor={COLOR.BLUE}
        padding='1rem'
        onClick={() => window.alert('BLUE')}
      >
        ボタン
      </Button>
      <Button
        width='100px'
        borderRadius='10px'
        backgroundColor={COLOR.ORANGE}
        padding='0rem'
        onClick={() => window.alert('ORANGE')}
      >
        ボタン
      </Button>
    </>
  );
}

export default ButtonList;