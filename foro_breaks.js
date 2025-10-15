samples('github:david-hajnal/break5')

setCps(150/60/4)

$: s("breaks/1")
  .fit()
  .splice(8, "0 1 2 3 4 <5 1> 2@1*2 <6 7>")   
  .ribbon("<1 .75 .25>", 2)
  // .chop(8)
  // .loopAt(1) 
  .almostNever(ply("2 | 5"))
  .cut(iter(1))
  .gain(1)
  .room("<0 .2 .4 .1>")
  .pan(sine.range(0.2,0.8).fast(4))
  .coarse("<1 4 1 0 5>")
  ._pianoroll({ cycles: 2 })    // timeline of slices
._scope()                     // oscilloscope of audio out
._spectrum({ speed: 2 }) 
