export default function ProgressBar({ label, valor, porcentagem, cor }) {
  // Garante que a porcentagem fique entre 0 e 100 para não quebrar o layout
  const larguraAtiva = Math.min(Math.max(porcentagem || 0, 0), 100);

  return (
    <div className="my-3.5 w-full">
      {/* Linha com Label e Valor (Ex: Concluídas | 40%) */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text-2 text-[12px] font-medium">{label}</span>
        <span className="text-text-1 text-[12px] font-bold">{valor}</span>
      </div>

      {/* Container da Barra (Fundo cinza) */}
      <div className="h-[8px] w-full bg-border/20 rounded-full overflow-hidden">
        {/* Preenchimento da Barra */}
        <div 
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{ 
            width: `${larguraAtiva}%`, 
            backgroundColor: cor || 'var(--color-blue)' 
          }}
        ></div>
      </div>
    </div>
  )
}