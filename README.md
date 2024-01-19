# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Docker Files added
 - Commands to run the docker files
    - docker build -t [image-name] .  //creates the image
    - docker run --name [container-name] -p 5173:5173 -d [image-name]  //starts the container
    - docker stop [container-name]
    - docker ps -a    //displays all the containers
    - docker container prune   //removes all the stopped containers 

# Testing Files and Dependencies
  - Library used
    - vitest 
    - jsdom
    - react testing library
  - Cmds
    - npm i -D vitest
    - npm i -D jsdom @testing-library/react @testing-library/jest-dom
  - Edit
    - vite.config.ts file with below code
    - tsconfig.json file with a line - "types": ["vitest/globals"],
    - package.json add "test": "vitest" in scripts
  - References
    - https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib
