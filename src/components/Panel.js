import React from 'react';
import { Panel, PanelHeader, PanelContent } from '@marketgoo/ola';

export default (props) => {
  return (
    <Panel>
      <PanelHeader intro={props.intro} title={props.title}></PanelHeader>
      <PanelContent className="panel">{props.renderContent()}</PanelContent>
    </Panel>
  );
};
