import { useState, useEffect } from 'react'
import Modal from './Modal'

// ============================================================
// TAREFA FORM — Formulário dentro do modal para criar/editar tarefa
// TODO: Implementar os campos do formulário
//
// Props:
//   - isOpen: boolean
//   - onClose: function
//   - onSave: function(dados) — recebe o objeto tarefa
//   - tarefa: objeto tarefa existente (null se for criação)
//   - usuarios: array de usuários (para o select de responsável)
//
// Campos do formulário:
//   1. Título (input text, obrigatório)
//   2. Descrição (textarea)
//   3. Prioridade (select: Alta, Média, Baixa)
//   4. Status (select: A Fazer, Em Andamento, Concluído)
//   5. Responsável (select: lista de usuários + "Sem responsável")
//   6. Prazo (input date)
//
// Layout:
//   - Prioridade e Status ficam lado a lado (grid 2 colunas)
//   - Responsável e Prazo ficam lado a lado (grid 2 colunas)
//   - Botões "Cancelar" e "Salvar Tarefa" no footer
//
// Dicas:
//   - Usar o inputClass abaixo para estilizar os inputs
//   - Validar que título não está vazio antes de chamar onSave
//   - No useEffect, preencher os campos quando tarefa != null (modo edição)
// ============================================================

const inputClass = 'w-full px-3 py-2 border border-border rounded-lg text-sm text-text bg-surface outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors'

export default function TarefaForm({ isOpen, onClose, onSave, tarefa, usuarios }) {
  const [titulo, setTitulo] = useState('')
  const [desc, setDesc] = useState('')
  const [prioridade, setPrioridade] = useState('Média')
  const [status, setStatus] = useState('A Fazer')
  const [responsavelId, setResponsavelId] = useState('')
  const [prazo, setPrazo] = useState('')

  // Preenche campos ao editar ou limpa ao criar
  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo)
      setDesc(tarefa.desc || '')
      setPrioridade(tarefa.prioridade)
      setStatus(tarefa.status)
      setResponsavelId(tarefa.responsavelId || '')
      setPrazo(tarefa.prazo || '')
    } else {
      setTitulo('')
      setDesc('')
      setPrioridade('Média')
      setStatus('A Fazer')
      setResponsavelId('')
      setPrazo('')
    }
  }, [tarefa, isOpen])

  function handleSubmit() {
    if (!titulo.trim()) {
      alert('Informe o título da tarefa.')
      return
    }
    onSave({
      titulo: titulo.trim(),
      desc: desc.trim(),
      prioridade,
      status,
      responsavelId: responsavelId ? Number(responsavelId) : null,
      prazo,
    })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={tarefa ? 'Editar Tarefa' : 'Nova Tarefa'}>
      <div className="space-y-4">
        {/* TODO: Implementar os campos do formulário aqui */}
        {/* Use as variáveis de estado acima (titulo, desc, prioridade, etc.) */}
        {/* Use inputClass para estilizar os inputs */}
        {/* Exemplo de input: */}
        {/* <input className={inputClass} value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="..." /> */}

        <p className="text-text-3 text-sm py-8 text-center">
          Implementar campos: Título, Descrição, Prioridade, Status, Responsável e Prazo
        </p>
      </div>

      {/* Botões — já funcionam, não precisa mexer */}
      <div className="flex justify-end gap-2.5 mt-7 pt-5 border-t border-border">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border border-border text-text-2 text-sm font-medium hover:bg-surface transition-all">
          Cancelar
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all">
          Salvar Tarefa
        </button>
      </div>
    </Modal>
  )
}
