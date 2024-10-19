import { Triangle } from "./triangle.js"

const IdealFrameTime = 1000 / 60 // 60 fps
var LastFrameTime = null

const Triangles = []

function RenderTriangles(RenderContext, DeltaFrameTime)
{
	for (const Tri of Triangles)
	{
		Tri.RotatePoints(1 * DeltaFrameTime)

		Tri.RenderToContext(RenderContext)
		Tri.RenderPointsToContext(RenderContext)
	}
}

function AnimateFrame()
{
	const Canvas = document.querySelector("canvas")
	if (!Canvas) return

	const RenderContext = Canvas.getContext("2d")
	RenderContext.clearRect(0, 0, Canvas.width, Canvas.height)

	// Try to get 60 fps
	if (!LastFrameTime)
		LastFrameTime = Date.now()

	const CurrentFrameTime = Date.now()
	const DeltaFrameTime = (CurrentFrameTime - LastFrameTime) / IdealFrameTime

	LastFrameTime = CurrentFrameTime

	RenderTriangles(RenderContext, DeltaFrameTime)

	// Garrr
	requestAnimationFrame(AnimateFrame)
}

window.addEventListener("load", () =>
{
	function CreateTestTri(PointA, PointB, PointC, BorderColor, FillColor)
	{
		const TestTri = new Triangle(PointA, PointB, PointC)
		TestTri.SetBorderColor(BorderColor)
		TestTri.SetFillColor(FillColor)

		Triangles.push(TestTri)
	}

	CreateTestTri(new Point(150, 100), new Point(200, 175), new Point(100, 175), new Color(0, 255, 0, 0.5), new Color(0, 0, 255, 0.25))

	AnimateFrame()
})
