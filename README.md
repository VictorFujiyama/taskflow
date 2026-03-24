# TaskFlow — Sistema de Gestão de Tarefas

Sistema web para controle de tarefas de uma pequena equipe, desenvolvido como projeto do Bootcamp.

## Sobre

O TaskFlow permite cadastrar usuários e tarefas, atribuir responsáveis e acompanhar o andamento das atividades. O sistema conta com visualização em dashboard, kanban e relatórios de produtividade.

## Funcionalidades

- Cadastro de usuários (nome, e-mail, função)
- Cadastro de tarefas (título, descrição, prioridade, prazo)
- Associação de tarefa a um responsável
- Controle de status (A Fazer / Em Andamento / Concluído)
- Filtros por status, prioridade e responsável
- Dashboard com métricas da equipe
- Visualização Kanban
- Relatório com taxa de conclusão e progresso por usuário

## Tecnologias

- React (Vite)
- JavaScript
- Tailwind CSS
- React Router DOM
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173/` no navegador.

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Sidebar, Modal, Badge, etc.)
├── pages/            # Páginas do sistema (Dashboard, Kanban, Tarefas, Usuários, Relatório)
├── data/             # Dados mockados e funções utilitárias
├── hooks/            # Hook de gerenciamento de estado (useTaskFlow)
├── App.jsx           # Rotas e lógica principal
└── main.jsx          # Ponto de entrada
```
