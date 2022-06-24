import React from 'react';
import PropTypes from 'prop-types';
import MyProfile from 'components/myprofile';
import Header from 'components/header';
import Footer from 'components/Footer';
import Profile from 'components/data';
import Header2 from 'components/header2';
import ScrollButton from 'components/scroll button';

export function myprt() {
  return (
    <>
      <Header />
      <Header2 />

      <main>
        <MyProfile />
        <Profile />
      </main>
      <ScrollButton />
      <Footer />
    </>
  );
}

myprt.propTypes = {
  t: PropTypes.func,
};

export default myprt;
