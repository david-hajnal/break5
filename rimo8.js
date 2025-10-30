samples('https://raw.githubusercontent.com/david-hajnal/break5/main/strudel.json?version=6')

setCps(132/60/8)

$: s("rimo/1")
  .fit()
  .chop(8)
  .scrub("{0 1@3 8*2 23 22 3 7}%32".div(32))
  .loopAt("2 | 4 | 8 | 8@4 | 2 | 2@3 | 2 | 3 | [2 4] | 4*2".rib("<1337 .75 .1 .2 0 .5 .25 0 1 24 12 4 .125>", 2))
  .rarely(ply("3 | 8"))
  .gain(1) 
  .room("<0 .2 .45 1 .9 3>")
  .coarse("{1 0 1 1.5 0}")
  .orbit(1)
