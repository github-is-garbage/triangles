class Point
{
	constructor(x, y)
	{
		this.x = x
		this.y = y
	}

	Unpack()
	{
		return [this.x, this.y]
	}

	// JavaScript doesn't support overloading :/
	Add(PointB)
	{
		this.x += PointB.x
		this.y += PointB.y
	}

	Sub(PointB)
	{
		this.x -= PointB.x
		this.y -= PointB.y
	}
}
