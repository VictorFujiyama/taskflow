import { useState, useMemo } from 'react'
import FilterBar from '../../components/FilterBar/FilterBar'
import TaskTable from '../../components/TaskTable/TaskTable'

// ============================================================
// PÁGINA: TAREFAS — Lista completa com filtros
// TODO: Implementar esta página
//
// Props:
//   - tarefas, usuarios
//   - onNovaTarefa: abre modal
//   - onEditTarefa: abre modal de editar
//   - onDeleteTarefa: deleta tarefa
//
// Estrutura:
//   1. Header: título "Tarefas" + subtítulo (contagem) + botão "+ Nova Tarefa"
//   2. FilterBar
//   3. Card com TaskTable (showActions=true)
//
// Lógica de filtro:
//   - Manter estado dos filtros: { status, prioridade, responsavelId, busca }
//   - Filtrar tarefas com useMemo baseado nos filtros ativos
//   - Subtítulo: "X tarefa(s) encontrada(s)"
// ============================================================

export default function Tarefas({ tarefas, usuarios, onNovaTarefa, onEditTarefa, onDeleteTarefa }) {
  const [filtros, setFiltros] = useState({
    status: 'todos',
    prioridade: 'todos',
    responsavelId: '',
    busca: '',
  })

  // Filtrar tarefas baseado nos filtros ativos
  const tarefasFiltradas = useMemo(() => {
    return tarefas.filter((t) => {
      if (filtros.status !== 'todos' && t.status !== filtros.status) return false
      if (filtros.prioridade !== 'todos' && t.prioridade !== filtros.prioridade) return false
      if (filtros.responsavelId && t.responsavelId !== Number(filtros.responsavelId)) return false
      if (filtros.busca) {
        const q = filtros.busca.toLowerCase()
        if (!t.titulo.toLowerCase().includes(q) && !(t.desc || '').toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [tarefas, filtros])

  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="font-display text-[28px] font-bold tracking-tight leading-none">Tarefas</h1>
          <p className="text-sm text-text-3 mt-0.5">
            {tarefasFiltradas.length} tarefa{tarefasFiltradas.length !== 1 ? 's' : ''} encontrada{tarefasFiltradas.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={onNovaTarefa}
          className="px-4 py-2.5 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all"
        >
          + Nova Tarefa
        </button>
      </div>

      {/* Filtros */}
      <FilterBar filtros={filtros} onFiltroChange={setFiltros} usuarios={usuarios} />

      {/* Tabela */}
      <div className="bg-surface border border-border rounded-2xl shadow-sm">
        <TaskTable
          tarefas={tarefasFiltradas}
          usuarios={usuarios}
          showActions={true}
          onEdit={onEditTarefa}
          onDelete={onDeleteTarefa}
        />
      </div>
    </div>
  )
}
