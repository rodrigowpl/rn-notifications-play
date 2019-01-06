import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.TouchableOpacity`
  width: 300px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #4CAF50;
  border-radius: 4px;
`

const StyledText = styled.Text`
  font-weight: bold;
  color: white;
`

const Button = ({ onPress, label }) => (
  <StyledButton
    onPress={onPress}>
    <StyledText>
      {label}
    </StyledText>
  </StyledButton>
)

export default Button
