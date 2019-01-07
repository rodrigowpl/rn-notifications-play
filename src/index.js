import React, { Component } from 'react'
import styled from 'styled-components'
import { PushNotificationIOS } from 'react-native'

import Button from './components/button'

const StyledMain = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

class Main extends Component {
  componentDidMount () {
    PushNotificationIOS.requestPermissions()

    PushNotificationIOS.addEventListener('register', token => {
      console.log('Device token', token)
     })

     PushNotificationIOS.addEventListener('localNotification', notification => {
      console.log('notification', notification)
     })
  }

  scheduleNotification = () => {
    PushNotificationIOS.presentLocalNotification({
      alertBody: 'Hello notification'
    })
  }

  render () {
    return (
      <StyledMain>
        <Button
          label='Click to schedule notification'
          onPress={this.scheduleNotification}
        />
      </StyledMain>
    )
  }
}

export default Main
