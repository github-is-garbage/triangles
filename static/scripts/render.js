const IdealFrameTime = 1000 / 60 // 60 fps
var LastFrameTime = null

export const Triangles = []

function RenderTriangles(RenderContext, DeltaFrameTime)
{
	for (const Tri of Triangles)
	{
		Tri.RotatePoints(1 * DeltaFrameTime)

		Tri.RenderToContext(RenderContext)
		Tri.RenderPointsToContext(RenderContext)
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

	RenderTriangles(RenderContext, DeltaFrameTime)

	// Garrr
	requestAnimationFrame(AnimateFrame)
}
