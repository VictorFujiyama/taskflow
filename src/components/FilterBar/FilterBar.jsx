import { useState } from 'react'

// ============================================================
// FILTER BAR — Barra de filtros da página de Tarefas
// TODO: Implementar este componente
//
// Props:
//   - filtros: { status, prioridade, responsavelId, busca }
//   - onFiltroChange: function(novosFiltros) — atualiza filtros
//   - usuarios: array de usuários (para o select "Todos os usuários")
//
// Elementos:
//   1. Input de busca (pesquisa por título/descrição)
//   2. Separador vertical
//   3. Filter chips de Status: Todas | A Fazer | Em Andamento | Concluído
//   4. Separador vertical
//   5. Filter chips de Prioridade: Todas | Alta | Média | Baixa
//   6. Separador vertical
//   7. Select de usuário responsável
//
// Comportamento:
//   - Chip ativo tem fundo escuro e texto branco
//   - Ao clicar num chip, ativa ele e desativa os outros do mesmo grupo
//   - Cada mudança chama onFiltroChange com os novos valores
//
// Estilo dos chips:
//   - Pill shape (rounded-full), padding 6px 14px, font 13px
//   - Normal: border cinza, fundo branco
//   - Ativo: fundo escuro (#1A1916), texto branco
// ============================================================

export default function FilterBar({ filtros, onFiltroChange, usuarios }) {
  // TODO: Implementar
  return (
    <div className="flex items-center gap-2.5 mb-5 flex-wrap">
      <p className="text-text-3 text-sm">TODO: Implementar FilterBar</p>
    </div>
  )
}
