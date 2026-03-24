# TaskFlow — Mapa do Projeto

## Pronto (não precisa mexer)

### Infraestrutura
- **`App.jsx`** — Rotas, gerenciamento de modais, handlers de CRUD (criar/editar/deletar tarefa e usuário)
- **`main.jsx`** — Setup do React + BrowserRouter
- **`index.css`** — Tailwind configurado com todas as cores/fontes do design original
- **`index.html`** — Google Fonts (Inter, Syne, DM Mono)

### Dados e lógica
- **`data/mockData.js`** — 3 usuários e 6 tarefas iniciais + paleta de cores
- **`data/helpers.js`** — `iniciais()`, `formatDate()`, `isOverdue()`, `priorityStyle()`, `statusStyle()`
- **`hooks/useTaskFlow.js`** — Hook central com todo o CRUD (adicionar/editar/deletar tarefa e usuário) + `getEstatisticas()`

### Componentes implementados
- **`Sidebar/Sidebar.jsx`** — Menu lateral completo com logo, navegação por NavLink, badge de contagem, avatar do admin
- **`Badge/Badge.jsx`** — Badge pill com cores por prioridade (Alta/Média/Baixa) e status (A Fazer/Em Andamento/Concluído)
- **`StatsGrid/StatsGrid.jsx`** — Grid 4 colunas com cards: Total, Concluídas, Em Andamento, A Fazer
- **`TaskTable/TaskTable.jsx`** — Tabela completa com colunas (Tarefa, Responsável, Prioridade, Status, Prazo, Ações), avatares, badges, indicador de atraso
- **`Modal/Modal.jsx`** — Componente base (overlay + caixa centralizada, fecha ao clicar fora)
- **`Toast/Toast.jsx`** — Notificação temporária (3s) no canto inferior direito
- **`EmptyState/EmptyState.jsx`** — Estado vazio com ícone, título e descrição

### Página implementada
- **`pages/Dashboard/Dashboard.jsx`** — Header + StatsGrid + card "Tarefas Recentes" (últimas 5) com botão "Ver todas →"

---

## TODO — Para implementar

### 1. `components/Modal/TarefaForm.jsx`

**O que já tem:** Estado já criado (`titulo`, `desc`, `prioridade`, `status`, `responsavelId`, `prazo`), useEffect que preenche no modo edição, `handleSubmit` com validação, botões Cancelar/Salvar funcionando.

**O que falta:** Renderizar os inputs/selects/textarea dentro do `<div className="space-y-4">`. Campos:

- Input text para **Título** (obrigatório)
- Textarea para **Descrição**
- Select para **Prioridade** (Alta, Média, Baixa) — lado a lado com Status
- Select para **Status** (A Fazer, Em Andamento, Concluído)
- Select para **Responsável** (lista de `usuarios` + "Sem responsável") — lado a lado com Prazo
- Input date para **Prazo**

> Classe CSS pronta: `inputClass` já definida no arquivo.

---

### 2. `components/Modal/UsuarioForm.jsx`

**O que já tem:** Estado (`nome`, `email`, `funcao`), useEffect, `handleSubmit`, botões.

**O que falta:** Renderizar os inputs. Campos:

- Input text para **Nome completo** (obrigatório)
- Input email para **E-mail** (obrigatório)
- Input text para **Função/Cargo** (opcional)

---

### 3. `components/FilterBar/FilterBar.jsx`

**O que já tem:** Props definidas (`filtros`, `onFiltroChange`, `usuarios`).

**O que falta:** Implementar toda a barra:

- Input de busca (pill shape, placeholder "Buscar tarefa...")
- Separador vertical (`w-px h-6 bg-border`)
- Chips de **Status**: Todas | A Fazer | Em Andamento | Concluído
- Separador vertical
- Chips de **Prioridade**: Todas prioridades | Alta | Média | Baixa
- Separador vertical
- Select de **usuário responsável**

Estilos dos chips:
- Ativo: `bg-text text-white border-text`
- Normal: `border border-border bg-surface text-text-2`
- Ao clicar/mudar, chamar `onFiltroChange({ ...filtros, campo: novoValor })`

---

### 4. `components/KanbanBoard/KanbanBoard.jsx`

**O que já tem:** Array `COLUNAS` com status e cores, estrutura de grid 3 colunas, helper `getUser`.

**O que falta:** Dentro de cada coluna, renderizar os cards de tarefas filtradas por status. Cada card mostra:

- **Título** + **Badge de prioridade** (topo, lado a lado)
- **Descrição** truncada (80 chars max)
- **Footer**: avatar + primeiro nome do responsável | data do prazo
- Card clicável → `onEdit(tarefa.id)`
- **Contagem** de tarefas no header da coluna
- Se coluna vazia: "Nenhuma tarefa"

Estilos:
- Coluna: `bg-surface-2 rounded-2xl p-4`
- Card: `bg-surface border border-border rounded-[10px] p-3.5 shadow-sm cursor-pointer hover:shadow-lg`

---

### 5. `components/UserCard/UserCard.jsx`

**O que já tem:** Props definidas (`usuario`, `tarefasDoUsuario`, `onEdit`, `onDelete`).

**O que falta:** Implementar o card completo:

- **Avatar** quadrado arredondado (46x46, `rounded-xl`) com iniciais e `style={{ background: usuario.cor }}`
- **Nome** (15px, bold)
- **Cargo** (12px, cinza) — ou "Sem cargo" se vazio
- **Email** (12px, font mono)
- **Contagem**: "📋 X tarefas · ✓ Y concluídas" (filtrar `tarefasDoUsuario` por status)
- Botão **"Editar"** (outline) e **"Remover"** (fundo vermelho claro, texto vermelho)
- Card com hover shadow

---

### 6. `components/ProgressBar/ProgressBar.jsx`

**O que já tem:** Props definidas (`label`, `valor`, `porcentagem`, `cor`).

**O que falta:**

- Linha flex com `label` à esquerda e `valor` à direita (text 13px)
- Barra: `h-2 bg-surface-2 rounded-full overflow-hidden`
- Preenchimento: `h-full rounded-full` com `style={{ width: porcentagem + '%', background: cor }}`

---

### 7. `pages/Tarefas/Tarefas.jsx`

**O que já tem:** Página montada com header, lógica de filtro com `useMemo`, contagem dinâmica, TaskTable com `showActions=true`.

**Depende de:** `FilterBar` (item 3). Sem ele a página já mostra a tabela completa, só sem filtros.

---

### 8. `pages/Usuarios/Usuarios.jsx`

**O que já tem:** Página montada com header, grid responsivo, EmptyState, mapeia `usuarios` em `UserCard`.

**Depende de:** `UserCard` (item 5). Sem ele mostra os placeholders.

---

### 9. `pages/Kanban/Kanban.jsx`

**O que já tem:** Página montada com header e `KanbanBoard`.

**Depende de:** `KanbanBoard` (item 4). Sem ele mostra as colunas vazias.

---

### 10. `pages/Relatorio/Relatorio.jsx`

**O que já tem:** Header pronto, `getEstatisticas()` disponível, helper `pct()` pra calcular porcentagem, grid 2 colunas montado com cards placeholder.

**O que falta:** Implementar o conteúdo dos 4 cards:

- **Card "Status das Tarefas"**: 3 mini-cards (Concluídas / Em Andamento / A Fazer) em grid 3 colunas + 3 ProgressBars com porcentagem
- **Card "Prioridades"**: 3 ProgressBars (Alta / Média / Baixa) com Badge como label
- **Card "Resumo"**: Taxa de conclusão (%), membros ativos, tarefas atrasadas (vermelho se > 0)
- **Card "Por Usuário"**: pra cada usuário → avatar + nome + contagem de tarefas + mini ProgressBar

---

## Sugestão de divisão

| Pessoa   | O que fazer                        | Dificuldade  |
| ------- | ---------------------------------- | ------------ |
| Pessoa 1 | `TarefaForm` + `UsuarioForm`       | Fácil        |
| Pessoa 2 | `FilterBar`                        | Média        |
| Pessoa 3 | `KanbanBoard`                      | Média        |
| Pessoa 4 | `UserCard` + `ProgressBar`         | Fácil-Média  |
| Pessoa 5 | Página `Relatorio` completa        | Média-Alta   |

---

## Como rodar

```bash
cd taskflow
npm install
npm run dev
```

Acessa http://localhost:5173/ no navegador.

## Referência visual

O arquivo `taskflow.html` é a versão original em HTML puro — usar como referência de como cada componente deve ficar visualmente.
