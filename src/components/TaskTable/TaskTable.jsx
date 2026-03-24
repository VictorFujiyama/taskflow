import { iniciais, formatDate, isOverdue } from '../../data/helpers'
import Badge from '../Badge/Badge'
import EmptyState from '../EmptyState/EmptyState'
import { Pencil, X } from 'lucide-react'

export default function TaskTable({ tarefas, usuarios, showActions = false, onEdit, onDelete }) {
  if (!tarefas.length) {
    return <EmptyState icon="✦" title="Nenhuma tarefa encontrada" desc="Tente ajustar os filtros ou crie uma nova tarefa." />
  }

  const getUser = (id) => usuarios.find((u) => u.id === Number(id))

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-text-3 border-b border-border">Tarefa</th>
            <th className="text-left px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-text-3 border-b border-border">Responsável</th>
            <th className="text-left px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-text-3 border-b border-border">Prioridade</th>
            <th className="text-left px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-text-3 border-b border-border">Status</th>
            <th className="text-left px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-text-3 border-b border-border">Prazo</th>
            {showActions && <th className="border-b border-border" />}
          </tr>
        </thead>
        <tbody>
          {tarefas.map((t) => {
            const user = getUser(t.responsavelId)
            const overdue = t.prazo && isOverdue(t.prazo) && t.status !== 'Concluído'

            return (
              <tr
                key={t.id}
                className="border-b border-border last:border-b-0 hover:bg-bg cursor-pointer transition-colors"
                onClick={() => onEdit?.(t.id)}
              >
                <td className="px-3.5 py-3">
                  <div className="font-medium text-text">{t.titulo}</div>
                  {t.desc && (
                    <div className="text-xs text-text-3 mt-0.5 max-w-[300px] truncate">{t.desc}</div>
                  )}
                </td>
                <td className="px-3.5 py-3">
                  {user ? (
                    <div className="flex items-center gap-2 text-[13px]">
                      <div
                        className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-semibold text-white shrink-0"
                        style={{ background: user.cor }}
                      >
                        {iniciais(user.nome)}
                      </div>
                      <span className="text-text-2">{user.nome.split(' ')[0]}</span>
                    </div>
                  ) : (
                    <span className="text-text-3 text-[13px]">—</span>
                  )}
                </td>
                <td className="px-3.5 py-3">
                  <Badge tipo="prioridade" valor={t.prioridade} />
                </td>
                <td className="px-3.5 py-3">
                  <Badge tipo="status" valor={t.status} />
                </td>
                <td className="px-3.5 py-3">
                  <span className={`font-mono text-xs ${overdue ? 'text-red' : 'text-text-2'}`}>
                    {formatDate(t.prazo)}{overdue ? ' ⚠' : ''}
                  </span>
                </td>
                {showActions && (
                  <td className="px-3.5 py-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => onEdit?.(t.id)}
                        className="w-[30px] h-[30px] rounded-md border border-border flex items-center justify-center text-text-2 hover:bg-surface-2 hover:border-border-strong transition-all"
                        title="Editar"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => onDelete?.(t.id)}
                        className="w-[30px] h-[30px] rounded-md border border-border flex items-center justify-center text-text-2 hover:bg-red-light hover:border-red hover:text-red transition-all"
                        title="Excluir"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
