import styled from 'styled-components'
import { Props } from '.'

export const FormStyle = styled.form<Props>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisarStyle = styled.button<Props>`
  background-color: ${(props) => props.theme.primaria};
  border: 1px solid ${(props) => props.theme.primaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.secundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const CampoStyle = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.primaria};
`
