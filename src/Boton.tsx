import React from 'react';
interface BotonProps {
 children: React.ReactNode;
 onClick?: () => void;
 tipo?: "button" | "submit" | "reset";
 className?: string;
}
// Aquí defines las clases base que se aplicarán a TODOS tus botones
function Boton({ children, onClick, tipo = "button", className = "" }: BotonProps) {
 const estilosBase = "px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bgblue-700 transition-colors shadow-md cursor-pointer";
 return (
 <button type={tipo} onClick={onClick} className={`${estilosBase} ${className}`}>
 {children}
 </button>
 );
}
export default Boton;
