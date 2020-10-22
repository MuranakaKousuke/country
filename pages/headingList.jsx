import Heading from '../components/Atoms/Heading';
import { COLOR } from '../constants'

const HeadingList = () => {
  return (
    <>
      <Heading>デフォルト(h1タグ)</Heading>
      <Heading
        level={1}
        visualLevel={2}
      >
        h1タグ(見た目レベル2)
      </Heading>
      <Heading
        level={2}
        visualLevel={1}
        color={COLOR.GREEN}
      >
        h2タグ(見た目レベル1)
      </Heading>
      <Heading
        level={3}
      >
        h3タグ(見た目レベル未指定→見た目レベル3)
      </Heading>
      <Heading
        level={4}
        visualLevel={3}
        color={COLOR.BLUE}
      >
        h4タグ(見た目レベル3)
      </Heading>
      <Heading
        level={5}
        visualLevel={4}
      >
        h5タグ(見た目レベル4)
      </Heading>
      <Heading
        level={6}
        visualLevel={3}
        color={COLOR.ORANGE}
      >
        h6タグ(見た目レベル3)
      </Heading>
    </>
  );
}

export default HeadingList;