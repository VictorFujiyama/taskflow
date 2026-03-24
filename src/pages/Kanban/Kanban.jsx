import KanbanBoard from '../../components/KanbanBoard/KanbanBoard'

// ============================================================
// PÁGINA: KANBAN — Visualização em colunas
// TODO: Implementar esta página
//
// Props:
//   - tarefas, usuarios
//   - onNovaTarefa: abre modal
//   - onEditTarefa: abre modal de editar
//
// Estrutura:
//   1. Header: título "Kanban" + subtítulo + botão "+ Nova Tarefa"
//   2. KanbanBoard
// ============================================================

export default function Kanban({ tarefas, usuarios, onNovaTarefa, onEditTarefa }) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="font-display text-[28px] font-bold tracking-tight leading-none">Kanban</h1>
          <p className="text-sm text-text-3 mt-0.5">Acompanhe o fluxo das tarefas</p>
        </div>
        <button
          onClick={onNovaTarefa}
          className="px-4 py-2.5 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all"
        >
          + Nova Tarefa
        </button>
      </div>

      {/* Board */}
      <KanbanBoard tarefas={tarefas} usuarios={usuarios} onEdit={onEditTarefa} />
    </div>
  )
}
