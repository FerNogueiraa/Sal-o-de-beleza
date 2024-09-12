import './style.css'
import Trash from '../../assets/lixeira.svg'


function Cadastro() {

  const users = [
    {
      id: "12345",
      nome: "Fernando",
      usuario: "fernando",
      senha: "12345",
      cpf: "12345",
      telefone: "12345",
      endereco: "12345"
    },
    {
      id: "123512312",
      nome: "Kaua",
      usuario: "kaui",
      senha: "54321",
      cpf: "54321",
      telefone: "54321",
      endereco: "54321"
    }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input name='nome' type='text' />
        <input name='usuario' type='text' />
        <input name='senha' type='password' />
        <input name='endereco' type='text' />
        <input name='cpf' type='text' />
        <input name='telefone' type='text ' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.nome} </p>
            <p>Usuário: {user.usuario} </p>
            <p>Senha: {user.senha} </p>
            <p>Endereço: {user.endereco} </p>
            <p>Cpf: {user.cpf} </p>
            <p>Telefone: {user.telefone} </p>
          </div>
          <button>
            <img width={40} height={40} src={Trash} />
          </button>
        </div>

      ))}


    </div>


  )
}

export default Cadastro
