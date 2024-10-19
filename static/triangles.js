import { RenderTriangle } from "./render.js"

window.addEventListener("load", () =>
{
	const Canvas = document.querySelector("canvas")

	if (!Canvas)
	{
		console.error("Canvas not found!")
		return
	}

	Canvas.width = 1000
	Canvas.height = 1000

	const Context = Canvas.getContext("2d")

	Context.fillStyle = "red"
	Context.fillRect(0, 0, 1000, 1000)
})
