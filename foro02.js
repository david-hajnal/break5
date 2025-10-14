samples('github:david-hajnal/breaks3')

setCps(150/60/8)

$: s("breaks/1").fit()
  .scrub(irand(16).div(32).seg(16).rib("<128, 4, 64, 8, 11>",2))
  .almostNever(ply("2 | 5 | 3"))
  .gain(0.8)
  .orbit(4)
