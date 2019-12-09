const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');

const show_banner = () => {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('Describe Tool', { horizontalLayout: 'full' })
    )
  );
}

const say_hello = () => {
  console.info('Hello');
};

const describe = (obj) => {
  console.log(obj)
  //console.log(`${typeof obj}${obj}`);
};

program
  .version('0.0.1')
  .description('A CLI tool for describing JSON');

program
  .option('--banner')
  .alias('-b')
  .description('Print banner')
  .action(() => {
    show_banner();
  });

program.parse(process.argv);