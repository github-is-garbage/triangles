import { Triangle } from "./triangle.js"

window.addEventListener("load", () =>
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	const TestTri = new Triangle(150, 100, 200, 175, 100, 175)
	TestTri.SetBorderColor(0, 255, 0, 0.5)
	TestTri.SetFillColor(0, 0, 255, 0.25)

	TestTri.RotatePoints(45)

	TestTri.RenderToContext(Context)
	TestTri.RenderPointsToContext(Context)
})
