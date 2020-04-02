# Gatsby Error Testing

Gatsby has [structured errors][errormap] with specific IDs. With this suite you can test certain error messages directly with a test project, e.g. to see if the error message helps with solving the problem.

## Usage

Ensure that you have the latest LTS version of Node installed. Install [yarn](https://classic.yarnpkg.com/en/docs/install).

Run in your terminal:

```shell
yarn install
```

After a successful installation you can use the CLI:

```shell
yarn start
```

## Adding a new error

Create a new project based on the [hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) or copy/paste one of the existing projects inside `./sites` to a new folder inside `./sites` with the name being an ID from the [errormap][errormap].

[errormap]: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/structured-errors/error-map.ts