import PdfFile from "/pdfFile.pdf";

const Pdf = () => {
  return (
    <div className="flex justify-center mt-10">
      <iframe
        className="w-full sm:w-[80%] h-[80vh] border border-green-400"
        src={PdfFile}
        title="Visualizador de PDF"
      ></iframe>
    </div>
  );
};

export default Pdf;
