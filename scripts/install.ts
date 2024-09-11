#!/usr/bin/env node
import inquirer from 'inquirer';
import shell from 'shelljs';

type QuestionsProps = {
  type: string;
  name: string;
  message: string;
  choices: string[];
}[];

const questions: QuestionsProps = [
  {
    type: 'list',
    name: 'theming',
    message: 'You want theming in:',
    choices: ['CSS', 'styled-components'],
  },
];

inquirer.prompt(questions as any).then((answers) => {
  const selectedTheme = answers.theming;

  // Install the appropriate version based on the user's choice
  if (selectedTheme === 'CSS') {
    console.log('Setting up project with CSS theming...');
    shell.exec('npx degit username/oz-boilerplate-css my-app');
  } else if (selectedTheme === 'styled-components') {
    console.log('Setting up project with styled-components theming...');
    shell.exec('npx degit username/oz-boilerplate-styled-components my-app');
  }

  console.log('Project setup complete. Navigate to "my-app" and run npm install.');
});
