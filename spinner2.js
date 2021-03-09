process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

const makeSpinner = (chars) => {
  let seconds = 0;
  for (const char of chars){
      seconds += 200;
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, seconds);
  }
  setTimeout(() => {
    console.log('\n');
  }, 2000);
};



makeSpinner(spinnerArray);
