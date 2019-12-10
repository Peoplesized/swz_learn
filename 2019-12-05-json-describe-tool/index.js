#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');
const fs = require('fs');

const eh = require('./error_handler.js')

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

function readFile(file){
  if(eh.check_file_existence(file)) {
    return fs.readFileSync(file,'utf8');
  }
  return;
}

function readJSON(f){
  if(eh.check_json_validity(f)){
    return JSON.parse(f);
  }
  return;
}



function main(file){
  let f = readFile(file);
  let json = readJSON(f);
  console.log(json);
}

program
  .version('0.0.1')
  .description('A CLI tool for describing JSON')

program
  .option('-b, --banner', 'Print banner', show_banner)
  .alias('-b')

program
  .option('-i, --input <json file>', 'specify input file', main)
  .alias('-i')

program
  .option('-l, --level <level>', 'show keys of json object', show_keys)
  .alias('-l')

program.parse(process.argv);