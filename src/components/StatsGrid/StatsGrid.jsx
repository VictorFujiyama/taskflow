// ============================================================
// STATS GRID — Grid com 4 cards de estatísticas (Dashboard)
// ============================================================

export default function StatsGrid({ stats, totalUsuarios }) {
  const { total, concluidas, emAndamento, aFazer, altaPendente } = stats
  const pctConcluido = total ? Math.round((concluidas / total) * 100) : 0

  const cards = [
    { label: 'Total de Tarefas', valor: total, desc: `${totalUsuarios} membros na equipe` },
    { label: 'Concluídas', valor: concluidas, cor: 'text-green', desc: `${pctConcluido}% do total` },
    { label: 'Em Andamento', valor: emAndamento, cor: 'text-accent', desc: 'em progresso' },
    { label: 'A Fazer', valor: aFazer, cor: 'text-text-2', desc: `${altaPendente} de prioridade alta` },
  ]

  return (
    <div className="grid grid-cols-4 gap-3.5 mb-7">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-surface border border-border rounded-2xl py-4 px-5 flex flex-col gap-2"
        >
          <span className="text-xs text-text-3 font-medium tracking-wider uppercase">
            {card.label}
          </span>
          <span className={`font-display text-[32px] font-extrabold leading-none tracking-tight ${card.cor || ''}`}>
            {card.valor}
          </span>
          <span className="text-xs text-text-3">{card.desc}</span>
        </div>
      ))}
    </div>
  )
}
