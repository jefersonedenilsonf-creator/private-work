interface BotonProps {
    children: React.ReactNode;
    onClick?: () => void;
    tipo?: "button" | "submit" | "reset";
    variante?: "primario" | "peligro" | "secundario";
    className?: string;
    }
function Boton({
    children,
    onClick,
    tipo = "button",
    variante = "primario",
    className = ""
}: BotonProps) {
 // Clases comunes para todos los botones (sin color de fondo fijo)
 const estilosBase = "px-4 py-2 rounded-lg font-semibold text-white transition-colors shadow-md cursor-pointer";
    // Colores según la variante elegida
    const estilosVariante = {
        primario: "bg-blue-600 hover:bg-blue-700",
        peligro: "bg-red-600 hover:bg-red-700",
        secundario: "bg-slate-600 hover:bg-slate-700"
    };
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