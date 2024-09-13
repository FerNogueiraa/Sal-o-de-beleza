import './style.css';
import Trash from '../../assets/lixeira.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Cadastro() {

  const [users, setUsers] = useState([])

  const inputNome = useRef()
  const inputUsuario = useRef()
  const inputSenha = useRef()
  const inputEndereco = useRef()
  const inputCpf = useRef() 
  const inputTelefone = useRef()
  

  //Mostra todos os usuarios
  async function getUsers() {
    const usersFromApi = await api.get('/cliente')

    setUsers(usersFromApi.data)
  }

  //Cadastra um novo usuario
  async function createUser() {

    await api.post('/cliente', {
      nome: inputNome.current.value,
      usuario: inputUsuario.current.value,
      senha: inputSenha.current.value,
      endereco: inputEndereco.current.value,
      cpf: inputCpf.current.value,
      telefone: inputTelefone.current.value
    })
    getUsers()
  }
  async function deleteUser(id) {
    await api.delete('/cliente/' + id)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputNome} />
        <input name='usuario' type='text' placeholder='Usuario' ref={inputUsuario} />
        <input name='senha' type='password' placeholder='Senha' ref={inputSenha} />
        <input name='endereco' type='text' placeholder='Endereco' ref={inputEndereco}/>
        <input name='cpf' type='text' placeholder='Cpf' ref={inputCpf}/>
        <input name='telefone' type='text ' placeholder='Telefone'  ref={inputTelefone}/>
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: {user.nome} </p>
            <p>Usuário: {user.usuario} </p>
            <p>Senha: {user.senha} </p>
            <p>Endereço: {user.endereco} </p>
            <p>Cpf: {user.cpf} </p>
            <p>Telefone: {user.telefone} </p>
          </div>
          <button>
            <img width={40} height={40} src={Trash} onClick={() => deleteUser(user.id)} />
          </button>
        </div>

      ))}


    </div>


  )
}

export default Cadastro
