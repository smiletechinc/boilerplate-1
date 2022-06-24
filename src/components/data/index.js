import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 1rem;
  max-width: 1024px;
`;

const FeaturesRoot = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 27.136px;
`;

const FeaturesList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const FeaturesListContainer = styled('div')`
  grid-column: 1 / span 12;
`;

const FeatureItem = styled('div')`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 72px;
`;

const Title = styled('h3')`
  font-size: 20px;
  font-family: 'Metropolis';
  font-weight: 600;
  margin: 0;
`;

const Content = styled('p')`
  line-height: 1.65;
  font-weight: 400;
`;

export function Profile({ t }) {
  return (
    <Container id="Profile">
      <FeaturesRoot>
        <FeaturesListContainer>
          <FeaturesList>
            <FeatureItem>
              <Title>Education</Title>

              <Content>{t('muizzah.Education')}</Content>
            </FeatureItem>

            <FeatureItem>
              <Title>Experience</Title>

              <Content>{t('muizzah.Experience')}</Content>
            </FeatureItem>
          </FeaturesList>
        </FeaturesListContainer>
      </FeaturesRoot>
    </Container>
  );
}

Profile.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('info')(Profile);
