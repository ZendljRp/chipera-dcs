const {app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname,'node_modules', '.bin', 'electron')
    })
}


let mainWindows


app.on('ready', () => {
    mainWindows = new BrowserWindow({
        width: 1000,
        height: 500
    });
    mainWindows.loadURL(url.format({
        pathname: path.join(__dirname, 'src/views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [{
    label: ''
}]