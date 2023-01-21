# typescript-project-alfa
Interesting stuff when learning and using Typescript.

One of the best approaches on development
> The earlier you find a mistake, the easier it is to fix it (_Software Eng. at Google - O'REILLY_)

## Resources
- [The official Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [The official Typescript Playground](https://www.typescriptlang.org/play)
- [Typescript V3 Fundamentals by Mike North](https://www.typescript-training.com/course/fundamentals-v3)
- 🇪🇸 [Platzi Typescript V4 Fundamentals](https://platzi.com/clases/2878-typescript)
- 🇪🇸 [Madrid JS 211124 - Deberías usar TypeScript y he aquí el porqué](https://www.youtube.com/watch?v=51UpkA36gn0)

## Config and first steps
### Install TS
You'll use it on your development environment:

```
npm install typescript --save-dev
```
### Automatic visualization of bugs in your code
One interesting approach when starting to learn Typescript is how, once installed TS, it analiyses continiously the bugs in your code, so it could prevent at least a 15% of bugs. You can enjoy it thanks to the static analysis running in your editor.

> File used: `search-for-errors.js` before config (`serach-for-errors.ts` after config)

1. Add JS code with mistakes (as this one https://gist.github.com/nicobytes/bd18fbe87c037a10faa3296ea3992639)
2. Add `//@ts-check` on the first line of your JS file
3. Enjoy how TS analyses the errors and the errors' info that is giving you

### Compiler
Runs the compiler translating the .ts file to .js file. 
I added flags examples that won't be necessary after configuring your `tsconfig.json` file.
The target is the JS version that you want TS to read (https://www.typescriptlang.org/tsconfig#target). By default, target is ES3:

> File used: `00-hello.js` & `01-demo.js` (.ts extension after configuration)

```
// compile easily an specific file
npx tsc src/name-of-your-file.ts

// add the ES6 target flag
npx tsc src/name-of-your-file.ts --target es6

// dist folder flag
mkdir dist
npx tsc src/name-of-your-file.ts --outDir dist
```

### Configuration
All previous steps are initial steps for checking how TS works. But for a real example of a project using TS, we need to configure TS via a configuration file. This is a fundamental configuration of your development environment to enjoy Typescript in our projects:

```
// create a tsconfig file. As target, my version 4.9.4 has set up ES6
npx tsc --init

// basic options to habilitate (uncomment) in tsconfig.json
"outDir": "./dist"
"rootDir": "./src"

// now just run the script for compilation
npx tsc

// in watch mode (recommended)
npx tsc --watch
```

TS will throw you errors in your terminal, but it eventually compiles your JS files even with errors, so it truly relies in your criteria as developer.

🧐 Extra resource: [Centralized Recommendations for TSConfig bases](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)


## The real deal: the syntax for types
These are the **basics** that you should start from when leaarning Typescript.

Check in each file the examples, how TS tells you if something is wrong and read carefully the syntax.

> Files used: `02-numbers.ts`, `03-booleans.ts`, `04-strings.ts`, `05-arrays.ts`

The 2 ways of interacting with the TS syntax are:
- Inference of types: your editor helps you when writing in TS files, as it highlights the possible errors
- Explicit types: classic syntax

```ts
let productPrice: number = 100;
```

For the (no) use of the TS type any: `06-any.ts`

For union types, which gives flexibility: `07-union.ts`

For alias and literal types: `08-alias.ts`

For null and undefined types: `09-null.ts`

For functions:
  - `10-functions.ts`
  - `11-return.ts`
  - `12-objects.ts`

For how to use modules: `/products/*.ts`

For how to use external libraries: 
  - with TS support: `13-external-libraries.ts`
  - without TS support: `13-libs-not-supported.ts`
