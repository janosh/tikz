#import "@preview/cetz:0.3.2": canvas, draw
#import draw: content, circle, line, scope, translate, set-style

#set page(width: auto, height: auto, margin: 8pt)

// Helper function to draw a vertex with a name
#let vertex(pos, label, color, name) = {
  content(pos, $n_#label$, frame: "circle", radius: 0.25, fill: color, stroke: black + 0.8pt, name: name, padding: 1pt)
}

#canvas({
  // Define colors
  let colors = (
    rgb("#f9c5c5"), // light red
    rgb("#f2ceaa"), // light orange
    rgb("#b9d6f2"), // light blue
    rgb("#b1e2d8"), // light teal
  )

  set-style(line: (stroke: black + 0.8pt))

  // Draw first graph (square)
  scope({
    vertex((0, 0), 1, colors.at(0), "g1n1")
    vertex((0, 2), 2, colors.at(1), "g1n2")
    vertex((2, 2), 3, colors.at(2), "g1n3")
    vertex((2, 0), 4, colors.at(3), "g1n4")

    line("g1n1", "g1n2")
    line("g1n2", "g1n3")
    line("g1n3", "g1n4")
    line("g1n4", "g1n1")
  })

  // Draw second graph (trapezoid)
  scope({
    translate((4, 0))

    vertex((0, 0), 1, colors.at(0), "g2n1")
    vertex((2, 2), 2, colors.at(1), "g2n2")
    vertex((0, 2), 3, colors.at(2), "g2n3")
    vertex((2, 0), 4, colors.at(3), "g2n4")

    line("g2n1", "g2n2")
    line("g2n2", "g2n3")
    line("g2n3", "g2n4")
    line("g2n4", "g2n1")
  })

  // Draw third graph (kite)
  scope({
    translate((8, 0))

    vertex((0, 0), 1, colors.at(0), "g3n1")
    vertex((2, 2), 2, colors.at(1), "g3n2")
    vertex((2, 0), 3, colors.at(3), "g3n3")
    vertex((0, 2), 4, colors.at(2), "g3n4")

    line("g3n1", "g3n2")
    line("g3n2", "g3n3")
    line("g3n3", "g3n4")
    line("g3n4", "g3n1")
  })

  // Draw fourth graph (irregular)
  scope({
    translate((12.5, 0))

    vertex((-0.5, 0), 1, colors.at(0), "g4n1")
    vertex((0.25, 2.2), 2, colors.at(1), "g4n2")
    vertex((2, 1.6), 3, colors.at(2), "g4n3")
    vertex((-0.7, 1.4), 4, colors.at(3), "g4n4")

    line("g4n1", "g4n2")
    line("g4n2", "g4n3")
    line("g4n3", "g4n4")
    line("g4n4", "g4n1")
  })
})
