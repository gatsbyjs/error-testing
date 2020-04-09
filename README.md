# Gatsby Error Testing

Gatsby has [structured errors][errormap] with specific IDs. With this suite you can test certain error messages directly with a test project, e.g. to see if the error message helps with solving the problem.

[![Edit error-testing](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gatsbyjs/error-testing/tree/master/?fontsize=14&hidenavigation=1&theme=dark)

## Usage (Locally)

Ensure that you have the latest LTS version of Node installed. Install [yarn](https://classic.yarnpkg.com/en/docs/install).

Clone the repository and run in your terminal:

```shell
yarn install
```

After a successful installation you can use the CLI:

```shell
yarn begin
```

Choose one of the testing sites. Also open this repository in your favorite code editor and go to the `sites` directory. Each folder in there has the name of the error ID you chosen after running `yarn begin`. Go into this folder and you'll have a normal Gatsby project. You could e.g. directly open this folder in your editor.

## Usage (Codesandbox)

**Note: This requires an account on CodeSandbox**

Click on the Edit on CodeSandbox, press **Fork** and let CodeSandbox do its thing. On the right side there is the **Browser** window and below that the **Terminal, Console, Problems** tabs. Click on **Terminal** and then on the **+** sign. You now should have two tabs (`yarn start` and `/bin/bash`). The `/bin/bash` one should be automatically selected and a new terminal window appeared. Type `yarn begin` + <kbd>Enter</kbd>.

## Adding a new error

Create a new project based on the [hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) or copy/paste one of the existing projects inside `./sites` to a new folder inside `./sites` with the name being an ID from the [errormap][errormap]. Make sure to run a `yarn install` after adding/copying a site.

You'll also need to add a new option to the CLI inside `./cli/index.js` with the `name` as the ID, `message` as the longer description.

[errormap]: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/structured-errors/error-map.ts