import styled from 'styled-components'

const CabecalhoStyle = styled.header`
  background-color: ${(props) => props.theme.secundaria};
  color: ${(props) => props.theme.primaria};
  text-align: center;
  padding: 24px 0;
`

export default CabecalhoStyle
