// ============================================================
// PROGRESS BAR — Barra de progresso com label
// TODO: Implementar este componente
//
// Props:
//   - label: texto à esquerda (ex: "Concluídas")
//   - valor: texto/número à direita (ex: "40%")
//   - porcentagem: number 0-100 (largura do preenchimento)
//   - cor: cor do preenchimento (ex: "var(--color-green)")
//
// Layout:
//   - Linha com label à esquerda e valor à direita
//   - Barra: height 8px, bg cinza, rounded
//   - Preenchimento: mesma height, cor definida, rounded, transição suave
// ============================================================

export default function ProgressBar({ label, valor, porcentagem, cor }) {
  // TODO: Implementar
  return (
    <div className="my-3.5">
      <p className="text-text-3 text-xs">TODO: ProgressBar - {label}</p>
    </div>
  )
}
