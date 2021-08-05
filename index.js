//import chalk from 'chalk';

const readlineSync = require('readline-sync');

const chalk = require('chalk');

console.log(chalk.yellowBright('Welcome to the Quiz'));
let username = readlineSync.question(chalk.blueBright("What's your Name: \n"));
console.log(chalk.yellow('Hello',username,", Let's Play the Quiz!!"));

console.log('\n');
console.log(chalk.yellow('Rules & Instructions: '));
console.log(chalk.yellow('1.',username + ', There are 10 Questions on Cricket.'));
console.log(chalk.yellow('2. You will get 2 points on each Right Answer.'));
console.log(chalk.yellow('3. One Point will be deducted if the Answer is Wrong.'));
console.log('\n');

const questions = [
{
  question: '1) Which is first Indian cricket tournament ?',
  option: ['Bombay Series', 'Bombay Triangular', 'Pepsi Cup', 'None of these'],
  answer: 'Bombay Triangular'
},
{
  question: '2) Which of the following is first cricket club in India ?',
  option: ['Maharashtra Cricket Clu', 'Bombay Cricket Club', 'Oriental Cricket Club', 'East Indian Cricket Club'],
  answer: 'Oriental Cricket Club'
},
{
  question: '3) Indian played first test match against ?',
  option: ['England', 'Pakistan', 'Australia', 'South Africa'],
  answer: 'England'
},
{
  question: '4) Indian played their First ODI Match against ?',
  option: ['Australia', 'England', 'South Africa', 'Pakistan'],
  answer: 'England'
},
{
  question: '5) Indian played their First ODI Match against ?',
  option: ['Australia', 'England', 'South Africa', 'Pakistan'],
  answer: 'England'
},
{
  question: '6) The first century in the cricket history was scored by who ?',
  option: ['Sir Don Bradman', 'Alan Davidson', 'Wilfred Rhodes'],
  answer: 'Wilfred Rhodes'
},
{
  question: '7) The first century in the cricket was scored in Which year  ?',
  option: ['1875', '1900', '1881'],
  answer: '1881'
},
{
  question: '8) Who is holding the record of first batsman to share in 50 Century Partnerships ?',
  option: ['Don Bradman', 'Don Bradman', 'Wilfred Rhodes'],
  answer: 'Wilfred Rhodes'
},
{
  question: '9) holds a record having longest test career ?',
  option: ['Sunil gavaskar', 'Graham Mc-Kenzie', 'Alan Davidson'],
  answer: 'Sunil gavaskar'
},
{
  question: '10) A cricket match is divided into periods called ?',
  option: ['innings', 'intervals', 'None of these', 'half'],
  answer: 'innings'
}
];

let score = 0;
const addScore = (x) => x + 2;
const removeScore = (x) =>{
  return x === 0 ? 0 : x - 1;
} ; 

const quiz = (question, options, answer) => {
  var answerIndex = readlineSync.keyInSelect(options, chalk.blue.bgRed.bold(question));
  if(options[answerIndex] === answer){
    console.log(chalk.green.bold(answer + " is correct answer!"));
    score = addScore(score);
  }
  else {
    console.log(chalk.red.bold(answer + " is wrong answer!"));
    score = removeScore(score);
  }
};


for(const item of questions){
  quiz(item["question"], item["option"], item["answer"]);
  
}
console.log('\n');
console.log('\n');
console.log('\n');
console.log(chalk.magenta.bold("Your Score is " + score));