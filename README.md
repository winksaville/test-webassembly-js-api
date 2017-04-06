# Test WebAssembly JS API

## Install
- We assume `node` v8.0.0 been downloaded or compiled locally
  and the executable is `../node/node`. According to
  [this](https://github.com/nodejs/node/issues/12090#issuecomment-289755110)
  v8.0.0 weill released by end of April 2017. We will then remove this requirement

  I tested by compiling [node](https://github.com/nodejs/node)
  from sources on master branch at sha1
  [c68da89694b1ff4682131ed6b825e596188cc4ed](https://github.com/nodejs/node/commit/c68da89694b1ff4682131ed6b825e596188cc4ed)
- We also assume `@types/webassembly-js-api` is installed locally
  from [webassembly-js-api.d.ts](https://github.com/winksaville/webassembly-js-api.d.ts) at
  `../webassembly-js-api.d.ts`. This required will be remove
- Clone this repository
- yarn

## Run
```
yarn test
```

## Debug
```
yarn dbg
```
