export function DrawLine(Context, x1, y1, x2, y2)
{
	Context.beginPath()
	{
		Context.moveTo(x1, y1)
		Context.lineTo(x2, y2)
	}
	Context.stroke()
}

export function RenderTriangle(x1, y1, x2, y2, x3, y3)
{
	const Canvas = document.querySelector("canvas")
	const Context = Canvas.getContext("2d")

	Context.strokeStyle = "black"

	DrawLine(Context, x1, y1, x2, y2)
	DrawLine(Context, x2, y2, x3, y3)
	DrawLine(Context, x3, y3, x1, y1)
}
