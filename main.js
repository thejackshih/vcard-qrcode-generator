const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const QRCode = require('qrcode')

let win

function createWindow(){
    win = new BrowserWindow({width: 300, height: 600})
    
    //win.webContents.openDevTools()
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashed: true
    }))

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null) {
        createWindow()
    }
})
