import React from 'react';
import PropTypes from 'prop-types';
import MyProfile from 'components/myprofile';
import Header2 from 'components/header2';

export function myprt() {
  return (
    <>
      <Header2 />

      <main>
        <MyProfile />
      </main>
    </>
  );
}

myprt.propTypes = {
  t: PropTypes.func,
};

export default myprt;
