import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, Container, Titulo } from '../../styles'
import { Form } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      nome,
      email,
      telefone,
      Math.floor(Math.random() * 1000)
    )

    dispatch(
      cadastrar({
        id: contatoParaAdicionar.id,
        nome: contatoParaAdicionar.nome,
        email: contatoParaAdicionar.email,
        telefone: contatoParaAdicionar.telefone
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato} action="">
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          as="textarea"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </Container>
  )
}

export default Formulario
