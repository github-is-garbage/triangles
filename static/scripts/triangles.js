import { Triangle } from "./triangle.js"

window.addEventListener("load", () =>
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	const TestTri = new Triangle(150, 100, 200, 175, 100, 175)
	TestTri.SetBorderColor(0, 255, 0, 0.5)
	TestTri.SetFillColor(0, 0, 255, 0.25)

	function RotateTestTri()
	{
		Context.clearRect(0, 0, Canvas.width, Canvas.height)

		TestTri.RotatePoints(1)

		TestTri.RenderToContext(Context)
		TestTri.RenderPointsToContext(Context)

		requestAnimationFrame(RotateTestTri)
	}

	RotateTestTri()
})
