import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Kanban, ListTodo, Users, BarChart3 } from 'lucide-react'

export default function Sidebar({ tarefasPendentes = 0 }) {
  const navItems = [
    { section: 'Visão Geral' },
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/kanban', label: 'Kanban', icon: Kanban },
    { section: 'Gestão' },
    { to: '/tarefas', label: 'Tarefas', icon: ListTodo, badge: tarefasPendentes },
    { to: '/usuarios', label: 'Usuários', icon: Users },
    { section: 'Análise' },
    { to: '/relatorio', label: 'Relatório', icon: BarChart3 },
  ]

  return (
    <aside className="w-60 min-h-screen bg-text fixed top-0 left-0 bottom-0 z-50 flex flex-col py-7">
      {/* Logo */}
      <div className="px-6 pb-7 border-b border-white/8 flex items-center gap-2.5">
        <span className="w-2 h-2 bg-[#4D80FF] rounded-full inline-block" />
        <span className="font-display font-extrabold text-[22px] text-white tracking-tight">
          TaskFlow
        </span>
      </div>

      {/* Navegação */}
      <nav className="flex-1 px-3 pt-5">
        {navItems.map((item, i) => {
          if (item.section) {
            return (
              <div
                key={`section-${i}`}
                className={`text-[10px] font-medium tracking-[0.12em] uppercase text-white/30 px-3 mb-1.5 ${i > 0 ? 'mt-4' : ''}`}
              >
                {item.section}
              </div>
            )
          }

          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm mb-0.5 transition-all w-full ${
                  isActive
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-white/55 hover:bg-white/6 hover:text-white/85'
                }`
              }
            >
              <Icon size={16} />
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="ml-auto bg-[rgba(77,128,255,0.25)] text-[#6FA3FF] rounded-full text-[11px] px-1.5 font-mono">
                  {item.badge}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 pt-4 border-t border-white/8 mt-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4D80FF] to-[#7B5CF5] flex items-center justify-center text-xs font-semibold text-white shrink-0">
            A
          </div>
          <span className="text-sm text-white/70">Admin</span>
        </div>
      </div>
    </aside>
  )
}
