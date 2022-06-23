import React from 'react';
import PropTypes from 'prop-types';
import MyProfile from 'components/myprofile';
import Header from 'components/header';
import Footer from 'components/Footer';
import Profile from 'components/data';

export function myprt() {
  return (
    <>
      <Header />

      <main>
        <MyProfile />
        <Profile />
      </main>

      <Footer />
    </>
  );
}

myprt.propTypes = {
  t: PropTypes.func,
};

export default myprt;
