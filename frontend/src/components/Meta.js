import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Build-&-Buy',
  description: 'Build your next and best gaming station',
  keywords: 'electronics, computers, gaming, gamers, peripherals',
}

export default Meta;