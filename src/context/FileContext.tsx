import { ReactNode, createContext, useState } from "react";

// Define la interfaz para los datos de la respuesta
interface DataFile {
  name: string;
  data: []; // Cambié el tipo de 'data' a 'any[]' ya que usar '[]' puede ser ambiguo
}

// Define la interfaz para el contexto
interface FileContextType {
  data: DataFile | null;
  setData: React.Dispatch<React.SetStateAction<DataFile | null>>;
}

// Crear contexto con el tipo adecuado y un valor inicial
const FileContext = createContext<FileContextType | undefined>(undefined);

// Definir las props del proveedor
interface FileProviderProps {
  children: ReactNode;
}

const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataFile | null>(null);

  return (
    <FileContext.Provider value={{ data, setData }}>
      {children}
    </FileContext.Provider>
  );
};


// Exporta el proveedor y hook para usar el contexto
export { FileContext, FileProvider };

