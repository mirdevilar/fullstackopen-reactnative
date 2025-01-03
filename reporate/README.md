### Installation

1. Install [rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api) separately and run it, all according to the repo's instructions.
2. Create a `.env` file in the root directory of the app, where `package.json` is located.
3. Inside the file, add an environment variable `APOLLO_URI` and set it to the URL where the `rate-repository-api`'s Apollo GraphQL server is listening. For example and usually:
```
APOLLO_URI=http://localhost:4000/graphql
```
4. Run `npm i` to install all dependencies.
5. Make sure the `rate-repository-api` is running and run `npm start` to start the app. Once it's done starting up, the details to enter the app with your client will be shown.