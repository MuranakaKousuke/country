import Text, { WarningText, InfoText } from '../components/Atoms/Text';
import { COLOR } from '../constants'

const ButtonList = () => {
  return (
    <>
      <Text>デフォルトテキスト</Text>
      <Text fontSize={'30px'}>fontSize30px</Text>
      <Text color={COLOR.ORANGE}>colorOrange</Text>
      <Text fontWeight={'bold'}>fontWeightBold</Text>
      <WarningText>WarningText</WarningText>
      <InfoText>InfoText</InfoText>
    </>
  );
}

export default ButtonList;