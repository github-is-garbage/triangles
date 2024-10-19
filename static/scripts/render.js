export function RenderTriangle(Triangle)
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	Context.strokeStyle = Triangle.m_strBorderColor
	Context.fillStyle = Triangle.m_strFillColor

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
