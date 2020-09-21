# Timezone and current date
## Get started
- install
```
$ npm i && npm start
```

- open your browser in [localhost:4000](http://localhost:4000)

## Thinking process
1. started as MFE test with Web Components
2. may need to pass to apps data, props etc, but real world app consideration, no routing needed
3. given time limit, to create bare minimum to demo
4. didn't add eslint, prettier or any static types for simplicity, mandatory for big apps or big teams
5. use oss WC wrapper rather than handle low level API for simplicity
6. WC doesn't handle bundle size 

## Limitation / consideration
1. no HMR
2. event bus is code duplication for the moment,
but can either be a 
    2.1 runtime module get injected,
     
    2.2 or injected as prop to apps,
     
    2.3 or as a npm package
3. 
