import React from 'react';

import { cardStyles } from './styles.css';

interface Props {
  children: React.ReactNode;
}
export default function Card(props: Props) {
  return <div className={cardStyles.container}>{props.children}</div>;
}
