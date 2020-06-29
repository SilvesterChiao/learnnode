#!/usr/bin/env node
// #!/usr/bin/node

const readline = require('readline');
var colors = require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('你想对谁说声hello？ '.red, answer => {
    let i = 0;
    let time = setInterval(() => {
        if (i > 10) {
            clearInterval(time);
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);
            console.log(`hello ${answer}`);
            process.exit(0);
            return;
        }
        readline.cursorTo(process.stdout, 0, 1);
        readline.clearScreenDown(process.stdout);
    }, 200);
});
