import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withState from 'recompose/withState';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from '../Chat';
import RoomUserList from '../../containers/RoomUserList';
import WaitList from '../../containers/WaitList';
import PanelContainer from './PanelContainer';

const enhance = compose(
  translate(),
  withState('selected', 'setTab', 0),
  pure,
);

const subHeaderStyle = {
  fontSize: '125%',
};

const tabClasses = {
  root: 'SidePanel-tab',
  label: 'SidePanel-tabLabel',
};

const getUsersLabel = (t, listenerCount) => (
  <React.Fragment>
    {t('users.title')}
    <span key="sub" style={subHeaderStyle}>
      {listenerCount}
    </span>
  </React.Fragment>
);

const getWaitlistLabel = (t, size, position) => {
  if (size > 0) {
    const posText = position !== -1
      ? `${position + 1} / ${size}`
      : size;

    return (
      <React.Fragment>
        {t('waitlist.title')}
        <span key="sub" style={subHeaderStyle}>{posText}</span>
      </React.Fragment>
    );
  }
  return t('waitlist.title');
};

const SidePanels = ({
  t,
  selected,
  listenerCount,
  waitlistSize,
  waitlistPosition,
  setTab,
}) => (
  <div>
    <Tabs
      value={selected}
      onChange={(event, value) => setTab(value)}
      fullWidth
      classes={{
        root: 'SidePanel-tabs',
        indicator: 'SidePanel-indicator',
      }}
    >
      <Tab
        classes={tabClasses}
        label={getUsersLabel(t, listenerCount)}
      />
      <Tab
        classes={tabClasses}
        label={getWaitlistLabel(t, waitlistSize, waitlistPosition)}
      />
      <a href="https://discord.com/channels/363009424400449536/790948331392204860" target="_blank">
        <Tab
          classes={tabClasses}
          label={t('chat.title')}
        />
      </a>
    </Tabs>
    <div>
      <PanelContainer selected={selected === 0}>
        <RoomUserList />
      </PanelContainer>
      <PanelContainer selected={selected === 1}>
        <WaitList />
      </PanelContainer>
      <PanelContainer selected={selected === 2}>
        <a
          target="_blank"
          href="https://discord.com/channels/363009424400449536/790948331392204860"
        >
          Chat in #voicings!
        </a>
      </PanelContainer>
    </div>
  </div>
);

SidePanels.propTypes = {
  t: PropTypes.func.isRequired,
  listenerCount: PropTypes.number.isRequired,
  waitlistSize: PropTypes.number.isRequired,
  waitlistPosition: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default enhance(SidePanels);
