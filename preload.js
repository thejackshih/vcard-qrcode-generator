const { contextBridge } = require('electron');
const path = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  generateQR: (text, options) => {
    // Use a resolved path to ensure the module is found in the preload script's context.
    const QRCode = require(path.join(__dirname, 'node_modules', 'qrcode'));
    return QRCode.toDataURL(text, options);
  }
});