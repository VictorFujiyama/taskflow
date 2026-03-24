// ============================================================
// FUNÇÕES UTILITÁRIAS — Usadas por vários componentes
// ============================================================

// Retorna as iniciais de um nome (ex: "João Silva" → "JS")
export function iniciais(nome) {
  return nome
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Formata data ISO (2026-04-10) para formato BR (10/04/2026)
export function formatDate(d) {
  if (!d) return '—'
  const [y, m, dia] = d.split('-')
  return `${dia}/${m}/${y}`
}

// Verifica se a data já passou (tarefa atrasada)
export function isOverdue(d) {
  if (!d) return false
  return new Date(d) < new Date()
}

// Retorna classe CSS de cor baseado na prioridade
export function priorityStyle(prioridade) {
  const map = {
    Alta: { bg: 'bg-red-light', text: 'text-red' },
    Média: { bg: 'bg-amber-light', text: 'text-amber' },
    Baixa: { bg: 'bg-green-light', text: 'text-green' },
  }
  return map[prioridade] || map['Baixa']
}

// Retorna classe CSS de cor baseado no status
export function statusStyle(status) {
  const map = {
    'A Fazer': { bg: 'bg-surface-2', text: 'text-text-3' },
    'Em Andamento': { bg: 'bg-accent-light', text: 'text-accent' },
    Concluído: { bg: 'bg-green-light', text: 'text-green' },
  }
  return map[status] || map['A Fazer']
}
