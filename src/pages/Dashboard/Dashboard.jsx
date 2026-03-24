import { useNavigate } from 'react-router-dom'
import StatsGrid from '../../components/StatsGrid/StatsGrid'
import TaskTable from '../../components/TaskTable/TaskTable'

// ============================================================
// PÁGINA: DASHBOARD — Visão geral das atividades
// TODO: Implementar esta página
//
// Props (via context/props do App):
//   - tarefas, usuarios, getEstatisticas
//   - onNovaTarefa: abre modal de nova tarefa
//   - onEditTarefa: abre modal de editar tarefa
//
// Estrutura:
//   1. Header: título "Dashboard" + subtítulo + botão "+ Nova Tarefa"
//   2. StatsGrid (4 cards de estatísticas)
//   3. Card "Tarefas Recentes" com tabela das últimas 5 tarefas
//      - Header do card: "Tarefas Recentes" + botão "Ver todas →"
//      - TaskTable com showActions=false
// ============================================================

export default function Dashboard({ tarefas, usuarios, getEstatisticas, onNovaTarefa, onEditTarefa }) {
  const navigate = useNavigate()
  const stats = getEstatisticas()
  const recentes = [...tarefas].slice(-5).reverse()

  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="font-display text-[28px] font-bold tracking-tight leading-none">Dashboard</h1>
          <p className="text-sm text-text-3 mt-0.5">Visão geral das atividades da equipe</p>
        </div>
        <button
          onClick={onNovaTarefa}
          className="px-4 py-2.5 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all"
        >
          + Nova Tarefa
        </button>
      </div>

      {/* Stats */}
      <StatsGrid stats={stats} totalUsuarios={usuarios.length} />

      {/* Tarefas Recentes */}
      <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-base font-semibold">Tarefas Recentes</h2>
          <button
            onClick={() => navigate('/tarefas')}
            className="px-3 py-1.5 rounded-lg border border-border text-text-2 text-[13px] font-medium hover:bg-surface hover:border-border-strong transition-all"
          >
            Ver todas →
          </button>
        </div>
        <TaskTable
          tarefas={recentes}
          usuarios={usuarios}
          showActions={false}
          onEdit={onEditTarefa}
        />
      </div>
    </div>
  )
}
