const {app, BrowserWindow} = require('electron')
const path = require('path')

let win

function createWindow(){
    win = new BrowserWindow({
	    width: 300, 
	    height: 600,
	    webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: false
	    }
    })
    
    //win.webContents.openDevTools()
    
    win.loadFile('index.html')

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

