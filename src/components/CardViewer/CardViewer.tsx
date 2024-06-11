import Base64ToFileRestorer from "../Convereters/Base64ToFileRestorer";
import FileToBase64Converter from "../Convereters/FileToBase64Converter";

const CardViewer = () => {

    
    return (
        <div>
            <FileToBase64Converter />
            <Base64ToFileRestorer /> 
        </div>
    )
}

export default CardViewer;