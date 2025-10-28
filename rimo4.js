samples('https://raw.githubusercontent.com/david-hajnal/break5/main/strudel.json?version=5')

setCps(132/60/8)

$: s("rimo/1")
  .fit()
  .scrub("<{8@3 14 15 [1 7]}%8 {11@2 <~ 12@6> <~ [11 13]> [4 0] {0 0}*2}%8 {12 <~ 1@2> 7*2 {8 9}*2}%8>"
  //.scrub("<{0 1 2 3 4 5 6 7 9 10 11 12 13 14 15}%8>"
                .div(16)
                //.ribbon("<1 .123 1337 1331 5 .14 .5 0 0 .2>", 1)
                .ribbon("1337", 12)
         
  )
  .almostNever(ply("2 | 3 | 5"))
  .gain(1)
  .room("<0 .2 .45 .1 .3 .3>")
  //.pan(sine.range(0.2,0.8).fast(4))
  .coarse("{1 0 1 1 0}")
  .orbit(1)