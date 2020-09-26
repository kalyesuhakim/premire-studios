import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="PREMIRE Studios"
        content="Principles and Purpose of Editing The purpose of editing is to continue or illuminate significance to a scene or story . It is also referenced as creating different moods and atmosphere, this could be done through pace of shots, three way colour correction, fades, and other editing techniques"
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
