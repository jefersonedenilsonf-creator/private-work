import React from 'react';

type VarianteBoton = "primario" | "peligro" | "secundario";

interface BotonProps {
 children: React.ReactNode;
 onClick?: () => void;
 tipo?: "button" | "submit" | "reset";
 variante?: VarianteBoton;
 className?: string;
}

const estilosVariante: Record<VarianteBoton, string> = {
 primario: "bg-blue-600 hover:bg-blue-700",
 peligro: "bg-red-600 hover:bg-red-700",
 secundario: "bg-slate-600 hover:bg-slate-700",
};

function Boton({
 children,
 onClick,
 tipo = "button",
 variante = "primario",
 className = "",
}: BotonProps) {
 const estilosBase = "px-4 py-2 rounded-lg font-semibold text-white transition-colors shadow-md cursor-pointer";

 return (
  <button
   type={tipo}
   onClick={onClick}
   className={`${estilosBase} ${estilosVariante[variante]} ${className}`}
  >
   {children}
  </button>
 );
}

export default Boton;
