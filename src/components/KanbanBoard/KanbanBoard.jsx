import { iniciais, formatDate } from '../../data/helpers'
import Badge from '../Badge/Badge'

// ============================================================
// KANBAN BOARD — Board com 3 colunas de tarefas
// TODO: Implementar este componente
//
// Props:
//   - tarefas: array de todas as tarefas
//   - usuarios: array de todos os usuários
//   - onEdit: function(id) — ao clicar num card
//
// Layout:
//   - Grid com 3 colunas iguais
//   - Coluna "A Fazer" (cinza), "Em Andamento" (azul), "Concluído" (verde)
//
// Cada coluna contém:
//   - Header: título da coluna + contagem
//   - Lista de KanbanCards filtrados pelo status
//
// Cada KanbanCard mostra:
//   - Título + Badge de prioridade (no topo, lado a lado)
//   - Descrição truncada (80 chars)
//   - Footer: avatar + nome do responsável | prazo
//   - Clicável → chama onEdit(tarefa.id)
//
// Estilo:
//   - Coluna: bg surface-2, rounded-2xl, padding 16px
//   - Card: bg branco, border, rounded, padding 14px, shadow
//   - Card hover: shadow maior
// ============================================================

const COLUNAS = [
  { status: 'A Fazer', cor: 'text-text-3' },
  { status: 'Em Andamento', cor: 'text-accent' },
  { status: 'Concluído', cor: 'text-green' },
]

export default function KanbanBoard({ tarefas, usuarios, onEdit }) {
  const getUser = (id) => usuarios.find((u) => u.id === Number(id))

  // TODO: Implementar
  return (
    <div className="grid grid-cols-3 gap-4">
      {COLUNAS.map((col) => (
        <div key={col.status} className="bg-surface-2 rounded-2xl p-4">
          <p className={`text-sm font-semibold uppercase ${col.cor} mb-3`}>{col.status}</p>
          <p className="text-text-3 text-xs">TODO: Cards aqui</p>
        </div>
      ))}
    </div>
  )
}
