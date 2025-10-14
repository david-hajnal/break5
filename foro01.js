samples('github:david-hajnal/breaks3')

setCps(150/60/8)

$: s("breaks/1").fit()
  .scrub(irand(16).div(32).seg(16).rib("<128, 4, 3, 16>",1))
  .almostNever(ply("2 | 4"))
  .gain(0.8)
  .orbit(2)
