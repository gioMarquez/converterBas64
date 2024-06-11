import { DUMMY_BASE64_PDF } from "./DUMMY_BASE64_PDF";

const ConverterBase64ToPDF = () => {
	const fileCodified = DUMMY_BASE64_PDF;
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let bin = atob(fileCodified);
    console.log('File Size:', Math.round(bin.length / 1024), 'KB');
    console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
    console.log('Create Date:', bin.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/)[1]);
    console.log('Modify Date:', bin.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/)[1]);
    console.log('Creator Tool:', bin.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/)[1]);

	return (
        <div>

        </div>
    )
};

export default ConverterBase64ToPDF;
