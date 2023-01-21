// IIFE for running...
// npx tsc --watch
// node dist/06-any.js
(() => {
  // using any TS type
  let dynamicVar: any;
  dynamicVar = 100;
  dynamicVar = null;
  dynamicVar = {};
  dynamicVar = '';
  // any is not recomended, as you're getting back where you started
  // it exists as it can be used for starting a migration of a project to TS

  // casting any variables
  dynamicVar = 'hola'
  const castingVar = (dynamicVar as string).toLowerCase()

  dynamicVar = 1000
  const castingVar2 = (<number>dynamicVar).toFixed()
})();
