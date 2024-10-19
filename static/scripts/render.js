export function RenderTriangle(Triangle, Border, Fill)
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	Context.strokeStyle = Border
	Context.fillStyle = Fill

	Context.beginPath()
	{
		Context.moveTo(Triangle.x1, Triangle.y1)
		Context.lineTo(Triangle.x2, Triangle.y2)
		Context.lineTo(Triangle.x3, Triangle.y3)
	}
	Context.closePath()

	Context.fill()
	Context.stroke()
}

export function RenderTrianglePoints(Triangle)
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	Context.font = "1em sans-serif"
	Context.fillStyle = "white"

	Context.fillText("Point 1", Triangle.x1, Triangle.y1)
	Context.fillText("Point 2", Triangle.x2, Triangle.y2)
	Context.fillText("Point 3", Triangle.x3, Triangle.y3)
}
