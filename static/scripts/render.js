const IdealFrameTime = 1000 / 60 // 60 fps
var LastFrameTime = null

export const Triangles = []

export const Settings = {
	"Points": true,
	"Borders": true,
	"Fills": true
}

function RenderGrid(RenderCanvas, RenderContext, Spacing)
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

function RenderTriangles(RenderContext, DeltaFrameTime)
{
	for (const Tri of Triangles)
	{
		Tri.RotatePoints(1 * DeltaFrameTime)

		Tri.RenderToContext(RenderContext, Settings.Borders, Settings.Fills, Settings.Points)
	}
}

export function AnimateFrame()
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

	RenderGrid(Canvas, RenderContext, 10)
	RenderTriangles(RenderContext, DeltaFrameTime)

	// Garrr
	requestAnimationFrame(AnimateFrame)
}
