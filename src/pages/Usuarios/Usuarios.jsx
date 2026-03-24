import UserCard from '../../components/UserCard/UserCard'
import EmptyState from '../../components/EmptyState/EmptyState'

// ============================================================
// PÁGINA: USUÁRIOS — Grid de cards de usuários
// TODO: Implementar esta página
//
// Props:
//   - usuarios, tarefas
//   - onNovoUsuario: abre modal
//   - onEditUsuario: abre modal de editar
//   - onDeleteUsuario: deleta usuário
//
// Estrutura:
//   1. Header: título "Usuários" + subtítulo + botão "+ Novo Usuário"
//   2. Grid responsivo de UserCards (auto-fill, min 260px)
//   3. Se vazio, mostrar EmptyState
//
// Cada UserCard recebe as tarefas filtradas por responsavelId
// ============================================================

export default function Usuarios({ usuarios, tarefas, onNovoUsuario, onEditUsuario, onDeleteUsuario }) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="font-display text-[28px] font-bold tracking-tight leading-none">Usuários</h1>
          <p className="text-sm text-text-3 mt-0.5">Gerencie a equipe</p>
        </div>
        <button
          onClick={onNovoUsuario}
          className="px-4 py-2.5 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all"
        >
          + Novo Usuário
        </button>
      </div>

      {/* Grid de cards */}
      {usuarios.length === 0 ? (
        <EmptyState icon="⊛" title="Nenhum usuário cadastrado" />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3.5">
          {usuarios.map((u) => (
            <UserCard
              key={u.id}
              usuario={u}
              tarefasDoUsuario={tarefas.filter((t) => t.responsavelId === u.id)}
              onEdit={() => onEditUsuario(u)}
              onDelete={() => onDeleteUsuario(u.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
