// ============================================================
// EMPTY STATE — Exibido quando uma lista está vazia
// TODO: Implementar este componente
//
// Props:
//   - icon: string emoji (ex: "✦", "⊛")
//   - title: texto principal (ex: "Nenhuma tarefa encontrada")
//   - desc: texto secundário (ex: "Tente ajustar os filtros...")
//
// Estilo:
//   - Centralizado, padding vertical 60px
//   - Ícone grande (40px)
//   - Título 16px, semi-bold, cinza escuro
//   - Descrição 14px, cinza claro
// ============================================================

export default function EmptyState({ icon = '✦', title, desc }) {
  // TODO: Implementar
  return (
    <div className="text-center py-15 text-text-3">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-base font-medium text-text-2 mb-1.5">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  )
}
