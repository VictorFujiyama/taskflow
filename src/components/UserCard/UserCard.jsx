import { iniciais } from '../../data/helpers'

// ============================================================
// USER CARD — Card de usuário na página Usuários
// TODO: Implementar este componente
//
// Props:
//   - usuario: { id, nome, email, funcao, cor }
//   - tarefasDoUsuario: array de tarefas atribuídas a este usuário
//   - onEdit: function(id)
//   - onDelete: function(id)
//
// Layout:
//   - Avatar quadrado arredondado (46x46) com iniciais e cor do usuário
//   - Nome (15px, bold)
//   - Cargo (12px, cinza)
//   - Email (12px, font mono)
//   - Contagem: "📋 X tarefas · ✓ Y concluídas"
//   - Botões: "Editar" (outline) e "Remover" (danger)
//
// Estilo:
//   - Card branco, border, rounded-2xl, padding 20px
//   - Hover: shadow maior
// ============================================================

export default function UserCard({ usuario, tarefasDoUsuario, onEdit, onDelete }) {
  // TODO: Implementar
  return (
    <div className="bg-surface border border-border rounded-2xl p-5">
      <p className="text-text-3 text-sm">TODO: UserCard - {usuario.nome}</p>
    </div>
  )
}
