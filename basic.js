samples('https://raw.githubusercontent.com/david-hajnal/break5/main/strudel.json?version=23')

setCps(132/60/8)

$: s("breaks/1")
   .fit()
  .scrub(irand(16).div(16).seg(16).rib("<1, 1024>", 3))
  .loopAt("1 | 1@4 | 1 | 2 | [2 1] | 1*2".rib("<1337 .75 .1 .2 0 .5 .25 0 1 24 12 4 .125>", 2))
  .rarely(ply("3 | 8"))
  .gain(3) 
  .room("<0 .2 .45 .1 .75 .3>")
  .coarse("{1 0 1 1.5 0}")
  .orbit(2)
