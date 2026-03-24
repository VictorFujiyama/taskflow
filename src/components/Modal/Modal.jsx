// ============================================================
// MODAL — Componente base de modal (overlay + caixa)
// TODO: Implementar este componente
//
// Props:
//   - isOpen: boolean — controla visibilidade
//   - onClose: function — chamada ao clicar fora ou no botão cancelar
//   - title: string — título do modal ("Nova Tarefa", "Novo Usuário", etc)
//   - children: conteúdo do formulário
//
// Comportamento:
//   - Overlay escuro semi-transparente com backdrop-blur
//   - Caixa centralizada, max-width 520px
//   - Fechar ao clicar no overlay (fora da caixa)
//   - Não renderizar nada se isOpen === false
//
// Referência visual:
//   - Background overlay: rgba(20,18,14,0.55)
//   - Caixa: branca, border-radius 16px, padding 32px
//   - Título: font Syne, 20px, bold
// ============================================================

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/55 z-[200] flex items-center justify-center backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl p-8 w-[520px] max-w-[95vw] shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-display text-xl font-bold mb-6 tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}
