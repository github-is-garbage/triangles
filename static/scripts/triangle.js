export class Triangle
{
	constructor(x1, y1, x2, y2, x3, y3)
	{
		this.AssignPoints(x1, y1, x2, y2, x3, y3)
	}

	SetBorderColor(r, g, b, a)
	{
		this.m_strBorderColor = `rgba(${r}, ${g}, ${b}, ${a})`
	}

	SetFillColor(r, g, b, a)
	{
		this.m_strFillColor = `rgba(${r}, ${g}, ${b}, ${a})`
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
}
