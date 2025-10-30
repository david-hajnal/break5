samples('https://raw.githubusercontent.com/david-hajnal/break5/main/strudel.json?version=6')

setCps(132/60/8)

$: s("rimo/1")
  .fit()
  //.scrub("{14 ~ ~ 13 ~ 22*2 ~ ~ ~ [3 11]}%8 | {15 ~ 3 ~ 4 ~ 1 7}%8 | {1 2 3 4}%4"
  .scrub("{14 22*2 0 1 2[3 11]}%4"
                .div(4)
                .ribbon("<1 .123 1337 1331 5 .14 .5 0 0 .2>", 1)
  )
  .chop(8).loopAt(4)
  .almostNever(ply("3"))
  .gain(1) 
  .room("<0 .2 .45 1 .9 .3>")
  .coarse("{1 0 1 3 0}")
  .orbit(1)
