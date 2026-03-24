import { iniciais } from '../../data/helpers'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

// ============================================================
// PÁGINA: RELATÓRIO — Análise de produtividade
// TODO: Implementar esta página
//
// Props:
//   - tarefas, usuarios, getEstatisticas
//
// Layout: grid 2 colunas (2fr 1fr)
//
// Coluna esquerda:
//   1. Card "Status das Tarefas"
//      - 3 mini-cards (Concluídas, Em Andamento, A Fazer) em grid 3 colunas
//      - 3 ProgressBars (Concluídas %, Em Andamento %, A Fazer %)
//   2. Card "Prioridades"
//      - 3 ProgressBars (Alta, Média, Baixa) com Badge como label
//
// Coluna direita:
//   1. Card "Resumo"
//      - Total de tarefas
//      - Linha: "Taxa de conclusão" — valor %
//      - Linha: "Membros ativos" — contagem
//      - Linha: "Tarefas atrasadas" — contagem (vermelho se > 0)
//   2. Card "Por Usuário"
//      - Para cada usuário: avatar + nome + contagem + mini progress bar
//
// Dicas:
//   - Calcular porcentagens: (valor / total * 100)
//   - Usar o componente ProgressBar
// ============================================================

export default function Relatorio({ tarefas, usuarios, getEstatisticas }) {
  const stats = getEstatisticas()
  const pct = (v) => (stats.total ? Math.round((v / stats.total) * 100) : 0)

  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="font-display text-[28px] font-bold tracking-tight leading-none">Relatório</h1>
          <p className="text-sm text-text-3 mt-0.5">Análise de produtividade da equipe</p>
        </div>
      </div>

      {/* TODO: Implementar o grid de relatório */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        {/* Coluna esquerda */}
        <div className="space-y-3.5">
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-text-3 text-sm">TODO: Card "Status das Tarefas"</p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-text-3 text-sm">TODO: Card "Prioridades"</p>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="space-y-3.5">
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-text-3 text-sm">TODO: Card "Resumo"</p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-text-3 text-sm">TODO: Card "Por Usuário"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
