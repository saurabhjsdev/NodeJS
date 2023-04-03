const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("Hello World")
});
app.listen( PORT, () => console.log("Server is listening to port " + PORT ));

const { spawn ,exec,execFile,fork} = require('child_process');

//Child Process Using Spawn Method
// let listFiles = spawn("ls")
// listFiles.stderr.on("data", (error) => {
//     console.log(error.toString())
// })
// listFiles.stdout.on("data", (data) => {
//     console.log(data.toString())
// })
// listFiles.on('error', (error) => {
//     console.error(`Some error occurred: ${error.message}`);
// });



//Child process using exec method
// exec("cp script.js newFile.js", (error, stdout, stderr) => {
//     if (error) { return console.log(error) }
//     if (stderr) { return console.log(stderr) }
//     console.log(stdout);
// });


//Using execFile
// execFile("node", ["--version"], (error, stdout, stderr) => {
//     if(error) { throw error }
//     console.log("Version Output: " + stdout)
// })

//Using fork method which create IPC channel for communication
const child = fork("child.js", ["hello", 1, "jumanji"]);