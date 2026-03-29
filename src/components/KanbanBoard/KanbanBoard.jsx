import { iniciais, formatDate } from '../../data/helpers'
import Badge from '../Badge/Badge'

// ============================================================
const COLUNAS = [
  { status: 'A Fazer', cor: 'text-text-3' },
  { status: 'Em Andamento', cor: 'text-accent' },
  { status: 'Concluído', cor: 'text-green' },
]

export default function KanbanBoard({ tarefas, usuarios, onEdit }) {
  const getUser = (id) => usuarios.find((u) => u.id === Number(id))

  const truncate = (text, max = 80) => {
    if (!text) return ''
    return text.length > max ? text.slice(0, max) + '...' : text
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {COLUNAS.map((col) => {
        const tarefasFiltradas = tarefas.filter(
          (t) => t.status === col.status
        )

        return (
          <div key={col.status} className="bg-surface-2 rounded-2xl p-4">
            
            {/* HEADER */}
            <div className="flex items-center justify-between mb-3">
              <p className={`text-sm font-semibold uppercase ${col.cor}`}>
                {col.status}
              </p>
              <span className="text-xs text-text-3">
                {tarefasFiltradas.length}
              </span>
            </div>

            {/* LISTA */}
            <div className="flex flex-col gap-3">
              {tarefasFiltradas.length === 0 && (
                <p className="text-text-3 text-xs">Nenhuma tarefa</p>
              )}

              {tarefasFiltradas.map((tarefa) => {
                const user = getUser(tarefa.responsavelId)

                return (
                  <div
                    key={tarefa.id}
                    onClick={() => onEdit(tarefa.id)}
                    className="bg-surface border border-border rounded-[10px] p-3.5 shadow-sm cursor-pointer hover:shadow-lg transition"
                  >
                    
                    {/* TOPO */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold">
                        {tarefa.titulo}
                      </h3>
                      <Badge tipo="prioridade" valor={tarefa.prioridade} />
                    </div>

                    {/* DESCRIÇÃO */}
                    <p className="text-xs text-text-3 mb-3">
                      {truncate(tarefa.desc, 80)}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between text-xs">
                      
                      {/* USUÁRIO */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-semibold">
                          {user ? iniciais(user.nome) : '?'}
                        </div>
                        <span>
                          {user ? user.nome.split(' ')[0] : 'Sem responsável'}
                        </span>
                      </div>

                      {/* DATA */}
                      <span className="text-text-3">
                        {formatDate(tarefa.prazo)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
