import { FormEvent, useState } from 'react'
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

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <CampoStyle
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisarStyle type="submit">Pesquisar</BtnPesquisarStyle>
    </FormStyle>
  )
}
export default FormVagas
