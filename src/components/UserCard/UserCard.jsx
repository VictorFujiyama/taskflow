import { iniciais } from '../../data/helpers'

export default function UserCard({ usuario, tarefasDoUsuario = [], onEdit, onDelete }) {
  // Cálculo das tarefas concluídas
  const concluidas = tarefasDoUsuario.filter(t => t.concluida || t.status === 'concluida').length;

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar: 46x46, iniciais e cor */}
        <div 
          className="w-[46px] h-[46px] rounded-lg flex items-center justify-center text-white font-bold shrink-0"
          style={{ backgroundColor: usuario.cor || '#6366f1' }}
        >
          {iniciais(usuario.nome)}
        </div>

        {/* Informações do Usuário */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-bold text-text-1 truncate">{usuario.nome}</h3>
          <p className="text-[12px] text-text-3">{usuario.funcao}</p>
          <p className="text-[12px] font-mono text-text-3 mt-1 truncate">{usuario.email}</p>
        </div>
      </div>

      {/* Contagem de Tarefas */}
      <div className="mt-4 py-2 border-y border-border/50">
        <p className="text-[12px] text-text-2">
          📋 {tarefasDoUsuario.length} tarefas · ✓ {concluidas} concluídas
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="mt-4 flex gap-2">
        <button 
          onClick={() => onEdit(usuario.id)}
          className="flex-1 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Editar
        </button>
        <button 
          onClick={() => onDelete(usuario.id)}
          className="flex-1 py-1.5 text-xs font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
        >
          Remover
        </button>
      </div>
    </div>
  )
}