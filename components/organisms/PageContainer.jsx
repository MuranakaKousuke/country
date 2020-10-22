import React from 'react';

import Header from './Header';
import Footer from './Footer';

const PageContainer = ({
  children
}) => {
  return (
    <>
      <Header />
      <div style={{minHeight: '600px'}}>
        {children}
      </div>
      <Footer />
    </>
  );
}
export default PageContainer;