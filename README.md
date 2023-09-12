## Typescript Express API

This is simple implementation of Typescript Express API to compute the shortest path between 3D coordinates that are obtained from external API.
The project is set up to be easily extensible. Source code adheres to basic backend server file structure.
The eslint and prettier are set up for formatting and linting, jest is used for automated tests.
Project contains CI/CD configuration, tests run in Github Actions.

## How to use this project

To run project locally, you must first specify environment variables (check `.env.example` file).
Then you can spin up the local development server by running `npm run dev` or create production build with `npm run build`.
You can also `lint` and `test` the project by running scripts specified in `package.json`.

## Improvements

This project calculates the shortest path with naive algorithm (we are checking all possible paths).
This can be improved by implementing modified Dijkstra's algorithm for single source shortest path.
Check this nodejs implementation:
https://www.npmjs.com/package/node-dijkstra
