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

	RenderToContext(Context, RenderBorder = true, RenderFill = true, RenderPoints = false)
	{
		if (!RenderBorder && !RenderFill) return

		Context.strokeStyle = this.m_BorderColor.ToString()
		Context.fillStyle = this.m_FillColor.ToString()

		Context.beginPath()
		{
			Context.moveTo(...this.PointA.Unpack())
			Context.lineTo(...this.PointB.Unpack())
			Context.lineTo(...this.PointC.Unpack())
		}
		Context.closePath()

		if (RenderFill) Context.fill()
		if (RenderBorder) Context.stroke()

		if (RenderPoints)
			this.RenderPointsToContext(Context)
	}

	RenderPoint(Context, Point, FillColor)
	{
		Context.fillStyle = FillColor.ToString()

		Context.beginPath()
		{
			Context.arc(Point.x, Point.y, 3, 0, Math.PI * 2, false)
		}
		Context.closePath()

		Context.fill()
	}

	RenderPointsToContext(Context)
	{
		this.RenderPoint(Context, this.PointA, new Color(255, 0, 0))
		this.RenderPoint(Context, this.PointB, new Color(0, 255, 0))
		this.RenderPoint(Context, this.PointC, new Color(0, 0, 255))
	}
}

export function CreateBasicTri(PointA, PointB, PointC, BorderColor, FillColor)
{
	const Tri = new Triangle(PointA, PointB, PointC)
	Tri.SetBorderColor(BorderColor)
	Tri.SetFillColor(FillColor)

	return Tri
}

export function CreateTriCentered(CenterPoint, PointA, PointB, PointC, BorderColor, FillColor)
{
	PointA.Add(CenterPoint)
	PointB.Add(CenterPoint)
	PointC.Add(CenterPoint)

	return CreateBasicTri(PointA, PointB, PointC, BorderColor, FillColor)
}
