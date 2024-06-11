import { useContext } from "react";
import { FileContext } from "../context/FileContext";

//Hool para usar el contexto

const useFileContext = () => {
    const fileContext = useContext(FileContext);
    if(fileContext === undefined){
        throw new Error ('useFileContext debe ser llamado dentro de un FileProvider');
    }
    return fileContext;
};

export { useFileContext }