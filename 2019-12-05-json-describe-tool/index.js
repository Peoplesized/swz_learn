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
  .description('A CLI tool for describing JSON');

program
  .option('--banner')
  .alias('-b')
  .description('Print banner')
  .action(() => {
    show_banner();
  });

program.parse(process.argv);