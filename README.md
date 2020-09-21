# Timezone and current date
## Get started
- install
```
$ npm i && npm start
```

- open your browser in [localhost:4000](http://localhost:4000)

## Thinking process
1. started as MFE test with Web Components
2. may need to pass not only attr but also data to apps
 as config/ context etc, but for real world apps
3. given time limit, to create bare minimum to demo
4. didn't add eslint, prettier for react app or any static
 types for
 simplicity, need to consider for big apps or big teams
5. use oss WC wrapper rather than handle low level WC API
 for simplicity, may not support everything, eg vue WC
  wrapper need walk around for style isolation/injection
   (feature), react one
   can opt out of shadow root, so css can be injected
6. use tailwind otherwise pure inline css. real world may
 have different options, eg use css modules with app name
  prefix or anything
  without collision   
  or components etc
7. Didn't add polyfill, so IE 11/ old browser may not be
 supported

## Limitation / consideration
1. no HMR for the moment
2. event bus is code duplication for the moment,
but can either be a 

    2.1 runtime module get injected,
     
    2.2 or injected as prop to apps,
     
    2.3 or as a npm package such as pubsub-js, also can
     be injected as 2.1
3. anchor inks are not linked to state of datetime app
, otherwise API call can be added to date time app as well.
4. WC doesn't handle bundle size very well
