import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './components/button'

const StyledMain = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

class Main extends Component {
  render () {
    return (
      <StyledMain>
        <Button
          label='Click to schedule notification'
          onPress={() => {}}
        />
      </StyledMain>
    )
  }
}

export default Main
