import { useEffect } from 'react'

// ============================================================
// TOAST — Notificação temporária no canto inferior direito
// TODO: Implementar este componente
//
// Props:
//   - message: string — texto a exibir (null/vazio = escondido)
//   - onClose: function — chamada quando o toast deve sumir
//
// Comportamento:
//   - Aparece com animação (slide up + fade in)
//   - Desaparece automaticamente após ~3 segundos
//   - Posição: fixed, bottom-right
//
// Estilo:
//   - Background escuro (#1A1916), texto branco
//   - Rounded 10px, padding 12px 20px
//   - Font 14px, semi-bold
//   - Max-width 320px
// ============================================================

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [message, onClose])

  if (!message) return null

  // TODO: Adicionar animação de entrada/saída
  return (
    <div className="fixed bottom-6 right-6 bg-text text-white px-5 py-3 rounded-[10px] text-sm font-medium z-[999] max-w-80">
      {message}
    </div>
  )
}
