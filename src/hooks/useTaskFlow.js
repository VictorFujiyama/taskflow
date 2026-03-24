import { useState } from 'react'
import { usuariosIniciais, tarefasIniciais, CORES_USUARIO } from '../data/mockData'

// ============================================================
// HOOK CENTRAL — Gerencia todo o estado da aplicação
// Futuramente será substituído por chamadas ao back-end
// ============================================================

export function useTaskFlow() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais)
  const [tarefas, setTarefas] = useState(tarefasIniciais)
  const [nextIdTarefa, setNextIdTarefa] = useState(7)
  const [nextIdUsuario, setNextIdUsuario] = useState(4)

  // --- Buscar usuário por ID ---
  function getUsuario(id) {
    return usuarios.find((u) => u.id === Number(id))
  }

  // --- CRUD de Tarefas ---
  function adicionarTarefa(tarefa) {
    const nova = { ...tarefa, id: nextIdTarefa }
    setTarefas((prev) => [...prev, nova])
    setNextIdTarefa((prev) => prev + 1)
  }

  function editarTarefa(id, dados) {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...dados } : t))
    )
  }

  function deletarTarefa(id) {
    setTarefas((prev) => prev.filter((t) => t.id !== id))
  }

  // --- CRUD de Usuários ---
  function adicionarUsuario(usuario) {
    const novo = {
      ...usuario,
      id: nextIdUsuario,
      cor: CORES_USUARIO[(nextIdUsuario - 1) % CORES_USUARIO.length],
    }
    setUsuarios((prev) => [...prev, novo])
    setNextIdUsuario((prev) => prev + 1)
  }

  function editarUsuario(id, dados) {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...dados } : u))
    )
  }

  function deletarUsuario(id) {
    setUsuarios((prev) => prev.filter((u) => u.id !== id))
    // Remove responsável das tarefas do usuário deletado
    setTarefas((prev) =>
      prev.map((t) =>
        t.responsavelId === id ? { ...t, responsavelId: null } : t
      )
    )
  }

  // --- Estatísticas ---
  function getEstatisticas() {
    const total = tarefas.length
    const concluidas = tarefas.filter((t) => t.status === 'Concluído').length
    const emAndamento = tarefas.filter((t) => t.status === 'Em Andamento').length
    const aFazer = tarefas.filter((t) => t.status === 'A Fazer').length
    const altaPendente = tarefas.filter(
      (t) => t.prioridade === 'Alta' && t.status !== 'Concluído'
    ).length
    const atrasadas = tarefas.filter(
      (t) => t.prazo && new Date(t.prazo) < new Date() && t.status !== 'Concluído'
    ).length

    return { total, concluidas, emAndamento, aFazer, altaPendente, atrasadas }
  }

  return {
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
  }
}
