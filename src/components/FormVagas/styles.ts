import styled from 'styled-components'

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisarStyle = styled.button`
  background-color: var(--cor-primaria);
  border: 1px solid var(--cor-primaria);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const CampoStyle = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-primaria);
`
