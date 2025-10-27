samples('https://raw.githubusercontent.com/david-hajnal/break5/main/strudel.json?version=4')

setCps(132/60/8)

$: s("rimo/1")

  .fit()
  .scrub("{1@2 <~ 1@6> <~ <4 2>@3> <~ [2 4]> <6 7> [4 0]}%8"
                .div(16)
                .ribbon("<0 1 2 3 .5 .25 .2 .75>", 3)
  )
  //.fit().scrub("{4@12 <[2 2 1 1] [2 2 1]>}%16".div(32))
  //.scrub(irand(16).div(32).seg(16).rib("<128, 4, 3, 16>",1))
  .almostNever(ply("2 | 6"))
 // .almostNever(ply("2 | 5 | 8"))
  //.cut(iter(1))
  .gain(1)
  .room("<0 .2 .5 .1 .3 .3>")
  //.pan(sine.range(0.2,0.8).fast(4))
  //.coarse("{1 0 1 0 0}")
  .orbit(1)