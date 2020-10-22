import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div style={{backgroundColor: 'green', textAlign: 'right'}}>
      <Link href='/'><a>TOP</a></Link>
    </div>
  );
}

export default Footer;