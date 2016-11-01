const {app, BrowserWindow, ipcMain} = require('electron');
const mongoose = require('mongoose');
// const socket = require('socket.io');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/productManager');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    const productScheme = mongoose.Schema({
        name: {type: String, unique: true, required: [true, 'Name can"t be empty!']},
        added: {type: Date, default: Date.now},
        count: {type: Number, min: 0, default: 1},
        needed: {type: Boolean, default:false}
    });

    productScheme.virtual('all').get(function () {
            return {
                name: this.name,
                added: this.added,
                count: this.count,
                needed: this.needed,
                // _id: this._id
            }
        }
    );

    const Product = mongoose.model('Product', productScheme);

    let toSend;

    Product.find({}).exec((err, products) => {
        toSend = products.map(item => item.all);
        // console.dir(products);
        // console.log(products);
        // console.log(products);
        // console.log(products[0].all);
    });

    ipcMain.on('App', (event, arg) => {
        event.sender.send('getProducts', toSend);
    });


    // Product.create({name: 'Бананы'}, (err, product) => {
    //     if (err) console.error(err);
    // })
});


let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/src/index.html`)

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})
