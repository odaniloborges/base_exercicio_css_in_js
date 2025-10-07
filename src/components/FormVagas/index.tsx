import { FormEvent, ChangeEvent, useState } from 'react'

import { FormStyle, BtnPesquisarStyle, CampoStyle } from './styles'

export type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const aoMudarCampo = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <CampoStyle
        placeholder="Front-end, fullstack, node, design"
        onChange={aoMudarCampo}
        type="search"
        value={termo}
      />
      <BtnPesquisarStyle type="submit">Pesquisar</BtnPesquisarStyle>
    </FormStyle>
  )
}
export default FormVagas
