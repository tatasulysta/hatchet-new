import { Tabs as RawTabs } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import * as React from 'react';

const sx = {
  '--List-padding': '0px',
  '--List-radius': '0px',
  '--ListItem-minHeight': '48px',
  [`& .${tabClasses.root}`]: {
    boxShadow: 'none',
    fontWeight: 'md',
    [`&.${tabClasses.selected}::before`]: {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 'var(--ListItem-paddingLeft)', // change to `0` to stretch to the edge.
      right: 'var(--ListItem-paddingRight)', // change to `0` to stretch to the edge.
      bottom: 0,
      height: 3,
      bgcolor: 'primary.200',
    },
  },
};

interface Options {
  title: string | React.ReactNode;
  onClick: () => void;
}
interface Props {
  tabs: Options[];
}
export default function Tabs(props: Props) {
  return (
    <RawTabs aria-label="tabs" defaultValue={0}>
      <TabList variant="plain" sx={sx}>
        {props.tabs.map((item) => (
          <Tab onClick={item.onClick}>{item.title}</Tab>
        ))}
      </TabList>
    </RawTabs>
  );
}
