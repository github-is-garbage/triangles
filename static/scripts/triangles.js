import { RenderTriangle, RenderTrianglePoints } from "./render.js"

window.addEventListener("load", () =>
{
	const Canvas = document.querySelector("canvas")

	Canvas.width = 1000
	Canvas.height = 1000

	RenderTriangle(20, 20, 200, 100, 50, 500, "rgba(0, 255, 0, 0.5)", "rgba(0, 0, 255, 0.25)")
	RenderTrianglePoints(20, 20, 200, 100, 50, 500)
})
