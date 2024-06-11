import Base64ToFileRestorer from "../Convereters/Base64ToFileRestorer";
import FileToBase64Converter from "../Convereters/FileToBase64Converter";
import ConverterBase64ToPDF from "../ConverterBase64ToPDF/ConverterBase64ToPDF";

const CardViewer = () => {

    
    return (
        <div>
             <FileToBase64Converter />
            <Base64ToFileRestorer /> 
            {/* <ConverterBase64ToPDF /> */}

        </div>
    )
}

export default CardViewer;