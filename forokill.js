samples('github:david-hajnal/break5')

setCps(150/60/4)

$: s("breaks/1")
  .scrub(irand(16).div(16).seg(16).rib("<1, 1024>", 3))
  //.cut(1)
  .almostNever(ply("2 | 8"))
  //.cut(3)
  .gain(1)
  .room("<0 .2 .4 .8>")
  .pan(sine.range(0.2,0.8).fast(4))
  .coarse("<1 4 1 0 5>")
  ._pianoroll({ cycles: 2 })    // timeline of slices
._scope()                     // oscilloscope of audio out
._spectrum({ speed: 2 }) 
  .orbit(2)
