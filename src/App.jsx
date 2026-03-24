import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTaskFlow } from './hooks/useTaskFlow'

// Layout
import Sidebar from './components/Sidebar/Sidebar'
import Toast from './components/Toast/Toast'

// Modais
import TarefaForm from './components/Modal/TarefaForm'
import UsuarioForm from './components/Modal/UsuarioForm'

// Páginas
import Dashboard from './pages/Dashboard/Dashboard'
import Kanban from './pages/Kanban/Kanban'
import Tarefas from './pages/Tarefas/Tarefas'
import Usuarios from './pages/Usuarios/Usuarios'
import Relatorio from './pages/Relatorio/Relatorio'

export default function App() {
  const {
    usuarios,
    tarefas,
    getUsuario,
    adicionarTarefa,
    editarTarefa,
    deletarTarefa,
    adicionarUsuario,
    editarUsuario,
    deletarUsuario,
    getEstatisticas,
  } = useTaskFlow()

  // Estado dos modais
  const [modalTarefa, setModalTarefa] = useState({ open: false, tarefa: null })
  const [modalUsuario, setModalUsuario] = useState({ open: false, usuario: null })
  const [toast, setToast] = useState('')

  // Contagem para badge do sidebar
  const tarefasPendentes = tarefas.filter((t) => t.status !== 'Concluído').length

  // --- Handlers de Tarefa ---
  function handleNovaTarefa() {
    setModalTarefa({ open: true, tarefa: null })
  }

  function handleEditTarefa(idOuTarefa) {
    const tarefa = typeof idOuTarefa === 'object' ? idOuTarefa : tarefas.find((t) => t.id === idOuTarefa)
    setModalTarefa({ open: true, tarefa })
  }

  function handleSaveTarefa(dados) {
    if (modalTarefa.tarefa) {
      editarTarefa(modalTarefa.tarefa.id, dados)
      setToast('Tarefa atualizada!')
    } else {
      adicionarTarefa(dados)
      setToast('Tarefa criada!')
    }
  }

  function handleDeleteTarefa(id) {
    if (confirm('Remover esta tarefa?')) {
      deletarTarefa(id)
      setToast('Tarefa removida.')
    }
  }

  // --- Handlers de Usuário ---
  function handleNovoUsuario() {
    setModalUsuario({ open: true, usuario: null })
  }

  function handleEditUsuario(usuario) {
    setModalUsuario({ open: true, usuario })
  }

  function handleSaveUsuario(dados) {
    if (modalUsuario.usuario) {
      editarUsuario(modalUsuario.usuario.id, dados)
      setToast('Usuário atualizado!')
    } else {
      adicionarUsuario(dados)
      setToast('Usuário cadastrado!')
    }
  }

  function handleDeleteUsuario(id) {
    if (confirm('Remover este usuário? As tarefas atribuídas a ele ficarão sem responsável.')) {
      deletarUsuario(id)
      setToast('Usuário removido.')
    }
  }

  return (
    <div className="flex">
      <Sidebar tarefasPendentes={tarefasPendentes} />

      {/* Conteúdo principal — margin-left pra compensar sidebar fixa */}
      <main className="ml-60 flex-1 p-8 max-w-[calc(100vw-240px)]">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                tarefas={tarefas}
                usuarios={usuarios}
                getEstatisticas={getEstatisticas}
                onNovaTarefa={handleNovaTarefa}
                onEditTarefa={handleEditTarefa}
              />
            }
          />
          <Route
            path="/kanban"
            element={
              <Kanban
                tarefas={tarefas}
                usuarios={usuarios}
                onNovaTarefa={handleNovaTarefa}
                onEditTarefa={handleEditTarefa}
              />
            }
          />
          <Route
            path="/tarefas"
            element={
              <Tarefas
                tarefas={tarefas}
                usuarios={usuarios}
                onNovaTarefa={handleNovaTarefa}
                onEditTarefa={handleEditTarefa}
                onDeleteTarefa={handleDeleteTarefa}
              />
            }
          />
          <Route
            path="/usuarios"
            element={
              <Usuarios
                usuarios={usuarios}
                tarefas={tarefas}
                onNovoUsuario={handleNovoUsuario}
                onEditUsuario={handleEditUsuario}
                onDeleteUsuario={handleDeleteUsuario}
              />
            }
          />
          <Route
            path="/relatorio"
            element={
              <Relatorio
                tarefas={tarefas}
                usuarios={usuarios}
                getEstatisticas={getEstatisticas}
              />
            }
          />
        </Routes>
      </main>

      {/* Modais */}
      <TarefaForm
        isOpen={modalTarefa.open}
        onClose={() => setModalTarefa({ open: false, tarefa: null })}
        onSave={handleSaveTarefa}
        tarefa={modalTarefa.tarefa}
        usuarios={usuarios}
      />
      <UsuarioForm
        isOpen={modalUsuario.open}
        onClose={() => setModalUsuario({ open: false, usuario: null })}
        onSave={handleSaveUsuario}
        usuario={modalUsuario.usuario}
      />

      {/* Toast */}
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  )
}
