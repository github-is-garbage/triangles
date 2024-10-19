class Color
{
	constructor(r, g, b, a = 1)
	{
		this.m_iRed = r
		this.m_iGreen = g
		this.m_iBlue = b
		this.m_flAlpha = a
	}

	Unpack()
	{
		return [this.m_iRed, this.m_iGreen, this.m_iBlue, this.m_flAlpha]
	}

	ToString()
	{
		return `rgba(${this.Unpack().join(", ")})`
	}
}
