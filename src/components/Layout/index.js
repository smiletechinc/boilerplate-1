import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Banner from 'components/Banner';
import ScrollButton from 'components/scroll button';
import Footer from 'components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <Banner />

        {children}
      </main>

      <Footer />
      <ScrollButton />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
