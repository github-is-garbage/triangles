import { Triangle, CreateBasicTri, CreateTriCentered } from "./triangle.js"
import { Triangles, StartAnimation, StopAnimation } from "./render.js"

function UpdateCanvasSize()
{
	const Canvas = document.querySelector("canvas")
	if (!Canvas) return

	StopAnimation()

	Canvas.width = document.body.clientWidth
	Canvas.height = document.body.clientHeight

	StartAnimation()
}

window.addEventListener("load", () =>
{
	Triangles.push(CreateBasicTri(
		new Point(180, 120),
		new Point(200, 180),
		new Point(100, 180),

		new Color(0, 255, 0, 1),
		new Color(0, 0, 255, 0.5)
	))

	Triangles.push(CreateTriCentered(
		new Point(250, 250),

		new Point(0, 20),
		new Point(20, -20),
		new Point(-20, -20),

		new Color(255, 0, 0, 1),
		new Color(255, 255, 0, 0.5)
	))

	UpdateCanvasSize()
	StartAnimation()
})

window.addEventListener("resize", UpdateCanvasSize)
