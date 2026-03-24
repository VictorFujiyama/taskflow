import { priorityStyle, statusStyle } from '../../data/helpers'

const STYLES = {
  prioridade: {
    Alta: 'bg-red-light text-red',
    Média: 'bg-amber-light text-amber',
    Baixa: 'bg-green-light text-green',
  },
  status: {
    'A Fazer': 'bg-surface-2 text-text-3',
    'Em Andamento': 'bg-accent-light text-accent',
    'Concluído': 'bg-green-light text-green',
  },
}

export default function Badge({ tipo = 'prioridade', valor }) {
  const classes = STYLES[tipo]?.[valor] || 'bg-surface-2 text-text-3'

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${classes}`}>
      {valor}
    </span>
  )
}
