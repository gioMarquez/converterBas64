import documentoPrueba from "../docs/Prueba.pdf";

const PdfView = () => {
	return (
		<div className="absolute w-[100%] h-[100%]">
			<object
				data={documentoPrueba}
				type="application/pdf"
        width="100%"
        height="100%"
			>

      </object>
		</div>
	);
};

export default PdfView;
