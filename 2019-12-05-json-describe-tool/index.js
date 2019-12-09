#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');
const fs = require('fs')

function show_banner() {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('Describe Tool', { horizontalLayout: 'full' })
    )
  );
}
function show_keys(level){
   console.log('levels')
}

function describe(file){
  let obj = fs.readFileSync(file,'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
  })
  console.log(obj)
}

program
  .version('0.0.1')
  .description('A CLI tool for describing JSON')

program
  .option('-b, --banner', 'Print banner', show_banner)
  .alias('-b')

program
  .option('-i, --input <json file>', 'specify input file', describe)
  .alias('-i')

program
  .option('-l, --level <level>', 'show keys of json object', show_keys)
  .alias('-l')

program.parse(process.argv);