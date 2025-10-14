samples('github:david-hajnal/breaks3')

setCps(150/60/2)

$: s("breaks/1")
  .splice(8, "<0 2 1 3@2 3*1 3? [2,1] 3>")
  .cut(1)
  .rarely(ply("2")) 
  .chop(8)
  .loopAt(2)
  .almostNever(ply("2 | 5 | 8"))
  .gain(0.8)
  .orbit(2)
