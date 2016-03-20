import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

//-------------------------------------------------------------------------
// Provides the Redux dev tools to follow the current state of your app.
// This file doesn't require modifictaion.
//-------------------------------------------------------------------------

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w">
    <LogMonitor />
  </DockMonitor>
)
