import { useState, useEffect } from 'react'
import Modal from './Modal'

// ============================================================
// USUARIO FORM — Formulário dentro do modal para criar/editar usuário
// TODO: Implementar os campos do formulário
//
// Props:
//   - isOpen: boolean
//   - onClose: function
//   - onSave: function(dados) — recebe o objeto usuário
//   - usuario: objeto usuário existente (null se for criação)
//
// Campos do formulário:
//   1. Nome completo (input text, obrigatório)
//   2. E-mail (input email, obrigatório)
//   3. Função / Cargo (input text, opcional)
//
// Dicas:
//   - Use o inputClass abaixo para estilizar os inputs
//   - Validar nome e email antes de chamar onSave
//   - No useEffect, preencher os campos quando usuario != null (modo edição)
// ============================================================

const inputClass = 'w-full px-3 py-2 border border-border rounded-lg text-sm text-text bg-surface outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors'

export default function UsuarioForm({ isOpen, onClose, onSave, usuario }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [funcao, setFuncao] = useState('')

  // Preenche campos ao editar ou limpa ao criar
  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome)
      setEmail(usuario.email)
      setFuncao(usuario.funcao || '')
    } else {
      setNome('')
      setEmail('')
      setFuncao('')
    }
  }, [usuario, isOpen])

  function handleSubmit() {
    if (!nome.trim() || !email.trim()) {
      alert('Preencha nome e e-mail.')
      return
    }
    onSave({
      nome: nome.trim(),
      email: email.trim(),
      funcao: funcao.trim(),
    })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={usuario ? 'Editar Usuário' : 'Novo Usuário'}>
      <div className="space-y-4">
        {/* Nome completo */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Digite o nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* E-mail */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            E-mail *
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="Digite o e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Função / Cargo */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Função / Cargo
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Ex: Administrador, Suporte..."
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
          />
        </div>
      </div>

      {/* Botões — já funcionam, não precisa mexer */}
      <div className="flex justify-end gap-2.5 mt-7 pt-5 border-t border-border">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border border-border text-text-2 text-sm font-medium hover:bg-surface transition-all">
          Cancelar
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-text text-white text-sm font-medium hover:bg-[#333] transition-all">
          Salvar Usuário
        </button>
      </div>
    </Modal>
  )
}
