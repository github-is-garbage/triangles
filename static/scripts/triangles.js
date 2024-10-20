import { Triangle, CreateBasicTri, CreateTriCentered } from "./triangle.js"
import { Triangles, AnimateFrame } from "./render.js"

function UpdateCanvasSize()
{
	const Canvas = document.querySelector("canvas")
	if (!Canvas) return

	Canvas.width = document.body.clientWidth
	Canvas.height = document.body.clientHeight
}

window.addEventListener("load", () =>
{
	Triangles.push(CreateBasicTri(
		new Point(180, 125),
		new Point(200, 175),
		new Point(100, 175),

		new Color(0, 255, 0, 0.5),
		new Color(0, 0, 255, 0.25)
	))

	Triangles.push(CreateTriCentered(
		new Point(256, 256),

		new Point(0, 20),
		new Point(20, -20),
		new Point(-20, -20),

		new Color(255, 0, 0, 0.5),
		new Color(255, 255, 0, 0.25)
	))

	UpdateCanvasSize()
	AnimateFrame()
})

window.addEventListener("resize", UpdateCanvasSize)
