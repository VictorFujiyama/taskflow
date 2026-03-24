// ============================================================
// DADOS MOCKADOS — Simulam o que virá do back-end futuramente
// ============================================================

export const usuariosIniciais = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', funcao: 'Desenvolvedor', cor: '#4D80FF' },
  { id: 2, nome: 'Maria Souza', email: 'maria@email.com', funcao: 'Designer', cor: '#7B5CF5' },
  { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', funcao: 'Gerente de Produto', cor: '#0E9F6E' },
]

export const tarefasIniciais = [
  { id: 1, titulo: 'Implementar tela de login', desc: 'Criar formulário de autenticação com validação', prioridade: 'Alta', status: 'Em Andamento', responsavelId: 1, prazo: '2026-04-10' },
  { id: 2, titulo: 'Criar API de usuários', desc: 'Endpoint REST para CRUD de usuários', prioridade: 'Alta', status: 'A Fazer', responsavelId: 1, prazo: '2026-04-15' },
  { id: 3, titulo: 'Design do dashboard', desc: 'Protótipo no Figma para revisão', prioridade: 'Média', status: 'Concluído', responsavelId: 2, prazo: '2026-03-28' },
  { id: 4, titulo: 'Levantar requisitos v2', desc: 'Reunião com stakeholders para segunda versão', prioridade: 'Baixa', status: 'Concluído', responsavelId: 3, prazo: '2026-03-20' },
  { id: 5, titulo: 'Testes de integração', desc: 'Cobrir fluxo principal com testes automatizados', prioridade: 'Alta', status: 'A Fazer', responsavelId: null, prazo: '2026-04-20' },
  { id: 6, titulo: 'Deploy em produção', desc: 'Configurar pipeline CI/CD no GitHub Actions', prioridade: 'Média', status: 'A Fazer', responsavelId: 3, prazo: '2026-04-30' },
]

// Paleta de cores para novos usuários
export const CORES_USUARIO = ['#4D80FF', '#7B5CF5', '#0E9F6E', '#D97706', '#DC2626', '#2563EB', '#7C3AED']
