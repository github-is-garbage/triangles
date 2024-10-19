export class Triangle
{
	constructor(PointA, PointB, PointC)
	{
		this.PointA = new Point(...PointA.Unpack())
		this.PointB = new Point(...PointB.Unpack())
		this.PointC = new Point(...PointC.Unpack())
	}

	SetBorderColor(BorderColor)
	{
		this.m_BorderColor = new Color(...BorderColor.Unpack())
	}

	SetFillColor(FillColor)
	{
		this.m_FillColor = new Color(...FillColor.Unpack())
	}

	GetCenter()
	{
		const CenterX = (this.PointA.x + this.PointB.x + this.PointC.x) / 3
		const CenterY = (this.PointA.y + this.PointB.y + this.PointC.y) / 3

		return new Point(CenterX, CenterY)
	}

	RotatePoint(Point, CenterPoint, Radians)
	{
		const TranslatedX = Point.x - CenterPoint.x
		const TranslatedY = Point.y - CenterPoint.y

		const RotatedX = TranslatedX * Math.cos(Radians) - TranslatedY * Math.sin(Radians)
		const RotatedY = TranslatedX * Math.sin(Radians) + TranslatedY * Math.cos(Radians)

		Point.x = RotatedX + CenterPoint.x
		Point.y = RotatedY + CenterPoint.y
	}

	RotatePoints(Degrees)
	{
		const Radians = Degrees * (Math.PI / 180)
		const CenterPoint = this.GetCenter()

		this.RotatePoint(this.PointA, CenterPoint, Radians)
		this.RotatePoint(this.PointB, CenterPoint, Radians)
		this.RotatePoint(this.PointC, CenterPoint, Radians)
	}

	RenderToContext(Context)
	{
		Context.strokeStyle = this.m_BorderColor.ToString()
		Context.fillStyle = this.m_FillColor.ToString()

		Context.beginPath()
		{
			Context.moveTo(...this.PointA.Unpack())
			Context.lineTo(...this.PointB.Unpack())
			Context.lineTo(...this.PointC.Unpack())
		}
		Context.closePath()

		Context.fill()
		Context.stroke()
	}

	RenderPointsToContext(Context)
	{
		Context.font = "1em sans-serif"
		Context.fillStyle = "white"

		Context.fillText("Point 1", ...this.PointA.Unpack())
		Context.fillText("Point 2", ...this.PointB.Unpack())
		Context.fillText("Point 3", ...this.PointC.Unpack())
	}
}
