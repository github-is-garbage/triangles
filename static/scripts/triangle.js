export class Triangle
{
	constructor(x1, y1, x2, y2, x3, y3)
	{
		this.AssignPoints(x1, y1, x2, y2, x3, y3)
	}

	SetBorderColor(BorderColor)
	{
		this.m_BorderColor = new Color(...BorderColor.Unpack())
	}

	SetFillColor(FillColor)
	{
		this.m_FillColor = new Color(...FillColor.Unpack())
	}

	AssignPoints(x1, y1, x2, y2, x3, y3)
	{
		this.x1 = x1
		this.y1 = y1

		this.x2 = x2
		this.y2 = y2

		this.x3 = x3
		this.y3 = y3
	}

	GetCenter()
	{
		const CenterX = (this.x1 + this.x2 + this.x3) / 3
		const CenterY = (this.y1 + this.y2 + this.y3) / 3

		return [CenterX, CenterY]
	}

	RotatePoints(Degrees)
	{
		const Radians = Degrees * (Math.PI / 180)

		const [CenterX, CenterY] = this.GetCenter()

		const Rotate = (X, Y) =>
		{
			const TranslatedX = X - CenterX
			const TranslatedY = Y - CenterY

			const RotatedX = TranslatedX * Math.cos(Radians) - TranslatedY * Math.sin(Radians)
			const RotatedY = TranslatedX * Math.sin(Radians) + TranslatedY * Math.cos(Radians)

			return [RotatedX + CenterX, RotatedY + CenterY]
		}

		const [x1, y1] = Rotate(this.x1, this.y1)
		const [x2, y2] = Rotate(this.x2, this.y2)
		const [x3, y3] = Rotate(this.x3, this.y3)

		this.AssignPoints(x1, y1, x2, y2, x3, y3)
	}

	RenderToContext(Context)
	{
		Context.strokeStyle = this.m_BorderColor.ToString()
		Context.fillStyle = this.m_FillColor.ToString()

		Context.beginPath()
		{
			Context.moveTo(this.x1, this.y1)
			Context.lineTo(this.x2, this.y2)
			Context.lineTo(this.x3, this.y3)
		}
		Context.closePath()

		Context.fill()
		Context.stroke()
	}

	RenderPointsToContext(Context)
	{
		Context.font = "1em sans-serif"
		Context.fillStyle = "white"

		Context.fillText("Point 1", this.x1, this.y1)
		Context.fillText("Point 2", this.x2, this.y2)
		Context.fillText("Point 3", this.x3, this.y3)
	}
}
