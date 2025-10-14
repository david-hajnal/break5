samples('github:david-hajnal/breaks3')

setCps(150/60/2)

$: s("breaks/1")
  .splice(8, "<0 2 1 3 4*2 5 6 [6 7]>*2")
  .cut(1).rarely(ply("2")) 
  .chop(8).loopAt(4)
  .sometimesBy(.1, ply("2"))
  .sometimesBy(.25, mul(speed("-1")))
  .almostNever(ply("2 | 5 | 3"))
  .gain(0.8)
  .orbit(2)
