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

      <div className="grid grid-cols-[2fr_1fr] gap-4">

        {/* Coluna esquerda */}
        <div className="space-y-3.5">

          {/* Status das Tarefas */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <h2 className="font-semibold mb-4">Status das Tarefas</h2>

            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <div>
                <p className="text-xs text-text-3">Concluídas</p>
                <p className="text-lg font-bold">{stats.concluidas}</p>
              </div>
              <div>
                <p className="text-xs text-text-3">Em andamento</p>
                <p className="text-lg font-bold">{stats.emAndamento}</p>
              </div>
              <div>
                <p className="text-xs text-text-3">A fazer</p>
                <p className="text-lg font-bold">{stats.aFazer}</p>
              </div>
            </div>

            <div className="space-y-2">
              <ProgressBar label="Concluídas" valor={`${pct(stats.concluidas)}%`} porcentagem={pct(stats.concluidas)} cor="var(--color-green)" />
              <ProgressBar label="Em andamento" valor={`${pct(stats.emAndamento)}%`} porcentagem={pct(stats.emAndamento)} cor="var(--color-accent)" />
              <ProgressBar label="A fazer" valor={`${pct(stats.aFazer)}%`} porcentagem={pct(stats.aFazer)} />
            </div>
          </div>

          {/* Prioridades */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <h2 className="font-semibold mb-4">Prioridades</h2>

            <div className="space-y-2">
              <ProgressBar
                label={<span className="px-2 py-0.5 rounded bg-red-light text-red text-xs font-medium">Alta</span>}
                valor={`${pct(stats.alta)}%`}
                porcentagem={pct(stats.alta)}
                cor="var(--color-red)"
              />
              <ProgressBar
                label={<span className="px-2 py-0.5 rounded bg-amber-light text-amber text-xs font-medium">Média</span>}
                valor={`${pct(stats.media)}%`}
                porcentagem={pct(stats.media)}
                cor="var(--color-amber)"
              />
              <ProgressBar
                label={<span className="px-2 py-0.5 rounded bg-green-light text-green text-xs font-medium">Baixa</span>}
                valor={`${pct(stats.baixa)}%`}
                porcentagem={pct(stats.baixa)}
                cor="var(--color-green)"
              />
            </div>
          </div>

        </div> {/* FECHAMENTO DA COLUNA ESQUERDA */}

        {/* Coluna direita */}
        <div className="space-y-3.5">

          {/* Resumo */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <h2 className="font-semibold mb-4">Resumo</h2>

            <div className="space-y-2 text-sm">
              <p>Taxa de conclusão: <strong>{pct(stats.concluidas)}%</strong></p>
              <p>Membros ativos: <strong>{usuarios.length}</strong></p>
              <p className={stats.atrasadas > 0 ? "text-red" : ""}>
                Tarefas atrasadas: <strong>{stats.atrasadas}</strong>
              </p>
            </div>
          </div>

          {/* Por Usuário */}
          <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm">
            <h2 className="font-semibold mb-4">Por Usuário</h2>

            <div className="space-y-3">
              {usuarios.map((user) => {
                const tarefasUser = tarefas.filter(t => t.responsavelId === user.id)
                const total = tarefasUser.length
                const concluidas = tarefasUser.filter(t => t.status === 'Concluído').length
                const progresso = total ? Math.round((concluidas / total) * 100) : 0

                return (
                  <div key={user.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                        {iniciais(user.nome)}
                      </div>

                      <p className="text-sm flex-1">{user.nome}</p>

                      <span className="text-xs text-text-3">
                        {concluidas}/{total}
                      </span>
                    </div>

                    <ProgressBar porcentagem={progresso} valor={`${progresso}%`} />
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
