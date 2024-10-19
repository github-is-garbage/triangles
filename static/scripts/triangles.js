import { Triangle } from "./triangle.js"
import { RenderTriangle, RenderTrianglePoints } from "./render.js"

window.addEventListener("load", () =>
{
	const TestTri = new Triangle(20, 20, 200, 100, 50, 500)
	TestTri.SetBorderColor(0, 255, 0, 0.5)
	TestTri.SetFillColor(0, 0, 255, 0.25)

	RenderTriangle(TestTri)
	RenderTrianglePoints(TestTri)
})
