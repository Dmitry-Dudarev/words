const readline = require('readline');
const data = require('./a.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let index = 0;

function ask() {
  const item = data[index];

  console.log(`\nТермин №${index + 1} из ${data.length}`);
  console.log(`Термин: ${item.termin}`);
  console.log(`Транскрипция: ${item.transcription}`);
  console.log(`Перевод: ${item.translate}`);
  console.log(`Определение: ${item.definition}`);
  console.log(`Примеры: 
    ${item.examples}`)

  rl.question('Введите термин: ', (answer) => {
    if (answer.trim().toLowerCase() === item.termin.toLowerCase()) {
      console.log('✅ Правильно!');
      index++;
      if (index < data.length) {
        ask();
      } else {
        console.log('\n🎉 Поздравляю! Все термины пройдены.');
        rl.close();
      }
    } else {
      console.log('❌ Неправильно, попробуйте ещё раз.');
      ask();
    }
  });
}

ask()