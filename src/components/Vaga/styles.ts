import styled from 'styled-components'

export const VagaContainer = styled.div`
  border: 1px solid ${(props) => props.theme.primaria},
  background-color: ${(props) => props.theme.secundaria},
  color: ${(props) => props.theme.primaria},
  padding: 16px,
  transition: all ease 0.3s,
  border-radius: 8px,

  &:hover {
    background-color: ${(props) => props.theme.secundaria},
    color: ${(props) => props.theme.primaria},
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold,
  margin-bottom: 16px,
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.secundaria},
  background-color: ${(props) => props.theme.primaria},
  color: ${(props) => props.theme.secundaria},
  display: inline-block,
  padding: 8px 16px,
  text-decoration: none,
  margin-top: 16px,
  font-weight: bold,
  font-size: 14px,
  border-radius: 8px,
  text-align: center,

  @media (max-width: 768px) {
    display: block,
  }

  &:hover {
    border-color: ${(props) => props.theme.primaria},
    background-color: ${(props) => props.theme.secundaria},
    color: ${(props) => props.theme.primaria},
  }
`
