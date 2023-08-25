import { useEffect, useState } from 'react'
import ExibeTarefas from './ExibeTarefas'
import  axios from 'axios'

function Main({ nome }) {

    const [tarefas, setTarefas] = useState([])
    const [tarefa, setTarefa] = useState('')

    useEffect(() =>{
        axios.get('http://localhost:3001/tarefas').then((response) => {
      setTarefas(response.data);
        console.log(response.data);
      
    })
    },[]);

    const addTarefa = (event) => {
        event.preventDefault()
        const tarefaObject = {
            nome_tarefa: tarefa,
            id: tarefas.leght + 1,
        }
        setTarefas(tarefas.concat(tarefaObject))
        setTarefas('')
        console.log('botão clicado', event.target)
    }
    const handleTarefaChange = (event =>{
        console.log(event.target.value)
        setTarefa(event.target.value)
    })

    return (
        <div className="container">
            <br />
      <h1>Bem Vindo.</h1>
      <p>Seja bem vindo, {nome}! Este é o início da página.</p>
      <br />
      <h1>Este é o corpo da página, onde conteúdos aparecerão.</h1>
      <br />
      <h1>Esta é apenas uma página de testes.</h1>
      <p>Fique atento para mais informações logo, assim que a aula prosseguir.</p>
      <br />
      <h3>Lista de Tarefas</h3>
            <ExibeTarefas tarefas={tarefas}/>
            <hr />
            <form onSubmit= {addTarefa}>
                <div className="mb-2">
                    <label htmlFor="Tarefa" className="form-label">
                        Tarefa
                    </label>
                    <input 
                    type="text"
                    placeholder="Digite."
                    className="formControl"
                    value={tarefa}
                    onChange={handleTarefaChange}
                    />
                    <button className="btn-primary mt-4">Adicionar.</button>
                </div>
            </form>
        </div>
    );
}

export default Main;