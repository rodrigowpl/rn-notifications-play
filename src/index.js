import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const StyledMain = styled.View`
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.TouchableOpacity`
  width: 300px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #03A9F4;
  border-radius: 4px;
`

const Main = () => (
  <StyledMain>
    <StyledButton>
      <Text>
        CLick to request permission
      </Text>
    </StyledButton>
  </StyledMain>
)

export default Main
