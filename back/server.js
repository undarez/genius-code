import {
      ThermalPrinter,
      PrinterTypes,
      characterSet,
      breakLine,
    } from 'node-thermal-printer';
    import express from 'express';
    import cors from 'cors';
    
    // Initialiser votre serveur web
    const app = express();
    app.use(cors());
    app.use(express.json()); // Middleware pour le parsing du corps de la requête en JSON
    
    // Middleware pour activer le CORS
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    
    app.post('/write', (req, res) => {
      // Récupérer les données envoyées dans la requête
      
    
      // Effectuer le traitement de l'impression
      // Par exemple, vous pouvez utiliser une bibliothèque d'impression comme `node-thermal-printer`
      const printer = new ThermalPrinter({
        type: PrinterTypes.STAR,
        interface: 'tcp://192.168.1.79',
        characterSet: characterSet.PC850_MULTILINGUAL,
        breakLine: breakLine.WORD,
      });
      printer.bold(true);
      // printer.setFontSize(4, 4);
      printer.alignCenter();
      // printer.beep();
      printer.print('');
      printer.printBarcode('');
      printer.printQR('', {
        cellSize: 3,
        correction: 'M',
        model: 2,
      });
      // Impression de code-barre
      let CodeBarre = 'GS1-128'; // Données du code-barres (chaîne de caractères ou buffer)
      let type = 74; // Type de code-barres (Voir référence)
      let settings = {
        // Options facultatives
        hriPos: 0, // Position du texte lisible par l'homme 0 - 3 (aucun, en haut, en bas, les deux)
        hriFont: 0, // Police de caractères du texte lisible par l'homme
        width: 3, // Largeur du code-barres
        height: 168, // Hauteur du code-barres
      };
    
      printer.printBarcode(CodeBarre, type, settings);
      // Répondre avec une confirmation de succès
      res.status(200).json({ message: 'Impression réussie' });
    });
    
    app.listen(9100, () => {
      console.log('Serveur d\'impression démarré sur le port 9100');
    });
    