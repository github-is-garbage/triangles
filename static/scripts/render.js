export const IdealFrameTime = 1000 / 60 // 60 fps
var LastFrameTime = null

var RenderCanvas = null
var RenderContext = null

var NextFrameNumber = null

export const Triangles = []

export const Settings = {
	"Points": true,
	"Borders": true,
	"Fills": true
}

function RenderGrid(Spacing)
{
	RenderContext.strokeStyle = "gray"

	RenderContext.beginPath()
	{
		for (let i = 0; i < RenderCanvas.width; i += Spacing)
		{
			RenderContext.moveTo(i, 0)
			RenderContext.lineTo(i, RenderCanvas.height)
		}

		for (let i = 0; i < RenderCanvas.height; i += Spacing)
		{
			RenderContext.moveTo(0, i)
			RenderContext.lineTo(RenderCanvas.width, i)
		}
	}
	RenderContext.closePath()

	RenderContext.stroke()
}

function RenderTriangles(DeltaFrameTime)
{
	for (const Tri of Triangles)
	{
		Tri.RotatePoints(1 * DeltaFrameTime)

		Tri.RenderToContext(RenderContext, Settings.Borders, Settings.Fills, Settings.Points)
	}
}

function AnimateFrame()
{
	RenderContext.clearRect(0, 0, RenderCanvas.width, RenderCanvas.height)

	// Try to get 60 fps
	if (!LastFrameTime)
		LastFrameTime = Date.now()

	const CurrentFrameTime = Date.now()
	const DeltaFrameTime = (CurrentFrameTime - LastFrameTime) / IdealFrameTime

	LastFrameTime = CurrentFrameTime

	RenderGrid(10)
	RenderTriangles(DeltaFrameTime)

	// Garrr
	NextFrameNumber = requestAnimationFrame(AnimateFrame)
}

export function StartAnimation()
{
	RenderCanvas = document.querySelector("canvas")
	if (!RenderCanvas) return console.error("Canvas not found")

	RenderContext = RenderCanvas.getContext("2d")

	RenderContext.setTransform(2, 0, 0, 2, 0, 0)
	RenderContext.clearRect(0, 0, RenderCanvas.width, RenderCanvas.height)

	AnimateFrame()
}

export function StopAnimation()
{
	if (NextFrameNumber)
		cancelAnimationFrame(NextFrameNumber)
}
