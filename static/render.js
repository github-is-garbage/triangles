export function RenderTriangle(x1, y1, x2, y2, x3, y3, Border, Fill)
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	Context.strokeStyle = Border
	Context.fillStyle = Fill

	Context.beginPath()
	{
		Context.moveTo(x1, y1)
		Context.lineTo(x2, y2)
		Context.lineTo(x3, y3)
	}
	Context.closePath()

	Context.fill()
	Context.stroke()
}
