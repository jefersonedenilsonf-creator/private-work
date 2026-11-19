import Boton from './Boton';
function App() {
 return (
    <div className="p-6 flex gap-4">
      <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
        Guardar Cambios
      </Boton>
      <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
        Cancelar
      </Boton>
      <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
        Eliminar Usuario
      </Boton>
    </div>
 );
}


export default App

/***       <div className="flex justify-center">
        <button className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900">
          Enviar
        </button>
      </div>
      <div className="border w-1/2 my-5 mx-auto text-center bg-gray-200 rounded py-4">
        Este es un contenedor
      </div> */