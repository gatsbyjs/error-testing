const { prompt } = require('enquirer')
const execa = require('execa')

async function run() {
  const response = await prompt({
    type: 'select',
    name: 'sites',
    message: 'Pick an error to test',
    choices: [
      {
        name: '85901',
        message: 'Generic GraphQL error (85901)'
      },
      {
        name: '85920',
        message: 'Using a variable in a StaticQuery (85920)'
      }
    ]
  })

  try {
    const subprocess = execa('yarn', ['workspace', response.sites, 'develop'], { stdio: 'inherit' })
    await subprocess
  } catch({ stderr, exitCode }) {
    console.log(stderr)
    process.exit(exitCode)
  }
}

run()