samples('github:david-hajnal/breaks3')

setCps(150/60/2)

$: s("breaks/1")
.splice(8, "<0 1 2 3 4*2 5 6 [6 7]>*2")
  .cut(1).rarely(ply("2")) 
  .chop(16).loopAt(2)
  .almostNever(ply("2 | 5 | 3"))
  .gain(0.8)
  .orbit(2)
