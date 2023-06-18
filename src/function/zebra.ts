import ZebraBrowserPrintWrapper from "zebra-browser-print-wrapper";

export const printOnZebraPrinter = async (data: any) => {
      try {
            // Create a new instance of the object
            const browserPrint: any = new ZebraBrowserPrintWrapper();

            // ajout d el'adresse IP de la Zebra
            const zebraPrinterAddress = 'tcp://192.168.1.79';
            browserPrint.device = zebraPrinterAddress;

            // Check printer status
            const printerStatus = await browserPrint.checkPrinterStatus();

            // Check if the printer is ready
            if (printerStatus.isReadyToPrint) {
                  // ZPL script for printing on a Zebra printer
                  const zpl = `^XA
          ^FO50,50^A0N,30,30^FD${data}^FS
          ^XZ`;

                  browserPrint.print(zpl);
            } else {
                  console.log('Errors', printerStatus.errors);
            }
      } catch (error:any) {
            throw new Error(String(error));
      }
};

