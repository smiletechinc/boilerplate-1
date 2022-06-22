import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled('h1')`
  font-size: 30px;
`;

const SubTitle = styled('h2')`
  font-size: 20px;
  margin: 0;
  font-weight: 300;
`;

const Logo = styled('img')`
  width: 110px;
`;

export function MyProfile() {
  return (
    <BannerRoot>
      <Logo src="/static/favicon/317d226c-07b4-45de-a026-02858bb4c87d.jpg" alt="Display Picture" />

      <Title>Muizzah Khan</Title>

      <SubTitle>Software Developer Intern</SubTitle>
    </BannerRoot>
  );
}

MyProfile.propTypes = {
  t: PropTypes.func,
};

export default MyProfile;
