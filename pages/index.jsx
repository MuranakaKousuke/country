import Link from 'next/link';
import styled from 'styled-components'

export default function Top() {
  return (
    <ul>
      <li><Link href="/headingList"><a>Heading(hタグ)</a></Link></li>
      <li><Link href="/textList"><a>Text(spanタグ)</a></Link></li>
      <li><Link href="/buttonList"><a>Button(buttonタグ)</a></Link></li>
      <li><Link href="/imgList"><a>Img(imgタグ)</a></Link></li>
      <li><Link href="/iconList"><a>Icon(imgタグ)</a></Link></li>
      <li><Link href="/signup"><a>Signup</a></Link></li>
      <li><Link href="/edit"><a>Edit</a></Link></li>
    </ul>
  );
}